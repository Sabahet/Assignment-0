function sumOfMinimumAndMaximum(nums) {
  let min=0;
  let max=0;
  min = Math.min.apply(Math, nums);   
  max = Math.max.apply(Math, nums); 
  return min+max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;