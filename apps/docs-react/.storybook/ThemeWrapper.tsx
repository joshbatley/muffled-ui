import { MuffledUI } from '@muffled-ui/react'
import { Comp } from './Toggler.tsx'
import React from 'react'

export const ThemeWrapper = (Story: () => React.ReactNode) => {
  return (
    <MuffledUI>
      <Comp>
        {Story()}
      </Comp>
    </MuffledUI>
  )
}
