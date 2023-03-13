import React, { useEffect, useState } from 'react'
// import { BrowserRouter as Router } from 'react-router-dom'
import { ConfigProvider, Spin } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'

import 'antd/dist/antd.css'
import './App.css'

import GlobalContext from './context/globalContext.js'

import Playground from './pages/playground'
function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 0)
  }, [])
  return (
    <div className="App">
      <ConfigProvider locale={zhCN}>
        <GlobalContext.Provider value={{ name: 'puxiao', age: 34 }}>
          {loading ? <Spin tip="Loading..."></Spin> : <Playground></Playground>}
        </GlobalContext.Provider>
      </ConfigProvider>
    </div>
  )
}

export default App
