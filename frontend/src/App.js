import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/layout/Home";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import Login from "./component/user/Login";
//import Register from "./component/user/Register";
import MyProfile from "./component/user/MyProfile";
import ForgotPassword from "./component/user/ForgotPassword";
import ProductDetails from "./component/products/ProductDetails";
import SignUpCourse from "./component/authCourse/SignUpCourse";
import SignInCourse from "./component/authCourse/SignInCourse";
import ActivateCourse from "./component/authCourse/ActivateCourse";
import ActivateAccountMs from "./component/user/ActivateAccountMs";
import PrivateRoute from "./component/authCourse/PrivateRoute";
//*this is commment
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/login" element={<SignInCourse />} />
        <Route exact path="/activate" element={<ActivateAccountMs />} />
        <Route
          exact
          path="/user/active-account/:token"
          element={<ActivateCourse />}
        />
        {/* <Route exact path="/login" element={<Login />} /> */}
        <Route exact path="/signup" element={<SignUpCourse />} />
        {/* <Route exact path="/signup" element={<Register />} /> */}
        {/* <Route exact path="/me" element={<MyProfile />} /> */}
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/product" element={<ProductDetails />} />

        <Route element={<PrivateRoute />}>
          <Route exact path="/me" element={<MyProfile />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
