import ArrayStack from "./array-stack";

let stack = new ArrayStack<number>();
stack.push(23);
stack.push(7);
stack.push(27);
stack.push(45);
stack.push(1);

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.clear());
console.log(stack.isEmpty());