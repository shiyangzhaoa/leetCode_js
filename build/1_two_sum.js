"use strict";
// 1. while, 同for..in, O(n * n)
const twoSum1 = (nums, target) => {
    let i = 0;
    const l = nums.length;
    const arr = [];
    while (i < l) {
        let j = i;
        while (j < l) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
            j++;
        }
        i++;
    }
    return null;
};
// 2. 用 hash 表存储，受别人启发，刚开始真没想到, O(n)
const twoSum2 = (nums, target) => {
    const map = new Map();
    for (let i = 0, len = nums.length; i < len; i++) {
        const num = nums[i];
        const t = target - num;
        if (map.has(t)) {
            return [map.get(t), i];
        }
        map.set(num, i);
    }
};
