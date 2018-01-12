//split two strings, Uppercase first index of firstName and lastName
function abbrevName(name){
    var nam = name.split(' ');
    console.log(name);
    console.log(nam);
    return nam[0].charAt(0).toUpperCase()+'.' + nam[1].charAt(0).toUpperCase();
  
  }