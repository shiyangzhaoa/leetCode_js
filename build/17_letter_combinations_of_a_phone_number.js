"use strict";
const letterCombinations = (digits) => {
    if (!digits) {
        return [];
    }
    const numArr = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };
    let strArr = digits.split('');
    let result = numArr[strArr[0]];
    strArr.shift();
    strArr = strArr.map(s => numArr[s]);
    void function fn(arr, rst) {
        if (arr.length) {
            const item = arr[0];
            const _arr = [];
            for (let j = 0, l1 = rst.length; j < l1; j++) {
                const str = rst[j];
                for (let k = 0, l2 = item.length; k < l2; k++) {
                    _arr.push(str + item[k]);
                }
            }
            arr.shift();
            result = _arr;
            if (arr.length) {
                fn(arr, result);
            }
        }
    }(strArr, result);
    return result;
};
// 自己写的有点啰嗦
const letterCombinations1 = (digits) => {
    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };
    let ans = map[digits[0]];
    digits = digits.substring(1);
    digits.split('').forEach((digit) => {
        let arr = [];
        map[digit].forEach((letter) => {
            arr = arr.concat(ans.map((item) => {
                return item + letter;
            }));
        });
        ans = arr;
    });
    return ans ? ans : [];
};
