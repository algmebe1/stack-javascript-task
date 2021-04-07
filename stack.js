class Stack {
    constructor(...args) {
        this.stackList = args;
    }

    
    size() {
        return this.stackList.length;
    }

    push(newItem) {
        this.stackList.push(newItem);
      }
      
    pop() {
        if (this.stackList.length === 0)
            return this.stackList = null;
        return this.stackList.pop()
    }
      
    peek() {
        return this.stackList.length > 0 ? this.stackList[this.stackList.length - 1] : null;
    }
      
    swap() {
        [this.stackList[this.stackList.length - 1], this.stackList[this.stackList.length - 2]] = [this.stackList[this.stackList.length - 2], this.stackList[this.stackList.length - 1]]
    }
      
    isEmpty() {
        return this.stackList.length === 0 ? true : false
    }
  }

  module.exports = Stack;

 