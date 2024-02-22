import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Home from "./Home";
import StudentView from "./component/student/StudentView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/common/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/view-student" element={<StudentView />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
