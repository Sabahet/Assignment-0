function setUnionOfAnyAmountOfSets(...args) {
  let completeSet = new Set();
  for(i of args){
    for(j of i){
      if(!completeSet.has(j)){
        completeSet.add(j);
      }
    }
  }
  return completeSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;