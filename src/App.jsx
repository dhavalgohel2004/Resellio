import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import SignUp from "./pages/Sgnup";
import ForgetPassword from "./pages/ForgetPassword";
import TermsCondition from "./pages/TermsCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <>
      <Router>
        <Header />
          {/* <main className='custom-container'> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/products" element={<Products />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgetpassword" element={<ForgetPassword />} />
              <Route path="/terms-condition" element={<TermsCondition />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          {/* </main> */}
        <Footer />
      </Router>
    </>
  )
}

export default App
