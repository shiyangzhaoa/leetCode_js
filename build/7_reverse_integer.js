"use strict";
const reverse = (x) => {
    let t = 0;
    let n = Math.abs(x);
    while (n !== 0) {
        const p = n % 10;
        n = Math.floor(n / 10);
        t = t * 10 + p;
        if (t > (x > 0 ? Math.pow(2, 31) - 1 : Math.pow(2, 31))) {
            return 0;
        }
    }
    return x > 0 ? t : -t;
};
