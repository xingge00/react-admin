import React, { useContext } from 'react'
import countContext from '../countContext'
import { Button } from 'antd'

function Component(props) {
  const updateCount = useContext(countContext)

  return (
    <div>
      <Button onClick={() => updateCount('sdasdasd')}>C null</Button>
      {props.count}
    </div>
  )
}

export default Component
