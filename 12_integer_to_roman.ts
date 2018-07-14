const intToRoman = (num: number): string => {
  let str = '';
  const M = Math.floor(num / 1000);
  if (M !== 0) {
    str += 'M'.repeat(M);
    num -= M * 1000;
  }

  const C = Math.floor(num / 100);
  if (C !== 0) {
    if (C >= 5) {
      if (C === 9) {
        str += 'CM';
      } else {
        str += 'D' + 'C'.repeat(C - 5);
      }
    } else {
      if (C === 4) {
        str += 'CD';
      } else {
        str += 'C'.repeat(C);
      }
    }
    num -= C * 100;
  }
  const X = Math.floor(num / 10);
  if (X !== 0) {
    if (X >= 5) {
      if (X === 9) {
        str += 'XC';
      } else {
        str += 'L' + 'X'.repeat(X - 5);
      }
    } else {
      if (X === 4) {
        str += 'XL';
      } else {
        str += 'X'.repeat(X);
      }
    }
    num -= X * 10;
  }

  const I = Math.floor(num / 1);
  if (I !== 0) {
    if (I >= 5) {
      if (I === 9) {
        str += 'IX';
      } else {
        str += 'V' + 'I'.repeat(I - 5);
      }
    } else {
      if (I === 4) {
        str += 'IV';
      } else {
        str += 'I'.repeat(I);
      }
    }
  }

  return str;
};

// 性能超过 33%， 略略略～