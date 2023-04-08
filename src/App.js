
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Traveling from './components/Traveling';
import Hview from './components/Hview';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Traveling></Traveling>}></Route>
       <Route path='/view-places/:id' element={<Hview></Hview>}></Route>
      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
