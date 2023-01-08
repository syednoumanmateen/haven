import React from 'react'
import Common from '../Service/Common.jsx'

const BrowseRange = (props) => {
  let data = props.data
  let isDesk = Common.isDesktop()

  return (
    <>
      <div className="card border-0 mb-3" >
        <div className="row g-0">
          <div className="col-4 col-lg-12 text-center">
            <div className='position-absolute fs-2' style={{top:'10%',right:'40%'}}>{isDesk ? data.title : ''}</div>
            <img src={data.icon} className="img-fluid rounded" alt={data.title} />
          </div>
          <div className="col-8 col-lg-8">
            <div className="card-body">
              <div className='mb-2 text-left ms-3 fs-3'>{!isDesk ? data.title : ''}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BrowseRange
