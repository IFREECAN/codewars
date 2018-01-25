"use strict";

function high(x){
    let myObj = {};
    for(let i = 1; i <= 26; i++) {
        myObj[String.fromCharCode(i+96)] = i;
    }
    let scores = x.split(' ').map(word => [...word].map(a => myObj[a]).reduce((a,b) => a + b, 0));
    return x.split(' ')[scores.indexOf(Math.max(...scores))];
  }
  
  console.log(high('what time are we climbing up the volcano'))