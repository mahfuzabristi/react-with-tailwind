import React from 'react'

const list = ({text,href,className}) => {
  return (
    <li className={className}><a href={href} className={className}>{text}</a></li>
  )
}

export default list

{/* <li className="pt-5"><a href={href} className="font-pop text-[24px] font-semibold">{text}</a></li> */}
