'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// ナイトメア問題 😈
// この演習は、非常に難解ですが、とてもいい練習になります。
// かなり時間がかかるつもりで、じっくり取り組んでください。

// パーティに n 人のゲストが来ています。各ゲストには番号が割り当てられます。
// 到着したすべてのゲストに新しいゲストを紹介する関数、 getIntroductions を宣言してください。

/**
 * @param {Array<string>} array - ゲスト名の配列
 * @returns {Array<string>} 到着するゲストへの挨拶
 */
// ここにコードを書きましょう


function getIntroductions(array) {
   let retArray = [];
   let tmp = "";

   for (let i=0; i<array.length; i++) {

        tmp = "welcome " + array[i];

        if (1 <= i) {
            for (let j=0; j<i; j++) {
                if (j+1 === 1) {
                    tmp = tmp + ", meet " + array[j];
                } else if (j === i-1) {
                    tmp = tmp + " and " + array[j];
                } else {
                    tmp = tmp + ", " + array[j];
                }
            }
        }
        retArray.push(tmp);
    }

    return retArray;
}



/* EOF */