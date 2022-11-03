import React from 'react'
import { Stack} from '@mui/material'

const ScrollButton = ({count}) => {
    const handleScroll = () => {
        //window.scrollTo(0,(window.innerHeight +45)*count)
        window.scrollTo({
            top: (window.innerHeight +45)*count,
            behavior: 'smooth'
        })
    }

  return (
    <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <a onClick={()=>handleScroll()} className="scroll-down"></a>
      </Stack>
  )
}

export default ScrollButton