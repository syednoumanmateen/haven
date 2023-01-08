import React from 'react'
import { useNavigate } from 'react-router'
// import Common from '../Service/Common.jsx'

const Blog = (props) => {

  // let isDesk = Common.isDesktop()
  let data = props.data
  let navigate = useNavigate()

  return (
    <>
      <div className="card border-0 mb-3" onClick={() => navigate(data.path)}>
        <div className="row g-0">
          <div className="col-4 col-lg-12">
            <img src={data.icon} className="img-fluid rounded" alt={data.title} />
          </div>
          <div className="col-8 col-lg-8">
            <div className="card-body ps-3">
              <div className='text-secondary mb-3'>{data.date}</div>
              <h5 className="card-title">{data.title}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
