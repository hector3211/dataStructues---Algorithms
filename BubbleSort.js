function bubbleSort(list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - 1 - i; j++) {
      if (list[j] > list[j + 1]) {
        const swap = list[j];
        list[j] = list[j + 1];
        list[j + 1] = list[j];
        console.log(`${list}\n`);
        console.log(swap);
      }
    }
  }
}
let list = [5, 7, 2, 3, 4, 1, 8, 10, 9];
bubbleSort(list);
