/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const merge = (left, right) => {
  const results = [];

  while (left.length && right.length) {
    results.push((left[0] <= right[0] ? left : right).shift());
  }

  return results.concat(left, right);
};

const mergeSort = (nums) => {
  if (nums.length <= 1) return nums;
  const half = Math.ceil(nums.length / 2);
  return merge(mergeSort(nums.slice(0, half)), mergeSort(nums.slice(half)));
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
