import Navbar from "./component/navbar";
import Main from "./component/main";
import Alluser from "./component/Alluser";
import Adduser from "./component/Adduser";
import Edituser from "./component/Edituser";
import {BrowserRouter,Routes, Route} from 'react-router-dom';
function App() {
  return (
 <>
 <BrowserRouter>
 <Navbar />
    <Routes>
      <Route path='/' element = {<Main />} />
      <Route path='/alluser'  element = {<Alluser />} />
      <Route path='/adduser'  element = {<Adduser />} />
      <Route path='/edituser/:id'  element = {<Edituser />} />
    </Routes>
</BrowserRouter>
</>  
  );
}

export default App;
