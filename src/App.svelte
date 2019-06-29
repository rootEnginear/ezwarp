<script>
  import { onMount } from "svelte";

  let searchcontent = "";
  $: formattedSearchcontent = formatUrl(searchcontent);
  let data = {};
  const STORAGE_NAME = "ezwarp";

  function formatUrl(content) {
    let englishCh = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];
    let thaiCh = [
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
    ];
    let temp = content;
    temp = temp
      .trim()
      .split(" ")
      .join("")
			.replace(/คอม/g, "com");

    if (temp.slice(0, 4) !== "http") temp = "https://" + temp;
    return temp;
  }

  function gotoSite() {
    saveData();
    let anchor = document.createElement("a");
    anchor.href = formattedSearchcontent;
    anchor.target = "_blank";
    anchor.click();
  }

  onMount(loadData);
  function loadData() {
    console.log(JSON.parse(localStorage.getItem(STORAGE_NAME)));
  }

  function saveData() {
		let now = new Date().setHours(0,0,0,0);
		let tempdata = data[now] || [];
		tempdata.push(formattedSearchcontent);
		data[now] = tempdata;
    localStorage.setItem(STORAGE_NAME, JSON.stringify(data));
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
  </div>
</div>
