function longestIncresingSubsecuence(nums) {
  const sequences = [];
  let longest = 0;
  for (const num of nums) {
    sequences.push([num]);
    const sequencesCopy = [...sequences];
    for (const seq of sequencesCopy) {
      if (num > seq[seq.length - 1]) {
        const newSeq = seq.concat(num);
        sequences.push(newSeq);
        if (seq.concat(num).length > longest) longest = newSeq.length;
      }
    }
  }
  return longest;
}

var lengthOfLIS = function (nums) {
  // Create dp array
  const dp = Array.from(nums, () => 1);
  // Max subsequence length
  let max = 1;
  // Check all increasing subsequences up to the current ith number in nums
  for (let i = 1; i < nums.length; i++) {
    // Keep track of subsequence length in the dp array
    for (let j = 0; j < i; j++) {
      // Only change dp value if the numbers are increasing
      if (nums[i] > nums[j]) {
        // Set the value to be the larget subsequence length
        dp[i] = Math.max(dp[i], dp[j] + 1);
        // Check if this subsequence is the largest
        max = Math.max(dp[i], max);
      }
    }
  }
  return max;
};

var lengthOfLIS = function (nums) {
  let dp = Array(nums.length).fill(1);
  let max = 1;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        max = Math.max(dp[i], max);
      }
    }
  }
  return max;
};
