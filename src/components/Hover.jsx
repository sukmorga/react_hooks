import React, { useRef } from 'react'
import useHover from '../hooks/useHover';

const Hover = () => {
    const ref = useRef();
    const isHovering = useHover(ref)
    console.log(isHovering);

    return (
        <div ref={ref} style={{ height: 300, width: 300, background: isHovering ? 'red' : 'blue' }}></div>
    )
}

export default Hover