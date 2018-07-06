"use strict";
// 这块刚开始看错了，以为用数组...
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
// 1. 用数组写的，不符合标准
const addTwoNumbers1 = (l1, l2) => {
    const maxLen = l1.length > l2.length ? l1.length : l2.length;
    let t = 0;
    const newArr = [];
    for (let i = 0; i < maxLen; i++) {
        const sum = (l1[i] || 0) + (l2[i] || 0) + t;
        if (sum > 9) {
            newArr[i] = sum % 10;
            t = 1;
        }
        else {
            newArr[i] = sum;
            t = 0;
        }
    }
    if (t === 1) {
        newArr[maxLen] = 1;
    }
    return newArr;
};
// addTwoNumbers1([4, 6, 2], [5, 1, 9])
// [9, 7, 1, 1]
// addTwoNumbers1([4, 6, 2], [5, 1, 9, 4, 6])
// [9, 7, 1, 5, 6]
// 2. 正常版本，摘自网络（不想写这个了=，=b）
const addTwoNumbers2 = (l1, l2) => {
    let resultList = null;
    let curNode = null;
    let curCarry = 0;
    let v1 = 0;
    let v2 = 0;
    const checkSum = (cSum) => {
        if (parseInt(String(cSum / 10), 10) > 0) {
            curCarry = parseInt(String(cSum / 10), 10);
            cSum = cSum % 10;
        }
        else {
            curCarry = 0;
        }
        return cSum;
    };
    const getValAndMoveToNext = (list1, list2) => {
        v1 = list1 ? list1.val : 0;
        v2 = list2 ? list2.val : 0;
        l1 = list1 ? list1.next : null;
        l2 = list2 ? list2.next : null;
    };
    if (l1 || l2) {
        getValAndMoveToNext(l1, l2);
        resultList = new ListNode(checkSum(v1 + v2));
        curNode = resultList;
        while (l1 || l2) {
            getValAndMoveToNext(l1, l2);
            const vSum = v1 + v2 + curCarry;
            curNode.next = new ListNode(checkSum(vSum));
            curNode = curNode.next;
        }
        if (curCarry !== 0) {
            curNode.next = new ListNode(curCarry);
        }
    }
    return resultList;
};
