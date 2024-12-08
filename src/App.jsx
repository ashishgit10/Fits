import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import FireDept from './Components/Screen/FireDept';
import { Form } from './Components/Utils/Form';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/fireDept" element={<FireDept />} />
          <Route path="/preform" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
