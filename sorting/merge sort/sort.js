function mergeSort(arrl) {
  if (arrl.length > 1) {
    let mid = parseInt(arrl.length / 2);

    let left = [];
    for (let n = 0; n < mid; n++) {
      left[n] = arrl[n];
    }

    let right = [];
    for (let n = 0, m = mid; m < arrl.length; n++, m++) {
      right[n] = arrl[m];
    }

    mergeSort(left);
    console.log("LEFT: ", left)
    mergeSort(right);
    console.log("RIGHT: ", right)

    let i = 0,
      j = 0,
      k = 0;

    //
    for (; i < left.length && j < right.length; ) {
      if (left[i] < right[j]) {
        arrl[k] = left[i];
        i++;
      } else {
        arrl[k] = right[j];
        j++;
      }
      k++;
    }

    //
    for (; i < left.length; ) {
      arrl[k] = left[i];
      i++;
      k++;
    }

    //
    for (; j < right.length; ) {
      arrl[k] = right[j];
      j++;
      k++;
    }
  }
}             

let numberList = [7, 34, 3, 40, 45, 5, 6, 7, 8, 9]
mergeSort(numberList)
console.log(numberList)

//LEFT:  [ 7 ]
// RIGHT:  [ 34 ]
// LEFT:  [ 7, 34 ]
// LEFT:  [ 3 ]
// LEFT:  [ 40 ]
// RIGHT:  [ 45 ]
// RIGHT:  [ 40, 45 ]
// RIGHT:  [ 3, 40, 45 ]
// LEFT:  [ 7, 34, 3, 40, 45 ]
// LEFT:  [ 5 ]
// RIGHT:  [ 6 ]
// LEFT:  [ 5, 6 ]
// LEFT:  [ 7 ]
// LEFT:  [ 8 ]
// RIGHT:  [ 9 ]
// RIGHT:  [ 8, 9 ]
// RIGHT:  [ 7, 8, 9 ]
// RIGHT:  [ 5, 6, 7, 8, 9 ]