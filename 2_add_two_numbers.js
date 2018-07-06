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

// 1. 用数组写的，不符合标准

var addTwoNumbers = function(l1, l2) {
    const maxLen = l1.length > l2.length ? l1.length : l2.length;
    let t = 0;
    const newArr = [];
    for(let i = 0; i <maxLen; i++ ) {
      const sum = (l1[i] || 0) + (l2[i] || 0) + t;
      if (sum > 9) {
          newArr[i] = sum % 10;
          t = 1;
      } else {
          newArr[i] = sum;
          t = 0;
      }
    }
    if (t === 1) newArr[maxLen] = 1;
  
    return newArr;
};

// addTwoNumbers([4, 6, 2], [5, 1, 9])
// [9, 7, 1, 1]
// addTwoNumbers([4, 6, 2], [5, 1, 9, 4, 6])
// [9, 7, 1, 5, 6]

// 2. 正常版本，摘自网络（不想写这个了=，=b）

var addTwoNumbers = function(l1, l2) {
    var result_list = null;
    var cur_node = null;
    var cur_carry = 0;
    var v1 = 0;
    var v2 = 0;
    
    var checkSum = function(sum) {
        if (parseInt(sum/10) > 0) {
            cur_carry = parseInt(sum/10);
            sum = sum % 10;
        } else {
            cur_carry = 0;
        }
        return sum;
    };
    
    var getValAndMoveToNext = function (list1, list2) {
        v1 = list1 ? list1.val: 0;
        v2 = list2 ? list2.val: 0;
        l1 = list1 ? list1.next: null;
        l2 = list2 ? list2.next: null;
    };
    
    if (l1 || l2) {
        getValAndMoveToNext(l1, l2);
        result_list = new ListNode(checkSum(v1+v2));
        cur_node = result_list;
        while (l1 || l2) {
            getValAndMoveToNext(l1, l2);
            var sum = v1 + v2 + cur_carry;
            cur_node.next = new ListNode(checkSum(sum));
            cur_node = cur_node.next;
        }
        if (cur_carry !== 0) {
            cur_node.next = new ListNode(cur_carry);
        }
    }
    return result_list;
}
