const compress = (s) => {
    // todo
    let result = "";
    let count = 0;
    for(let i = 0; i < s.length; i++){
      let currEle = s[i];
      count++;
      let nextEle = s[i + 1];
      if(currEle !== nextEle){
        if(count === 1){
          result +=currEle;
        }else{
          result += (count.toString()+currEle);
        }
        count = 0;
      }
    }
    //console.log(result)
    return result;
  };
