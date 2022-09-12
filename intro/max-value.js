const maxValue = (nums) => {
    // todo
    let max = -Infinity;
    // n = array length
    // time complex: O(n)
    // space: O(1)
    for(let i = 0; i < nums.length; i++){
      let ele = nums[i];
      if(ele > max){
        max = ele;
      }
    }
    return max;
  };
