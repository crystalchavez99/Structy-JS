const uncompress = (s) => {
    // todo
    let result = "";
    let nums = '0123456789';
    let i = 0;
    for(let j = 0; j < s.length; j++){
      let ele = s[j];
      if(nums.includes(ele)){
        continue;
      }else{
        let num = parseInt(s.slice(i,j));
        for(let count = 0; count < num; count++){
          result += ele;
        }
        j++;
        i = j;
      }
    }
    //console.log(result);
    return result;
  };
