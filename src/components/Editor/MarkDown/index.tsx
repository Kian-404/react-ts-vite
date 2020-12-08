import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import { Input, Radio } from 'antd';
const { TextArea } = Input;
import './index.css'
const MarkDown = () => {
  const text = `A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Lists
  * [ ] todo
  * [x] done
  `;
  const [markdown, setmarkdown] = useState(text);
  const [type, settype] = useState('edit');
  const changeValue = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setmarkdown(e.target.value);
  }
  const changeType = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    settype(e.target.value)
  }
  return (
    <div className="markdown-wrapper">
      <div className="btn-list">
        <Radio.Group buttonStyle="solid" value={type} onChange={changeType}>
          <Radio.Button value="edit">编辑模式</Radio.Button>
          <Radio.Button value="read">只读模式</Radio.Button>
        </Radio.Group>
      </div>
      <div className='mark-down'>
        {
          type == 'read' ? "" : <div className="left">
            <TextArea rows='20' value={markdown} onChange={changeValue} showCount />
          </div>
        }

        <div className="right">
          <ReactMarkdown children={markdown} />
        </div>
      </div>
    </div>
  )
}

export default MarkDown;