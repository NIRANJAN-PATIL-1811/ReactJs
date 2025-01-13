import Nav from "./components/nav.jsx";
import { Routes, Route } from "react-router-dom";
import Men from "./components/men.jsx";
import Women from "./components/women.jsx";
import Kids from "./components/kids.jsx";
import HomeAndLiving from "./components/home&living.jsx";
import Beauty from "./components/beauty.jsx";
import Studio from "./components/studio.jsx";



function App(){
  return (
    <>
      <Routes>
        <Route index element={<Nav/>} />
        <Route path={'/'} element={<Nav/>}>
          <Route path={'men'} element={<Men/>} />
          <Route path={'women'} element={<Women/>} />
          <Route path={'kids'} element={<Kids/>} />
          <Route path={'home&living'} element={<HomeAndLiving/>} />
          <Route path={'beauty'} element={<Beauty/>} />
          <Route path={'studio'} element={<Studio/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;