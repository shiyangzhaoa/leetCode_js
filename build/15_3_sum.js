"use strict";
const threeSum = (nums) => {
    if (nums.length < 3) {
        return [];
    }
    ;
    nums = nums.sort((a, b) => a - b);
    if (nums[0] > 0 || nums[nums.length - 1] < 0) {
        return [];
    }
    const result = [];
    for (let i = 0, len = nums.length; i < len - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        // 这尼玛，又忘了有这个骚操作
        const target = -nums[i];
        while (left < right) {
            const sum = nums[left] + nums[right];
            if (sum === target) {
                result.push([-target, nums[left], nums[right]]);
                left++;
                right--;
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            }
            else if (sum > target) {
                right--;
            }
            else {
                left++;
            }
        }
    }
    return result;
};
