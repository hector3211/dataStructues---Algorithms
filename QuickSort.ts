import assert from 'node:assert/strict';

function qsAagain(array:number[],left:number,right:number):void{
    if(left >= right){
        return
    }
    let pivot = array[(left + right) /2]
    let index = partitionAgain(array,left,right,pivot)
    qsAagain(array,left, index -1)
    qsAagain(array,index,right)

}
function partitionAgain(array:number[],left:number,right:number,pivot:number):number{
    while(left <= right){
        while(array[left] < pivot){
            left++
        }
            while(array[right] > pivot){
                right--
            }
                if(left <= right){
                    let tmp = array[right];
                    array[right] = array[left];
                    array[left]= tmp;
                    left++;
                    right--;
                }
    }
    return left
}

function mainsqs(array:number[]):void{
    qsAagain(array,0,array.length-1)
}

mainsqs([9,2,6,4,3,5,7])
assert(mainsqs([2,3,4,5,6,7,9]))
