import React from 'react'
import Common from '../Service/Common.jsx'

const Title = (props) => {
  let isDesk = Common.isDesktop()

  return (
    <>
      <div className={`${isDesk ? 'container' : 'container-fluid'}`}>
        <div className={`text-center ${isDesk ? 'dsk-title' : 'mob-title'}`}>
          <div className={`fw-500 mb-4 ${isDesk ? 'display-3' : 'display-5'}`}>{props.title}</div>
          <div>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</div>
        </div>
      </div>
    </>
  )
}

export default Title
