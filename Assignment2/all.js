function All(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      return false;
    }
  }
  return true;
}

// Testing check function
function Check(value) {
  return value > 5;
}

// Testing with output
console.log(All([7, 8, 9], Check));
console.log(All([3, 8, 9], Check));
