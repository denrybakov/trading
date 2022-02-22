import Header from "./components/Header/Header";
import { Routes, Route, Navigate } from 'react-router-dom'

import Trading from "./components/Trading/Trading";
import Archive from "./components/Archive/Archive";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/trading' element={<Trading />}></Route>
        <Route path='/archive' element={<Archive />}></Route>
        <Route path='*' element={<Navigate to='/trading' />}></Route>
      </Routes>
    </>

  );
}

export default App;
