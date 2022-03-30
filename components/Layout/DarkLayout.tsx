import React, { FC } from 'react'

export const DarkLayout: FC = ({children}) => {
  return (
    <div style={{backgroundColor: '#333C83', 
        borderRadius:'5px',
        padding: '10px'
    }}>
        <h3>Dark Layout</h3>
        <div>{children}</div>
    </div>
  )
}
