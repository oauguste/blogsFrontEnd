// Assuming this is your Router file
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import App from "./App";
import Header from "./component/Header";
import FullPost from "./component/FullPost";

function RootRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/categories" element={<Hero />} /> */}
        <Route
          path="/posts/:id"
          exact
          element={<FullPost />}
        />
      </Routes>
    </Router>
  );
}

export default RootRouter;
