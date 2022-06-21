
'use strict';
let submit = document.getElementsByTagName('form')[0];

if ((typeof submit !== 'undefined')) { // formが取得できていれば実行
  submit.addEventListener('click', () => {
    let gLFyf = document.getElementsByClassName('gLFyf'); // 検索フォームのclassで絞り込み
    let searchWord = ''; // 検索値
    for (const children of gLFyf) {
      if (children.tagName === 'INPUT') {
        searchWord = children
      }
    }
    chrome.storage.local.get('blockList', (result) => { // ブロックリスト取得
      let removeWord = '';
      for (const word of result.blockList) {
        if (!new RegExp(word).test(searchWord.value)) { // 検索外ワードがフォーム内にあるか
          removeWord += ` -${word}`
        }
      }
      searchWord.value = searchWord.value + removeWord; // なければ検索対象外ワードを検索フォームに代入
    });
  })
}

