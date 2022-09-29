import React from 'react'

function Preview({ url,  children}) {
  return (
    <div>
        <div className='imageDiv'>

        </div>
    <a href={url}> {children}</a>
    </div>
  )
}

export default Preview;