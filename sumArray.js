function SumArray(array, target) {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    const actualSum = arr[start] + arr[end];
    if (actualSum === target) {
      return true;
    } else if (actualSum < target) {
      start++;
    } else end--;
  }

  return false;
}
