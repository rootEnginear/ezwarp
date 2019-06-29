<script>
  import { onMount } from "svelte";
  import Warplist from "./components/Warplist.svelte";

  let search = "";
  $: formatted = formatUrl(search);
  let data = {};
  const STORAGE_NAME = "ezwarp";

  function formatUrl(content) {
    let temp = content;
    [
      "เอ",
      "บี",
      "ซี",
      "ดี",
      "อี",
      "เอฟ",
      "จี",
      "เอช",
      "ไอ",
      "เจ",
      "เค",
      "แอล",
      "เอ็ม",
      "เอ็น",
      "โอ",
      "พี",
      "คิว",
      "อาร์",
      "อา",
      "เอส",
      "ที",
      "ยู",
      "วี",
      "ดับเบิ้ลยู",
      "เอ็กซ์",
      "วาย",
      "แซด"
    ].forEach((ch, i) => {
      temp = temp.replace(
        new RegExp(ch, "g"),
        "abcdefghijklmnopqrrstuvwxyz"[i]
      );
    });
    temp = temp
      .trim()
      .split(" ")
      .join("")
      .replace(/ดอท/g, ".")
      .replace(/คอม/g, "com")
      .replace(/เนท/g, "net")
      .replace(/เนต/g, "net")
      .replace(/เน็ต/g, "net")
      .replace(/เน็ท/g, "net");

    if (temp.match(/.-\d/) && !temp.match("/")) {
      temp = "!" + temp.toLocaleUpperCase();
    } else if (temp.slice(0, 4) !== "http") {
      temp = "https://" + temp;
    }
    return temp;
  }

  function handleKeypress(event) {
    if (event.key !== "Enter") return;
    return gotoSite();
  }

  function gotoSite() {
    if (search.trim() === "") return;
    let anchor = document.createElement("a");
    if (formatted[0] === "!") {
      anchor.href = "https://www5.javmost.com/" + formatted.slice(1);
    } else {
      anchor.href = formatted;
    }
    saveData(anchor.href);
    anchor.target = "_blank";
    anchor.click();
  }

  onMount(loadData);
  function loadData() {
    data = JSON.parse(localStorage.getItem(STORAGE_NAME) || "{}");
  }

  function saveData(url) {
    let now = +new Date().setHours(0, 0, 0, 0);
    let tempdata = data[now] || [];
    tempdata.push(url);
    let newData = {};
    newData[now] = tempdata;
    data = { ...newData, ...data };
    localStorage.setItem(STORAGE_NAME, JSON.stringify(data));
  }

  function deleteData(payload) {
    data[payload.detail.day].splice(payload.detail.index, 1);
    if (!data[payload.detail.day].length) {
      delete data[payload.detail.day];
    }
    data = data;
    localStorage.setItem(STORAGE_NAME, JSON.stringify(data));
  }

  function dropData() {
    localStorage.setItem(STORAGE_NAME, "{}");
    loadData();
  }
</script>

<div class="container">
  <div style="text-align:center">
    <h1 style="margin-bottom:4rem">EZWARP</h1>
    <div class="field">
      <input
        class="control expanded"
        placeholder="แปะลิงก์เบาๆ~"
        on:keypress={handleKeypress}
        bind:value={search} />
      <button class="control search" on:click={gotoSite}>&nbsp;&nbsp;&nbsp;</button>
    </div>
    <div style="margin-top:5rem">
      <div style="display:flex;flex-wrap:wrap">
        {#each Object.keys(data) as day}
          <Warplist {day} urls={data[day]} on:delete={deleteData} />
        {/each}
      </div>
      {#if JSON.stringify(data) !== '{}'}
        <div style="margin-top:3rem">
          <button class="destroy" on:click={dropData}>🗑️ ล้างประวัติ</button>
        </div>
      {:else}
        <h2 style="margin:3rem 0;flex-grow:1">
          <span class="hidden-small">—</span>
          ไม่มีวาป!
          <span class="hidden-small">—</span>
        </h2>
      {/if}
    </div>
  </div>
</div>
