function analyze(array) {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }

  let sum = array.reduce((total, current) => total + current, 0)
  let average = sum / array.length;

  let sortedArray = array.toSorted();
  

  const result = {
    average: average,
    min: sortedArray[0],
    max: sortedArray.at(-1),
    length: array.length    
  }

  return result;
}

export { analyze }