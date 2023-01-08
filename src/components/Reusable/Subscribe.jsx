import React, { memo } from 'react'
import Common from '../Service/Common.jsx'

const Subscribe = () => {

  let isDesk = Common.isDesktop()
  return (
    <>
      <div className={`text-center my-5 ${isDesk ? 'container' : 'container-fluid'}`}>
        <div className='fs-2 fw-bold my-4'>Join our mailing list</div>
        <div className='mb-4'>Sign up to receive inspiration, product updates, and special offers from our team.</div>
        <div className="row m-1">
          <div className={`col-12 col-lg-5 p-0 me-1 mb-2 ${isDesk ? 'offset-3' : ''}`}>
            <input type="text" className="form-control" placeholder="Email Address" />
          </div>
          <div className='col-12 col-lg-auto p-0 d-grid'>
            <button className='btn btn-dark'>SUBSCRIBE</button>
          </div>
        </div>
        <div className='fs-6'>We’ll never share your details. View our <span className='fw-500 '>Privacy Policy</span></div>
      </div>
    </>
  )
}

export default memo(Subscribe)
