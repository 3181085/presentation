'use strict'

let numOfRow = 0;
let messageArray = [];
const defaultInterval = 2000;
const currentInterval = 1000;
let id;

// let messageArray = ["Hiroyuki", "Yuusuke", "Syousuke", "Kanta", "Yuna", "Kouhei"];
let index = 0;

// ウィンドにメッセージを追加する  Interval毎にコールバックされる関数
let addMessage = () => {
  let messageBuff;
  let theMessages = document.getElementById("greetArea");
  
  messageBuff = messageArray[index++];
//  document.write(messageBuff);
  theMessages.append(messageBuff);
  console.log("id=", id, " index=", index, "lentght=", messageArray.length);
  
  if (index >= messageArray.length) {
    window.clearInterval(id);
  }
};

// window.addEventListener("click", () => {
//    // アロー関数
//    id = window.setInterval(addMessage, currentInterval);
// });


function initArea(array) {
  let display;
  let p;
  let i;

  if (numOfRow < array.length) {
    for (i=numOfRow; i<array.length; i++) {
      //display = document.getElementById("display");
      p = document.createElement("p");
      p.innerText = array[i];
      document.body.appendChild(p);
      messageArray[i] = p;
    }
    numOfRow = i;
  }
}


function clear() {
  for (let i=0; i<numOfRow; i++)
    messageArray[i].innerText = "";
}

function arrayClick() {

  const textBox = document.getElementById("guestName");
  const array = csvToArr(textBox.value);

  initArea(array); 
  clear();

  for (let i=0; i<array.length; i++) {
    console.log(array[i]);
    messageArray[i].innerText = array[i];
  }
}


function greetClick () {
  console.log("greet")
  index = 0;
  let element = document.getElementById("geustName");
  let array = csvToArr(element.value);
  //let array = sort(csvToArr(element.value));
  messageArray = getIntroductions(array);
  id = window.setInterval(addMessage, currentInterval);
}


function sortClick () {
  console.log("sort")
  index = 0;
  let element = document.getElementById("geustName");
  let array = csvToArr(element.value);
  messageArray = sort(csvToArr(element.value));
  console.log(messageArray);
  id = window.setInterval(addMessage, currentInterval);
}


/* EOF */