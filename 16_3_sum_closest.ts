const threeSumClosest = (nums: number[], target: number): number => {
  nums = nums.sort((a, b) => a - b);
  let diff = Infinity;
  let result = 0;

  for (let i = 0, len = nums.length; i < len - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    
    while (left < right) {
      const sum = nums[left] + nums[right] + nums[i];

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return sum;
      }

      const t = Math.abs(sum - target);
      if (t < diff) {
        diff = t;
        result = sum;
      }
    }
  }

  return result;
};
