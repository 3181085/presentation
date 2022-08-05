'use strict'

/*
 * csv形式の文字列を 文字列の配列で返す
 */
function csvToArr(str) {
    const retArray = [];
    let index = 0;
    let tmp;

    let pos = str.indexOf(",", index);          // pos=最初のカンマ

    while (0 < pos) {
        tmp = str.substr(index, pos - index);   // 指定位置からカンマまで文字の切り出し 
        retArray.push(tmp.trim());              // 配列に保管(空白を除去) 
        index = pos + 1;                        // カンマの位置をインクリメント
        pos = str.indexOf(",", index);          // pos=次のカンマ
   }

   if (index < str.length) {
        tmp = str.substr(index, str.length)
        retArray.push(tmp.trim());
        index = pos;
   }
console.log(retArray);
    return retArray;
}