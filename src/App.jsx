import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useContext } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ServiceDetails from "./pages/ServiceDetails";
import BookingForm from "./pages/BookingForm";
import Footer from "./components/Footer";

function App() {
  const location = useLocation;
  return (
    <div className={location.pathname === "/about" ? "home-background" : ""}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookingform" element={<BookingForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
