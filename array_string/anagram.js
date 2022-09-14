const anagrams = (s1, s2) => {
    // todo
    let obj = {};
    for(let i = 0; i < s1.length; i++){
      let ele = s1[i];
      if(!(obj[ele])){
        obj[ele] = 1;
      }else{
        obj[ele] += 1;
      }
    }
    //console.log(obj)
    for(let i = 0; i < s2.length; i++){
      let ele = s2[i];
      if(!(obj[ele])){
        return false;
      }else{
        obj[ele] -= 1;
      }
    }
    for(let char in obj){
      if(obj[char] > 0){
        return false;
      }
    }
    return true;
  };
