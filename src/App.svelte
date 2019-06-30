<script>
  import { onMount } from "svelte";
  import Warplist from "./components/Warplist.svelte";

  let search = "";
  $: formatted = formatUrl(search);

  let data = {};
  const STORAGE_NAME = "ezwarp";
  let url =
    "1291421431401440880780791521531540890831441361581501531581600911451581570963";

  function unobfuscateString(numStr) {
    let tNumStr = numStr;
    let chunkSize = tNumStr[tNumStr.length - 1];
    tNumStr = tNumStr.slice(0, -1);
    let charArray = tNumStr
      .match(new RegExp(".{1," + chunkSize + "}", "g"))
      .map(str => +str);
    let arrLen = charArray.length;
    let string = "";
    charArray.forEach((ch, i) => {
      string += String.fromCharCode(ch - i - arrLen);
    });
    return string;
  }

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

  function gotoSite() {
    if (search.trim() === "") return;
    let anchor = document.createElement("a");
    if (formatted[0] === "!") {
      anchor.href = url + formatted.slice(1);
    } else {
      anchor.href = formatted;
    }
    saveData(anchor.href);
    anchor.target = "_blank";
    anchor.click();
  }

  function searchKeypressHandler(event) {
    if (event.key !== "Enter") return;
    return gotoSite();
  }

  onMount(() => {
    loadFromLocal();
    url = unobfuscateString(url);
  });

  function loadFromLocal() {
    data = JSON.parse(localStorage.getItem(STORAGE_NAME) || "{}");
  }

  function saveToLocal(data) {
    localStorage.setItem(STORAGE_NAME, data);
  }

  function saveData(url) {
    let now = +new Date().setHours(0, 0, 0, 0);
    let tempdata = data[now] || [];
    tempdata.push(url);
    let newData = {};
    newData[now] = tempdata;
    data = { ...newData, ...data };
    saveToLocal(JSON.stringify(data));
  }

  function deleteData(payload) {
    data[payload.detail.day].splice(payload.detail.index, 1);
    if (!data[payload.detail.day].length) {
      delete data[payload.detail.day];
    }
    data = data;
    saveToLocal(JSON.stringify(data));
  }

  function dropData() {
    saveToLocal("{}");
    loadFromLocal();
  }
</script>

<div class="container">
  <div style="text-align:center">
    <h1 style="margin-bottom:4rem">EZWARP</h1>
    <div class="field">
      <input
        class="control expanded"
        placeholder="แปะลิงก์เบาๆ~"
        on:keypress={searchKeypressHandler}
        bind:value={search} />
      <button class="control search" on:click={gotoSite} />
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
        <h2 style="margin:3rem 0 5rem;flex-grow:1">
          <span class="hidden-small">—</span>
          ไม่มีวาป!
          <span class="hidden-small">—</span>
        </h2>
      {/if}
      <footer>
        Code with 🍆💦🍑 by rootEnginear
        <br />
        <div style="margin-top:1rem;font-size:.8em">Web For Fun #1</div>
      </footer>
    </div>
  </div>
</div>
