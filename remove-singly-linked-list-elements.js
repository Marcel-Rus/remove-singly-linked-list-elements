/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    // if the list is empty
    // return the list
    if (head === null) {
        return head;
    }

    // adjust the head until it's safe to move past the head
    while (head.val === val) {
        head = head.next;

        if (head === null) {
            return head;
        }
    }

    // initialize variables
    let node = head;

    // loop through the remaining nodes
    while (node.next !== null) {

        // if the next node needs to be removed
        // then remove it
        if (node.next.val === val) {

            // if the next nodes next node is not null
            // then assign the current nodes next node to the next nodes next node
            if (node.next.next !== null) {
                node.next = node.next.next;
            }

            // else end the loop
            else {
                node.next = null;
                break;
            }
        }

        // else move on to the next node
        else {
            node = node.next;   
        }
    }

    // return the new linkedlist
    return head;
};