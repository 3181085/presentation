/*******************************************
 * File:        scriptjs 
 * Project:     presentaion
 * Description: the Javascript source code
 * Mod:         2022.08.06
 * *****************************************/
'use strict'

let numOfRow = 0;
let pTag = [];
let arrayOfName = [];


let introductionArray = [];
const defaultInterval = 2000;
const currentInterval = 1000;
let id;
let index = 0;



/*** onload ***/
function initFunc() {
  let option;
  const listOfCountry = getCountryNames();
  const select = document.getElementsByName("select");

  // メニューにボタンを追加
  for (let i=0; i<listOfCountry.length; i++) {
    option = document.createElement("option");
    option.innerText = listOfCountry[i];
    select[0].appendChild(option);
  }
}


/*** submitClick ***/
function submitClick() {
  let i;
  const textBox = document.getElementById("guestName");
  arrayOfName = csvToArr(textBox.value);

  if (numOfRow < arrayOfName.length) {
    for (i=numOfRow; i<arrayOfName.length; i++) {
      pTag[i] = document.createElement("p");
      document.body.appendChild(pTag[i]);
    }
    numOfRow = i;
  }
}


function clear() {
  for (let i=0; i<numOfRow; i++)
    pTag[i].innerText = "";    
}


function show(array) {
  for (let i=0; i<array.length; i++) 
    if (array.length > 0)
      pTag[i].innerText = i+1 + ": " + array[i];
}


function arrayClick() {
  clear();
  console.log(arrayOfName);
  show(arrayOfName);
}


function sortClick() {
  clear();
  show(sort(arrayOfName));
}


function filterClick() {
  clear();
  show(arrayOfName.filter(element=>element.match(/[A-Z]/)||element.match(/[a-z]/)));
}


function mapClick() {
  const select = document.getElementsByName("select");
  const index = select[0].selectedIndex;
  if (0 <= index) {
    const name = select[0].options[index].value
    clear();
    show(arrayOfName.map(element=>getPrefixByCountryName(name) + 
                                " " + element + " " +
                                getSuffixByCountryName(name)));
  }
}



// セットされたインターバルでコールバックされる
let showIntroduction = () => {
  
  pTag[index].innerText= introductionArray[index];
  index++;

  // Stop this callback();
  if (index >= introductionArray.length) 
    window.clearInterval(id);
};



function introductionClick() {

  introductionArray = getIntroductions(arrayOfName);
  clear();
  index = 0;
  
  // インターバルを持たせ、関数を実行させる
  id = window.setInterval(showIntroduction, currentInterval);
  //show(newArray);
}


function test() {
  console.log("test");
  const textBox = document.getElementById("guestName");
  textBox.value = "鈴木, Sam, Jeams, 田中, David, 三上, 佐藤, 中野, 井上";

}



/* EOF */
