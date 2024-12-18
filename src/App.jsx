import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import FireDept from './Components/Screen/FireDept';
import { Form } from './Components/Utils/Form';
import InspectionCard from './Components/Utils/InspectionCard';
import NestedQue from './Components/Screen/NestedQue';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/fireDept" element={<FireDept />} />
          <Route path="/preform" element={<Form />} />
          <Route path="/checklist" element={<NestedQue />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
