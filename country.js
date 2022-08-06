'use strict'

const Country = [{
    name:       "Japanese",
    greeting:   "こんにちは",
    prefix:     "",
    suffix:     "様" 
},
{
    name:       "English",
    greeting:   "Hello",
    prefix:     "Mr, Ms",
    suffix:     "" 
},
{
    name:       "China",
    greeting:   "你好",
    prefix:     "",
    suffix:     "先生, 女子" 
},
{
    name:       "German",
    greeting:   "Gutentag",
    prefix:     "Herr, Frau",
    suffix:     ""
},
{
    name:       "Spanish",
    greeting:   "Hola",
    prefix:     "Señor, Milisegundo",
    suffix:     ""
},
];

function getCountryNames() {
    const retBuff = [];
    for (const object of Country)
        retBuff.push(object.name);
    return retBuff;
}


function getPrefixByCountryName(name) {
    for (const object of Country) 
        if (name === object.name) 
           return object.prefix;
}


function getSuffixByCountryName(name) {
    for (const object of Country)
        if (name === object.name) 
           return object.suffix;
}

function getCountryInfoByIndex(index) {
    return Country[index];
}

/* EOF */