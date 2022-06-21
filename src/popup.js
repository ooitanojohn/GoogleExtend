const button = document.getElementsByTagName('button')[0];
const input = document.getElementById('addWord');
let words = [];
if ((typeof button !== 'undefined')) {
  button.addEventListener('click', () => {
    words.push(input.value);
    chrome.storage.local.set({ 'blockList': words }); // chrome storageに保存
    chrome.storage.local.get('blockList', (result) => { //値取得
      console.log(result)
    });
  });
}

