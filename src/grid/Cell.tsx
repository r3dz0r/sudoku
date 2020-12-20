interface ICellProp {
   numb: number;
}

function Cell(props: ICellProp) {
   return <span className="Sudoku__Cell">{props.numb}</span>;
}

export default Cell;
