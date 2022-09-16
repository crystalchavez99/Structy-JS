const pairProduct = (numbers, targetProduct) => {
    // todo
    for(let i = 0; i < numbers.length; i++){
      for(let j = i + 1; j < numbers.length; j++){
        let num1 = numbers[i];
        let num2 = numbers[j];
        if(num1 * num2 === targetProduct){
          return [i,j];
        }
      }
    }
  };
