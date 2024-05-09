function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  // Compare the cleaned string with its reverse
  return cleanStr === cleanStr.split("").reverse().join("");
}

// Example usage:
const testString1 = "racecar";
const testString2 = "hello";

console.log(isPalindrome(testString1)); // Output: true
console.log(isPalindrome(testString2)); // Output: false
