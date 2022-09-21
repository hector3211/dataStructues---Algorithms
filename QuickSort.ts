import assert from 'node:assert/strict';

function qsAagain(array:number[],left:number,right:number):void{
    if(left >= right){
        return
    }
    let pivotIndex = partitionAgain(array,left,right)
    qsAagain(array,left, pivotIndex -1)
    qsAagain(array,pivotIndex + 1,right)
    console.log(array)
}
function partitionAgain(array:number[],left:number,right:number):number{
    const pivot = array[right]
    let idx = left-1
    for(let i = left; i < right; i++){
        if (array[i] <= pivot){
            idx++
            const tmp = array[i]
            array[i] = array[idx]
            array[idx] = tmp
        }
    }
    idx++
    array[right] = array[idx]
    array[idx] = pivot
    return idx
}

function mainsqs(array:number[]):void{
    qsAagain(array,0,array.length-1)
}

mainsqs([9,2,8,6,4,3,5,7])
