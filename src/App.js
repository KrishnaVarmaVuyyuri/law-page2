import Resources from "./components/Resources/Resources";
import Cases from "./components/Cases/Cases";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CaseDetails from "./components/CaseDetails/CaseDetails";

function App() {
  return (
    <Router>  
      <Header /> 
      <Routes>
        <Route path="/" element={<div className='text-center'>Home Page Content</div>} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/casedetails/:id" element={<CaseDetails/>} />
        <Route path="/cases" element={<Cases/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;