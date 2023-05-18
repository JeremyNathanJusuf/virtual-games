import Image from 'next/image'
import React from 'react'

const CldImage = ({item, className, style}) => {
  return (
    <Image
        alt={item.name}
        src={item.src}
        height={item.height}
        width={item.width}
        className={className}
        style={style}
    />
  )
}

export default CldImage