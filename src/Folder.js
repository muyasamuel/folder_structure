import React from 'react'
import Icon from './Icon';

function Folder({files}) {

    const findFileExtensionName = (fileName) => {
        const arr = fileName.split('.');
        return arr[arr.length - 1].toLowerCase();
    }


  return (
    <div style={{display: 'flex' , alignItems: "center"}}>
        {!files.isFolder  &&
        <>
        <Icon name='js'   style={{ height: '19px', marginRight: '8px', flexShrink: 0 }} />
         <p>{files.name}</p> 
        </>
         }
        
       
    </div>
  )
}

export default Folder;