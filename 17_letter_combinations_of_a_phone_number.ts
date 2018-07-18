const letterCombinations = function(digits: string): string[] {
    const numArr = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const strArr = [];
    const result = [];
    for (let i = 0, l = digits.length; i < l; i++) {
      strArr.push(numArr[-digits[l] - 2]);
    }
    void function fn(arr, rst) {
      for (let j = 0, l1 = arr.length; j < l1; j++) {

      }
    }(strArr, result);
};

// 回去写
