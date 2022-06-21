
'use strict';
let submit = document.getElementsByTagName('form')[0];

if ((typeof submit !== 'undefined')) { // formが取得できていれば実行
  submit.addEventListener('click', () => {
    let gLFyf = document.getElementsByClassName('gLFyf'); // 検索フォームのclassで絞り込み
    let children = '';
    let searchWord = '';
    for (children of gLFyf) {
      if (children.tagName === 'INPUT') {
        searchWord = children // inputタグの値を代入
      }
    }
    let removeWord = "jQuery";
    if (!searchWord.value.includes(removeWord)) { // 検索外ワードがフォーム内にあるか
      searchWord.value = searchWord.value + ' -' + removeWord; // なければ検索対象外ワードを検索フォームに代入
      console.log('add')
    }
  })
}

