import './App.css';
import MainGrid from './grid/MainGrid';
import { Generate } from './helpers/GridGenerator';

function App() {
   const grid = [...Generate()];
   // Generatev2();
   return (
      <div className="Sudoku">
         <MainGrid grid={grid} />
      </div>
   );
}

export default App;
