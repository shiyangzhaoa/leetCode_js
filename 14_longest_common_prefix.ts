const longestCommonPrefix = (strs: string[]): string => {
  let str = strs[0] || '';
  let t = '';

  for (let i = 1, l1 = strs.length; i < l1; i++) {
    const item = strs[i];
    for (let j = 0, l2 = str.length; j < l2; j++) {
      if (str[j] === item[j]) {
        t += str[j];
      } else {
        break;
      }
    }

    // 如果没值，就不需要继续往下走了
    if (!str) {
      return '';
    }

    str = t;
    t = '';
  }
  
  return str;
};

// Emmmmmm, 性能超过30%。。。。有毛病，又提交了一次，然后超过了73%。。。