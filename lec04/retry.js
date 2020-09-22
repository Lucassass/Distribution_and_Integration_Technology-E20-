class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
    // Your code here.
  for (;;) {
    try {
      let result = primitiveMultiply(a, b);
      console.log(result);
      break;
    } catch(error) {
        if (!error instanceof MultiplicatorUnitFailure) {
          throw error;
        }
    }
  }
}

console.log(reliableMultiply(8,8));
// → 64