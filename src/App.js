import './App.css';
import Navbar from './components/Navbar';
import MyForm from './components/MyForm';
function App() {
  
  return (
    <>
    <Navbar title={"this is title"} drop={"Drop here"}/>
    <div className="container">
    <MyForm heading="Enter Text"/>
    </div>
    </>
    );
}

export default App;
