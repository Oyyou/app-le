import { BrowserRouter, Route, Routes } from 'react-router';

import Home from 'pages/home';
import Facts from 'pages/facts';
import Calculator from 'pages/calculator';
import HallOfFame from 'pages/hall-of-fame';
import Nav from 'components/nav';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facts" element={<Facts />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/hall-of-fame" element={<HallOfFame />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
