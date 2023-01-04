let target = window.prompt("Enter target: ")

let arr = [3,6,7,8,10,13];
// console.log(binarySearch(arr, target));
function binarySearch(arr, target){
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        let mid = Math.trunc(start + (end-start)/2);
        if(target > arr[mid]){
            start = mid + 1;
        } else if (target < arr[mid]){
            end = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
}

let targetIndex = binarySearch(arr, target);
console.log(binarySearch(arr, target));
let element1 = document.querySelector(`.el${targetIndex+1}`);
element1.style.border = "4px solid red"

// Linear search
function LinearSearch(arr, target){
    let ansIndex;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] == target){
            ansIndex = i;
            return ansIndex;
        }

        return -1;
    }

    
}
