
'use strict';
let submit = document.getElementsByTagName('form')[0];
console.log(submit);

if ((typeof submit !== 'undefined')) { // formが取得できていれば実行
  submit.addEventListener('click', () => {
    let searchWord = document.getElementsByClassName('gLFyf')[0].value; // 検索ワード
    let removeWord = "jQuery";
    if (!searchWord.includes(removeWord)) { // 検索外ワードがフォーム内にあるか
      document.getElementsByClassName('gLFyf')[0].value = searchWord + ' -' + removeWord; // なければ検索対象外ワードを検索フォームに代入
    }
  })
}

