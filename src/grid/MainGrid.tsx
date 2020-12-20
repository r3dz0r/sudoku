import SmallGrid from './SmallGrid';

interface IMainGrid {
   grid: Array<number[]>;
}

function MainGrid(props: IMainGrid) {
   const gridItems = props.grid.map((smallGridElem) =>
      <SmallGrid numbers={smallGridElem} />
   );

   return (
      <div className="Sudoku__MainGrid">
         {gridItems}
      </div>
   )
}

export default MainGrid;
