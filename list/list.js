'use strict';

class List {

  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list
   * @param item
   */
  push(item) {
    // Add an item to the end
    this.data[this.length] = item;
    this.length++;
  }

  /**
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */
  pop() {
    let returnValue = this.data[this.length];
    delete this.data[this.length];
    this.length--;
    return returnValue;
  }
  /**
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */
  shift() {
    let returnValue = this.data[this.length];
    delete this.data[0];
    this.data[0] = this.data[1];
    this.length--;
    return returnValue;
  }
  unshift(item) {
    let returnValue = this.data[this.length];
    this.length++;
    for(let i = (this.length - 1) ; i >= 0; i--){
      this.data[i] = this.data[i - 1];
    }
    
    this.data[0] = item;
    return returnValue;
  }
  forEAch(callBack){
    for(let i = 0; i < this.length; i++){
      this.data[i] = callBack(this.data[i]);
    }
  }

}

module.exports = List;
