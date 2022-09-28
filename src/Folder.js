import React, { useState } from 'react'
import Icon from './Icon';

function Folder({files}) {
     const [fileOpen, setFileOpen ] =  useState(false);

    const findFileExtensionName = (fileName) => {
        const arr = fileName.split('.');
        return arr[arr.length - 1].toLowerCase();
    }


  return (
    <div>
         <div style={{
          color: '#fff',
          cursor: 'pointer',
          padding: '2px 4px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '5px',
        }} 
        onClick={() => setFileOpen(!fileOpen)}
        >
        {!files.isFolder  &&
         <Icon name={findFileExtensionName(files.name)}   style={{ height: '19px', marginRight: '8px', flexShrink: 0 }} />
         }

        {files.isFolder ? (
                <>
                    {fileOpen ? (
                    <Icon
                        name="caretDown"
                        style={{ height: '12px', marginRight: '4px', flexShrink: 0 }}
                    />
                    ) : (
                    <Icon
                        name="caretRight"
                        style={{ height: '12px', marginRight: '4px', flexShrink: 0 }}
                    />
                    )}
                </>
                ) : null}
            {files.name}    
                

        </div>
        
        {files.isFolder &&
        fileOpen &&
        files.children.map((exp, idx) => (
          <div style={{ paddingLeft: '20px' }}>
            <Folder files={exp} />
          </div>
        ))}
      
       
       
    </div>
  )
}

export default Folder;