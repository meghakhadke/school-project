import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Admission from "./pages/Admission"
import Header from "./components/Header"
import Mandatory from "./pages/Mandatory"
import Academic from "./pages/Academic"
import Achievement from "./pages/Achievement"
import Infrastructure from "./pages/Infrastructure"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* body */}
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="admission" element={<Admission />} />
        <Route path="mandatory-public-disclosure" element={<Mandatory />} />
        <Route path="academic" element={<Academic />} />
        <Route path="achievement" element={<Achievement />} />
        <Route path="infrastructure" element={<Infrastructure />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
