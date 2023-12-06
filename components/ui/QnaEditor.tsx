import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const QnaEditor = ({ value, handleContents }: any) => {
  const [contentsVal, setContentsVal] = useState(value);

  const onChange = (val: string) => {
    setContentsVal(val);
    handleContents(val);
  };

  return (
    <>
      <ReactQuill
        theme="snow"
        style={{ width: "100%", height: "300px" }}
        value={contentsVal}
        onChange={onChange}
      />
    </>
  );
};

export default QnaEditor;
