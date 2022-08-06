/* Mod: 2022.08.06　*/

'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// ナイトメア問題 😈
// この問題は難解なので、心して臨みましょう。

// 関数 sort を宣言してください。ビルトインの sort メソッドを使ってはいけません。

// 注目： 配列を並び替える方法は たくさん あります。好きな方法を選んでみましょう！

/**
 * @param {Array<number>} ??? - 数字の配列
 * @returns {Array<number>} 与えられた配列の要素を昇順に並べた新しい配列
 */
function sort(array) {
  let retArray = [];
  let i, j, tmp;

  for (let element of array)
    retArray.push(element);

  for (i=0; i<array.length-1; i++)
    for (j=0; j<array.length-1-i; j++)
      if (retArray[j] > retArray[j+1]) {
        tmp = retArray[j];
        retArray[j] = retArray[j+1];
        retArray[j+1] = tmp;
      }

  return retArray;
}



/* EOF */
