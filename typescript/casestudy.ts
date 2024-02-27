import ArrayStack from "./array-stack";


function isBalanced(innput: string): boolean {
    let stackOb = new ArrayStack<string>();
    const obj = {
        '}': '{',
        ']': '[',
        ')': '('
    };

    for (let each of innput) {

        console.log(stackOb);
        if (each in obj) {
            if (stackOb.isEmpty()) {
                console.log("End bracket Came earlier.");
                return false;
            }
            if (obj[each] === stackOb.peek()) {
                stackOb.pop();
            } else {
                console.log("Bracket Order Collapsed")
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
const givenText = "{{[]}}";
console.log(isBalanced(givenText));
