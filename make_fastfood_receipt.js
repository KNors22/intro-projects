// Creates a receipt from McDonald's Order

function makeDelimiter(character) {
  let limit = "";
  
  for(var i=0; i<34; i++)
    limit += character;

  return limit;
}

function strToPrint() {
  const smallDel = makeDelimiter('-');
  const bigDel = makeDelimiter('=')
  var lineArr = [];
  
  lineArr.push(bigDel);
  lineArr.push("         McDONALD'S RECEIPT       ");
  lineArr.push(smallDel);
  lineArr.push("           Order Details          ")
  lineArr.push(smallDel);
  lineArr.push("Item          Quantity    Price($)");
  lineArr.push(smallDel);
  lineArr.push("🍔  Burger       1          2.99   ");
  lineArr.push("🍟  Fries        1          2.49   ");
  lineArr.push("🥤  Soda         1          1.99   ");
  lineArr.push(smallDel);
  lineArr.push("Total                      7.47   ");
  lineArr.push(bigDel);

  return lineArr;
}

function print(str) {
  console.log(str);
}

strToPrint().forEach(print);

/*   Printing Alternative
 
 for (var line of strToPrint()) {
  console.log(line);
}
*/
