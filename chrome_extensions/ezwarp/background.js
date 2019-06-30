const contextMenuItem = {
  id: "ezwarp",
  title: "วาร์ปสิรออะไร",
  contexts: ["selection"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(data) {
  if (data.menuItemId === "ezwarp" && data.selectionText) {
    gotoSite(data.selectionText);
  }
});

var url = (function(numStr) {
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
})(
  "1291421431401440880780791521531540890831441361581501531581600911451581570963"
);

function gotoSite(selectedWarp) {
  let formattedSearchcontent = formatUrl(selectedWarp);
  let anchor = document.createElement("a");
  if (formattedSearchcontent[0] === "!") {
    anchor.href = "https://www5.javmost.com/" + formattedSearchcontent.slice(1);
  } else {
    anchor.href = formattedSearchcontent;
  }
  anchor.target = "_blank";
  anchor.click();
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
    temp = temp.replace(new RegExp(ch, "g"), "abcdefghijklmnopqrrstuvwxyz"[i]);
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
