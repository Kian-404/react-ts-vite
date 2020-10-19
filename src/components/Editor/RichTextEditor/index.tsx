import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import E from 'wangeditor'
import './index.css'

let editor: E;
const RichTextEditor = () => {

  const [content, setContent] = useState('')

  useEffect(() => {
    // 注：class写法需要在componentDidMount 创建编辑器
    editor = new E("#content")

    editor.config.onchange = (newHtml: React.SetStateAction<string>) => {
      setContent(newHtml)
    }
    /**一定要创建 */
    editor.create()

    return () => {
      // 组件销毁时销毁编辑器  注：class写法需要在componentWillUnmount中调用
      editor.destroy()
    }
  }, [])

  // 获取html方法1
  function getHtml() {
    alert(content)
  }

  // 获取html方法2
  function getHtml1() {
    // alert(editor.txt.html())
    console.log(editor.txt.html())
  }

  // 获取text
  function getText() {
    alert(editor.txt.text())
  }

  return (
    <div className="rishtext">
      <div id="content"></div>
      <div className="option-list">
        <Button type="primary" onClick={getHtml1}>获取html</Button>
      </div>
    </div>
  );
}

export default RichTextEditor;