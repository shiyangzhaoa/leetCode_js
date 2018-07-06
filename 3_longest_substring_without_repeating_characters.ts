const lengthOfLongestSubstring = (str: string): number => {
  const arr: any[] = [];
  let l = 0;
  for (const v of Object.entries(str)) {
    const index = arr.indexOf(v);
    if (index !== -1) {
      arr.splice(0, index + 1);
      arr.push(v);
    } else {
      arr.push(v);
      l = Math.max(l, arr.length);
    }
  }
  return l;
};

// 性能超过40%，岂可修