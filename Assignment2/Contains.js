function Contains(object, value) {
  for (let key in object) {
    if (typeof object[key] === "object") {
      if (Contains(object[key], value)) {
        return true;
      }
    } else if (object[key] === value) {
      return true;
    }
  }
  return false;
}

// Test object
var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

// Testing with output
console.log(Contains(nestedObject, 41));
console.log(Contains(nestedObject, "foo2"));
console.log(Contains(nestedObject, 44));
