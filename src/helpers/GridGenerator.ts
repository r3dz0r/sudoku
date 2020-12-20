const DEFAULT_ARR = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);

// function Generate(): Array<number[]> {
//    const smallGrid = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
//    const mainGrid = [];

//    for (let i = 0; i < 9; i++) {
//       mainGrid.push(smallGrid);
//    }

//    return mainGrid;
// }

function Generate(step: number = 3): Array<number[]> {
   const smallGrid = [...DEFAULT_ARR];
   const mainGrid: Array<number[]> = [];

   for (let idx = 0; idx < 9; idx++) {
      mainGrid[idx] = [];
   }

   for (let i = 0; i < step; i++) {
      if (!i) {
         mainGrid[i] = [...smallGrid];
         continue;
      }

      const lastGrid: number[] = mainGrid[step * (i - 1)];
      const nextItem = lastGrid[0];
      const copied = [...lastGrid];
      copied.splice(0, 1);
      copied.push(nextItem);
      mainGrid[step * i] = [...copied];
   }

   mainGrid.forEach((itemArr, idx) => {
      if (itemArr.length) { return; }
      const prev = idx - 1;
      const prevItem = [...mainGrid[prev]];
      const end = prevItem.indexOf(prevItem[0] + step);
      const copied = prevItem.splice(0, end);
      mainGrid[idx] = [...prevItem, ...copied];
   });

   return mainGrid;
}

export {
   Generate
};
