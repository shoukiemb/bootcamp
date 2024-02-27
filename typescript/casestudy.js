"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_stack_1 = require("./array-stack");
function isBalanced(innput) {
    var stackOb = new array_stack_1.default();
    var obj = {
        '}': '{',
        ']': '[',
        ')': '('
    };
    for (var _i = 0, innput_1 = innput; _i < innput_1.length; _i++) {
        var each = innput_1[_i];
        console.log(stackOb);
        if (each in obj) {
            if (stackOb.isEmpty()) {
                console.log("End bracket Came earlier.");
                return false;
            }
            if (obj[each] === stackOb.peek()) {
                stackOb.pop();
            }
            else {
                console.log("Bracket Order Collapsed");
                console.log(stackOb);
                return false;
            }
        }
        else {
            stackOb.push(each);
        }
    }
    if (stackOb.isEmpty()) {
        return true;
    }
    console.log("Array is not Empty");
    console.log(stackOb);
    return false;
}
var givenText = "{{[]}}";
console.log(isBalanced(givenText));
