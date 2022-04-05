function node(value) {
  this.value = value;
  this.next = null;
  this.minumun = null;
}

function MinStack() {
  this.top = null;
}
MinStack.prototype.push = function (value) {
  const prevTop = this.top;
  this.top = new Node(value);
  this.top.next = prevTop;
  if (!prevTop) this.top.minimum = value;
  else if (value < prevTop.minimum) this.top.minimum = value;
  else this.top.minimum = prevTop.minimum;
};

MinStack.prototype.pop = function () {
  const poped = this.top;
  this.top = popped.next;
  return poped.value;
};
MinStack.prototype.pic = function () {
  return this.top.value;
};
MinStack.prototype.min = function () {
  // let min = this.top.value
  // let current = this.top
  // while (current.next) {
  //     if (current.value < min) min = current.value
  //     current = current.next
  // } no es O(n)
  return this.top.minumum;
};
