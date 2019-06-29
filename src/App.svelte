<script>
  import { onMount } from "svelte";

  let searchcontent = "";
  $: formattedSearchcontent = formatUrl(searchcontent);
  let data = { 1312321: ["aaaa", "asadasd"] };
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
      temp = "!" + temp;
    } else if (temp.slice(0, 4) !== "http") {
      temp = "https://" + temp;
    }
    return temp;
  }

  function gotoSite() {
    let anchor = document.createElement("a");
    if (formattedSearchcontent[0] === "!") {
      anchor.href =
        "https://www5.javmost.com/" + formattedSearchcontent.slice(1);
    } else {
      anchor.href = formattedSearchcontent;
    }
    saveData(anchor.href);
    anchor.target = "_blank";
    anchor.click();
  }

  onMount(loadData);
  function loadData() {
    data = JSON.parse(localStorage.getItem(STORAGE_NAME));
  }

  function saveData(url) {
    let now = new Date().setHours(0, 0, 0, 0);
    let tempdata = data[now] || [];
    tempdata.push(url);
    data[now] = tempdata;
    localStorage.setItem(STORAGE_NAME, JSON.stringify(data));
  }

  function dropData() {
    localStorage.setItem(STORAGE_NAME, "{}");
    loadData();
  }
</script>

<div class="container">
  <div style="text-align:center">
    <h1>EZWARP</h1>
    <div class="field" tabindex="0">
      <input
        class="control"
        placeholder="แปะลิงก์เบาๆ~"
        bind:value={searchcontent} />
      <button class="control" on:click={gotoSite}>🔍</button>
    </div>
    <button on:click={dropData}>ล้างประวัติ</button>
    <div>
      {#each Object.keys(data) as day}
        <ul>
          <strong>{new Date(+day).toLocaleDateString()}</strong>
          {#each data[day] as url}
            <li>
              <a href={url}>{url}</a>
            </li>
          {/each}
        </ul>
      {/each}
    </div>
  </div>
</div>
