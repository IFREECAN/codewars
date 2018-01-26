'use strict';

function find_average(array) {
    let total = 0;
    array.forEach(a => total += a)
    return total / array.length;
  }