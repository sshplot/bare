function bubbleSort(alist) {

    for(let i = 0; i < alist.length; i++) {
        for(let j = i + 1; j < alist.length; j++) {
            if(alist[i] > alist[j]) {
                temp = alist[j]
                alist[j] = alist[i]
                alist[i] = temp
            }
        }
    }

    return alist;
}

console.log(
    bubbleSort([12, 5, 34, 78, 90, 23, 90, 23])
)
