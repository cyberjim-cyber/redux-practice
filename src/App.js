
import './App.css';
import Cart2 from './Commponents2/Cart2';
import Shop2 from './Commponents2/Shop2';
import PracticeReduce from './Components/Practice1/PracticeReduce/PracticeReduce';
import Cart from './Components/PureRedux/Cart';
import Shop from './Components/PureRedux/Shop';
import Reducer1 from './Components/Reducer1/Reducer1';
import Reducer2 from './Components/Reducer2/Reducer2';

function App() {
  return (
    <div >
     <Reducer1></Reducer1>
     <Reducer2></Reducer2>
     <PracticeReduce></PracticeReduce>
     {/* <Cart></Cart>
     <Shop></Shop> */}
     <Cart2></Cart2>
     <Shop2></Shop2>
   
    </div>
  );
}

export default App;
