/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
  let x=0;
  for (i=0; i<operations.length; i++){
    // middle element
    const me=operations[i][1];
    if(me==="+") {
      x+=1;
    }
    else if (me==="-"){
      x-=1;
    }
  }
  return x;
};
