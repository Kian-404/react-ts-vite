import React from "react";
import AceEditor from "react-ace";

import 'brace/mode/javcscript';
import 'brace/theme/github';


// Render editor

const CodeEditor = () => {
  console.log(<AceEditor />)
  const onChange = (newValue: string) => {
    console.log("change", newValue);
  }
  return (
    <AceEditor
      mode="javascript"
      theme="github"
      onChange={onChange}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
    />
  )
}

export default CodeEditor;
