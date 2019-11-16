var unsortedArr = [340, 3, 76, 23, 7642, 646];
console.table("Unsorted array : ", unsortedArr);
function merge(leftArr, rightArr) {
  let sortedArr = [];
  console.table("Right array : ", rightArr);
  console.table("Left array : ", leftArr);
  console.log("Sorted array : ", sortedArr);
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr[0]);
      leftArr = leftArr.slice(1);
    } else {
      sortedArr.push(rightArr[0]);
      rightArr = rightArr.slice(1);
    }
  }
  while (leftArr.length) sortedArr.push(leftArr.shift());
  while (rightArr.length) sortedArr.push(rightArr.shift());
  return sortedArr;
}
function mergesort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    var midpoint = parseInt(arr.length / 2);
    var leftArr = arr.slice(0, midpoint);
    var rightArr = arr.slice(midpoint, arr.length);
    return merge(mergesort(leftArr), mergesort(rightArr));
  }
}
console.log("Sorted array : ", mergesort(unsortedArr));
