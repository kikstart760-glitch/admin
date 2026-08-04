import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Layout from "./Layout/Layout";
import AdminLogin from "./Pages/AdminLogin";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Dashboard /></Layout>} />
          <Route path="/login" element={<AdminLogin/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
