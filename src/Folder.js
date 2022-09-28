import React from 'react'
import Icon from './Icon';

function Folder() {
  return (
    <div style={{display: 'flex' , alignItems: "center"}}>
        <Icon name='js'   style={{ height: '19px', marginRight: '8px', flexShrink: 0 }} />
        <p>Root </p>
    </div>
  )
}

export default Folder;