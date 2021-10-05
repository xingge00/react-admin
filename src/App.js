import React, { useEffect, useState } from 'react'
// import { BrowserRouter as Router } from 'react-router-dom'
import { ConfigProvider, Spin } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'

import 'antd/dist/antd.css'
import './App.css'

import About from './pages/about'
function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div className="App">
      <ConfigProvider locale={zhCN}>
        {loading ? <Spin tip="Loading..."></Spin> : <About></About>}
      </ConfigProvider>
    </div>
  )
}

export default App
