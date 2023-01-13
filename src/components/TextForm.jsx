import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleUpperCase() {
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase!", "success");
  }

  function handleLowerCase() {
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase!", "success");
  }
  
  function handleCopyText(event) {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  }
  
  function handleTrimText() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Text trimmed!", "success");
  }
  
  function handleClearText() {
    setText("");
    props.showAlert("Text cleared!", "success");
  }

  return (
    <div
      className="container my-2"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      {/* textarea */}
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleTextChange}
          style={{
            color: props.mode === "dark" ? "white" : "black  ",
            backgroundColor: props.mode === "dark" ? "#222" : "white",
            border: "1px solid #aff000",
          }}
        ></textarea>
      </div>

      {/* buttons */}
      <div className="container my-3">
        <button className="btn btn-primary mx-2 " onClick={handleUpperCase}>
          UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCase}>
          LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyText}>
          Copy
        </button>
        <button className="btn btn-primary mx-2" onClick={handleTrimText}>
          Trim
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleClearText}>
          Clear
        </button>
      </div>

      {/* Text Summary */}
      <div className="container my-5">
        <h1>Text Summary</h1>
        <p>
          <li>
            There are <strong>{text.split(" ").length} words</strong> and{" "}
            <strong>{text.length} characters</strong> in your test.
          </li>
        </p>
        <p>
          <li>
            Its takes <strong>{0.008 * text.split("").length} minutes</strong>{" "}
            to read your text.
          </li>
        </p>
      </div>
    </div>
  );
};

export default TextForm;
