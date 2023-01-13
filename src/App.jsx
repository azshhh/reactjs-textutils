import React, { useState } from "react";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Root from "./components/Root";

const App = () => {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  function showAlert(message, type) {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  }

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        home="Home"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />

      <div className="container">
        {/* <Routes>
            // Root Route
            <Route exact path="/" element={<Root mode={mode} />}></Route>
            // Home Route
            <Route
              exact
              path="/home"
              element={  */}
        <TextForm showAlert={showAlert} heading="Test Your Text" mode={mode} />
        {/* }
            ></Route> */}

        {/* <Route
              exact
              path="/about"
              element={<About aboutText="About Us" mode={mode} />}
            ></Route> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
};

export default App;
// export default Switch;
