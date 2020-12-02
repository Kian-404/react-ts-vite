import React, { useState } from "react";
import AceEditor from "react-ace";
import { Radio } from 'antd';

import 'brace/mode/javascript';
import 'brace/mode/typescript';
import 'brace/mode/sql';
import 'brace/mode/json';
import 'brace/theme/github';

import './index.css'

// Render editor

const CodeEditor = () => {
  console.log(<AceEditor />)
  const [modeType, setmodeType] = useState("console.log('hello javascript!')");
  const [codeValue, setcodeValue] = useState('javascript');
  const onChange = (newValue: string) => {
    console.log("change", newValue);
  }
  const changeRadio = (e: EventTarget) => {
    console.log(e);
    let typeValye: string = e.target.value;
    let codeValue: string = ""
    setmodeType(e.target.value)
    if (typeValye == 'javascript') {
      codeValue = "console.log('hello javascript!')"
    } else if (typeValye == 'typescript') {
      codeValue = "console.log('hello typescript!')"

    } else if (typeValye == 'sql') {
      codeValue = "select * from user"

    } else if (typeValye == 'json') {
      codeValue = "{'a':'aaa', 'b':'bbb'}"

    }
    setcodeValue(codeValue)
  }
  return (
    <div className="code-content">
      <Radio.Group defaultValue="javascript" buttonStyle="solid" onChange={changeRadio} value={modeType}>
        <Radio.Button value="javascript">javascript</Radio.Button>
        <Radio.Button value="typescript">typescript</Radio.Button>
        <Radio.Button value="sql">sql</Radio.Button>
        <Radio.Button value="json">json</Radio.Button>
      </Radio.Group>
      <AceEditor
        mode={modeType}
        theme="github"
        onChange={onChange}
        value={codeValue}
        fontSize={16}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>

  )
}

export default CodeEditor;
