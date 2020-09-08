function range(start, end, step = start <= end ? 1 : -1) {
    let result = [];
    
    for (let i = start; step >= 0 ? i <= end : i >= end; i+=step) {
        result.push(i);
      }
      return result;
    }
    
    function sum(numbers) {
      result = 0;
      for (let num of numbers) {
        result += num;
      }
      return result;
    }

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1, 10, 2));
// → [1, 3, 5, 7, 9]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(range(5, 2));
// → [5, 4, 3, 2]
console.log(range(10, 1, -3));
// → [10, 7, 4, 1]
console.log(sum(range(1, 10)));
// → 55
console.log(sum(range(1, 10, 2)));
// → 25
console.log(sum(range(10, 1, -3)));
// → 22 (10 + 7 + 4 + 1)