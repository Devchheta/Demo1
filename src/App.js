import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import Alert from "./Alert";
import React from "react";
import About from "./About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const[modename,setmodename]=useState("Enable darkmode");
  const [alert, setAlert] = useState(null);
  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      setmodename("Disable Darkmode");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "black";
      ShowAlert("Dark Mode is enabled", "success");
      document.title = "TextUtils-Darkmode";
    } else {
      setMode("light");
      document.getElementById("modename").style.color="white";
      ShowAlert("light Mode is enabled", "success");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils-lightmode";
      setmodename("Enable Darkmode");
    }
  };
  return (
    <>
      <Router>
        <Navbar heading="ReactApp" modename={modename} mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />}>
              
            </Route>
            <Route excat path="/" element={<TextForm
                title="Enter the Text here"
                mode={Mode}
                ShowAlert={ShowAlert}
              />}>
              
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
