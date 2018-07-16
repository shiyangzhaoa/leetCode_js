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

// 这块我是感觉比较奇怪，看前面高性能都是先找到数组中最短长度的字符串，然后遍历这个最短的字符串，
// 我刚开始其实也是这样处理的 ，但感觉也不算最优解，毕竟在刚开始就需要遍历一遍数组，但是我上面的写法也有点不好，打个比方
// ['qwertyuigdgfhdgfh', 'qwertyuigdgfhdgfh', 'qwertyuigdgfhdgfh', '']，对于这种数组，我前几次每次遍历数组的时候，
// 都需要遍历'qwertyuigdgfhdgfh'整个字符串，到''才会停止，
// 但相反，['', 'qwertyuigdgfhdgfh', 'qwertyuigdgfhdgfh', 'qwertyuigdgfhdgfh']这种就明显不需要先遍历一遍求最短字符串了
// 或者['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', ...]这种，先遍历一遍也不是很好
// Emmm...
