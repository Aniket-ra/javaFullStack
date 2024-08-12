import AddEmployee from "./Components/AddEmployee"
import Header from "./Components/Header"
import ListAllEmployees from "./Components/ListAllEmployees"

import { BrowserRouter,Routes,Route } from "react-router-dom"
function App() {
  

  return (
<>
<BrowserRouter>
<Header/>
<Routes>
  <Route path="/" element={<ListAllEmployees/>}></Route>
  <Route path="/employees" element={<ListAllEmployees/>}></Route>

  <Route path="/add-Employee" element={<AddEmployee/>}></Route>
</Routes>
</BrowserRouter>

</>
   )
  
}

export default App
