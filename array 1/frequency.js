

        function countFrequency(input) {
  const frequency = {};
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    frequency[char] = (frequency[char] || 0) + 1;
  }
  return frequency;
}

// Example usage:
const str = "hello world";
const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

console.log(countFrequency(str)); // Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
console.log(countFrequency(arr)); // Output: { '1': 1, '2': 2, '3': 3, '4': 4 }

