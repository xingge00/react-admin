import React, { useImperativeHandle, useState } from 'react'
import { Button } from 'antd'

function Component(props) {
  const [childcount, setChildCount] = useState(0)
  console.log('props', props)
  console.log('props.inputRef', props.inputRef)
  // props.inputRef.current = {
  //   msg: 'hello',
  //   dosomething: () => {
  //     console.log('hello')
  //     setChildCount(childcount + 1)
  //   }
  // }
  useImperativeHandle(props.inputRef, () => {
    return {
      msg: 'hello',
      dosomething: () => {
        console.log('hello')
        setChildCount(childcount + 1)
      }
    }
  })
  return (
    <div>
      <Button>{childcount}</Button>
    </div>
  )
}

export default Component
