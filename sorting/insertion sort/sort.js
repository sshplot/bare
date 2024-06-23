function insertionSort(arrl) {
    for(let i = 0; i < arrl.length; i++) {
        for(let j = i+1; j < arrl.length; j++) {
            if(arrl[j] < arrl[i] ) {
                temp = arrl[j] 
                for(let k = j; k > i; k--) { 
                    arrl[k] = arrl[k-1]
                }
                arrl[i] = temp
            } 
        }
    }
}

let nlist = [10, 26, 11, 31, 12, 7, 2]

insertionSort(nlist)
console.log(nlist)

// selection, bubble, merge, insertion