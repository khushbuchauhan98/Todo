
import Navbar from './Navbar';
import '../Css/App.css';
import AddTodo from './AddTodo';


function App() {
  return (
    <div className="">
        <Navbar/>
      <div className='card-container'>
      
        <AddTodo/>
      </div>
    </div>
  );
}

export default App;
