import React from 'react'

export const Button = ({text,design}) => {
  return ( 
   <button className={design}>{text}</button>
  )
}
