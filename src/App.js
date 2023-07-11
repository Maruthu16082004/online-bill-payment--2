import './App.css';
import Front from './Front';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Main from './Main';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Front/>}></Route>
          <Route path='/Main' element={<Main/>}></Route>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;