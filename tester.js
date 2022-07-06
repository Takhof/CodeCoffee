const evenOddSplitter = (arr) => {
  let resultarr = [];
  let evenarr = [];
  let oddarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evenarr.push(arr[i]);
      console.log(evenarr);
    } else {
      oddarr.push(arr[i]);
    }

    return evenarr;
  }
};
