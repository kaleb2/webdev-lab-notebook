let stringValue = "abcdefg";
console.log(stringValue);

let stringReversed = stringValue
  .split("")
  .reduceRight((accumulator, current) => accumulator.concat(current), "");
console.log(stringReversed);
