"use strict";
const maxArea = (height) => {
    let i = 0;
    let j = height.length - 1;
    let mArea = 0;
    while (i < j) {
        mArea = Math.max(mArea, Math.min(height[i], height[j]) * (j - i));
        if (height[i] < height[j]) {
            i++;
        }
        else {
            j--;
        }
    }
    return mArea;
};
