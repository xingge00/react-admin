import { memo } from 'react'

import { Button } from 'antd'

const Component = memo(function (props) {
  console.log('i am render', props)

  return (
    <div>
      <Button>sub</Button>
    </div>
  )
})

export default Component
