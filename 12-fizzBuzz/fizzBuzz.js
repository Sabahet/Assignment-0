function fizzBuzz(start, end) {
  let answer=[(end-start)+1];
  for(let i=start; i<=end; i++){
    if(i%5 ==0 && i%3 ==0){
      answer[i-start]="FizzBuzz";

    }else if(i%5 ==0){
      answer[i-start] = "Buzz";
    }else if(i%3 == 0){
      answer[i-start] ="Fizz";

    }else{
      answer[i-start] = i;
    }

  }
  return answer;
}

// Do not edit this line;
module.exports = fizzBuzz;