"use strict";
const lengthOfLongestSubstring = (str) => {
    const arr = [];
    let l = 0;
    for (const v of str) {
        const index = arr.indexOf(v);
        if (index !== -1) {
            arr.splice(0, index + 1);
            arr.push(v);
        }
        else {
            arr.push(v);
            l = Math.max(l, arr.length);
        }
    }
    return l;
};
// 性能只超过40%，岂可修
// 改进的版本
const bstLengthOfLongestSubstring = (str) => {
    let maxL = 0;
    let t = 0;
    for (let i = 0, l = str.length; i < l; i++) {
        const index = str.indexOf(str[i], t);
        if (index !== -1 && index < i) {
            t = index + 1;
        }
        maxL = Math.max(maxL, i - t + 1);
    }
    return maxL;
};
