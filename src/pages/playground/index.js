import React, { useState } from 'react'
import { Button } from 'antd'

function Component() {
  const [count, setCount] = useState(0)
  // const [isPending, startTransition] = useTransition()

  // startTransition(() => {
  //   setCount(count + 1)
  // })
  return (
    <div>
      {/* {isPending} */}
      {count}
      <Button onClick={() => setCount(count + 1)}></Button>
    </div>
  )
}

export default Component
