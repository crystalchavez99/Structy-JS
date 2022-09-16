const intersection = (a, b) => {
    // todo
    let result = [];
    let setA = new Set(a);
    for(let i = 0; i < b.length; i++){
      let ele = b[i];
      if(setA.has(ele)){
        result.push(ele)
      }
    }
    return result
  };
