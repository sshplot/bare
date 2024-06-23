// selection sort
function selectionSort(alist) {
    for(let i=0; i<alist.length; i++){
        for(let j=i+1; j<alist.length; j++) {
            if(alist[j] < alist[i]) {
                temp = alist[j]
                alist[j] = alist[i]
                alist[i] = temp
            }
        }
    }
    return alist;
}

let numbers = [12,2,90, 16, 24, 10, 8, 18, 80, 23, 32, 7]
console.log(selectionSort(numbers))
console.log(numbers)