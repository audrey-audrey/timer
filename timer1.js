// Sound is not working, so printing '.'
// Slices fist two elements of array
let slicedArray = process.argv.slice(2);

// Filters slicedArray and removed elements that are not number and are negative
let filteredArray = slicedArray.filter(number => number >= 0);

for (let i = 0; i < filteredArray.length; i++) {
  setTimeout(() => process.stdout.write('.'), filteredArray[i] * 1000);
}

// Print new line after for loop if array is not empty
if (filteredArray.length > 0) {
  let maxElement = filteredArray.reduce(function(a, b) {
    return Math.max(a, b);
  });
  setTimeout(() => process.stdout.write('\n'), maxElement * 1000);
} 
