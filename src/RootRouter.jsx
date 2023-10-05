// Assuming this is your Router file
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import App from "./App";
import Header from "./component/Header";
import FullPost from "./component/FullPost";
import SignUp from "./component/SignUp";
import SignIn from "./component/SignIn";

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
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/signin" exact element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default RootRouter;
