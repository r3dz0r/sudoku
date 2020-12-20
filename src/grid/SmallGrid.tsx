import Cell from './Cell';

interface ISmallGridProp {
   numbers: number[];
}

function SmallGrid(props: ISmallGridProp) {
   const gridItems = props.numbers.map((cellElem) =>
      <Cell numb={cellElem} />
   );

   return (
      <div className="Sudoku__SmallGrid">
         {gridItems}
      </div>
   )
}

export default SmallGrid;
