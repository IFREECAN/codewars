'use strict';

function disemvowel(str) {
  return str.replace(/[aeiou]/ig, '');
}



// function isNice(arr){
//   var truth;
//   var counter = 0;
//   for (var i=0; i<arr.length; i++){
//     if(arr.includes(arr[i] + 1) || arr.includes(arr[i] - 1)){counter++}
//   }
//   if ( counter === arr.length && counter !==0){truth = true};
//   else {truth = false}
//   return truth;
// }


// // function isNice(arr){
// //   let a;
// //   let counter = 0;
// //     for (var i=0; i<arr.length; i++){
// //       if(arr.includes(arr[i]+1) || arr.includes(arr[i]-1)){counter++}
// //       }
// //     if ( counter === arr.length && counter !==0){a = true}
// //     else{a = false}
// //   return a;
// // }
