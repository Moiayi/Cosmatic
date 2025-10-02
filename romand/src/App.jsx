import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./component/Nav"
import Footer from "./component/Footer"
import Home from "./page/Home"
import Lipsticks from "./page/Lipsticks"
import Face from "./page/Face"
import Eye from "./page/Eye"
import CheckoutPage from "./page/CheckoutPage"

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lipsticks" element={<Lipsticks />} />
        <Route path="/eye" element={<Eye />} />
        <Route path="/face" element={<Face />} />
        <Route path="/checkout" element={<CheckoutPage/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
