import React from "react";
import AceEditor from "react-ace";

// import 'brace/mode/javcscript';
// import 'brace/theme/github';


// Render editor

const CodeEditor = () => {

  const onChange = (newValue: string) => {
    console.log("change", newValue);
  }
  return (
    <AceEditor
      onChange={onChange}
      editorProps={{ $blockScrolling: true }}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={`function onLoad(editor) {
      console.log("i've loaded");
    }`}
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  )
}

export default CodeEditor;
