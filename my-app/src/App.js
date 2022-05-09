
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
      <div>
        <a className="brand" href="/">amazon</a>
      </div>
      <div>
        <a href="/cart">Cart</a>
        <a href="/signin">Sign In</a>
      </div>
    </header>
    
    <main>
      <Routes>  
      <Route path='/' element ={<HomeScreen />} exact ></Route>
        <Route path='/product/:id' element ={<ProductScreen />} exact  ></Route>
        
      </Routes> 
    </main>
    <footer className="row center">
       All Right reserved
    </footer>
</div>
</BrowserRouter>

  );
}

export default App;
