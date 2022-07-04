import { BrowserRouter,Routes,Route } from "react-router-dom";

import Hero from "./Components/Hero";
import Statistic from "./Components/Statistic";
import Overview from "./Components/Overview";
import Sitting from "./Components/Sitting";

function App() {
  return (

      <BrowserRouter>
          <Routes>

              <Route path="/" element={<Hero />} />
              <Route path="statistic" element={<Statistic />} />
              <Route path="overview" element={<Overview />} />
              <Route path="sitting" element={<Sitting />} />
              
            </Routes>
    </BrowserRouter>
  );
}

export default App;
