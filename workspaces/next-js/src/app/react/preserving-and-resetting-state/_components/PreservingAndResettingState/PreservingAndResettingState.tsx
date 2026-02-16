'use client'

import Button from '@/components/Button'
import ClickAndCount from '../ClickAndCount'
import { useState } from 'react'

const PreservingAndResettingState = () => {
  const [displaySpan, setDisplaySpan] = useState(false)
  const [key, setKey] = useState(0)
  const [toggle1, setToggle1] = useState(false)
  const [toggle2, setToggle2] = useState(false)

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-2'>
        {/* When the `div` is added or removed it changes place of `ClickAndCount` component in render tree and it resets its state and remount it*/}
        {
          displaySpan
            ? (
              <div>
                <ClickAndCount />
              </div>
            )
            : <ClickAndCount />
        }

        <Button onClick={() => setDisplaySpan(prev => !prev)}>{displaySpan ? 'Remove' : 'Add'} element</Button>
      </div>

      <div className='flex flex-col gap-2'>
        {/* In this case component just will receive different props */}
        {
          displaySpan
            ? (
              <div>
                <ClickAndCount key={key} />
              </div>
            )
            : <ClickAndCount key={key} />
        }

        <Button onClick={() => setKey(prev => prev + 1)}> Change key</Button>
      </div>

      <div className='flex flex-col gap-2'>
        {/* Even when `toggle2` is false and `ClickAndCount` is not rendered, `false` is returned and placed here in render tree*/}
        {toggle2 && <ClickAndCount type='warning' />}

        {/* Same here */}
        {!toggle2 && <ClickAndCount />}

        <Button onClick={() => setToggle2(prev => !prev)}>Change toggle</Button>
      </div>

      {/* In this example state will be the same, component just will get another prop */}
      <div className='flex flex-col gap-2'>
        {
          toggle1
            ? (

              <ClickAndCount type='warning' />
            )
            : <ClickAndCount />
        }

        <Button onClick={() => setToggle1(prev => !prev)}>Change toggle</Button>
      </div>

      {/* Add example with different root element render */}
    </div>
  )
}

export default PreservingAndResettingState