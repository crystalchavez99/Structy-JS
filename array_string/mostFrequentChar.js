const mostFrequentChar = (s) => {
    // todo
    let obj = {};
    let max = 0;
    let char;
    for(let i in s){
      let letter = s[i]
      if(obj[letter]){
         obj[letter]+=1;
      }else{
        obj[letter] = 1;
      }
    }
      //console.log(obj)
    for(let letter in obj){
      if(obj[letter] > max){
        max = obj[letter];
        char = letter;
      }
    }
    //console.log(char)
    return char;
  };
