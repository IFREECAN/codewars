'use strict';

function filter_list(l) {
    return l.filter(num => {
      if(typeof num === "number") {
      return true; 
      }
    })
    }