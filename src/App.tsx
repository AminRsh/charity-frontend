import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Favorite from "./pages/Favorite";
import NotFound from "./pages/NotFound";
import Result from "./pages/Result";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/details/:slug" element={<Details />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/result" element={<Result />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
