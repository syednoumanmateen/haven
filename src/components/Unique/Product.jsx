import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Common from '../Service/Common.jsx'

const Product = (props) => {

  let isDesk = Common.isDesktop()
  let data = props.data
  let [img, setImg] = useState(data.icon)
  let navigate = useNavigate()

  useEffect(() => setImg(data.icon), [data])
  let badge = (data.badge) ? <div className={`badge rounded-pill bg-danger py-1 px-2`} style={{ letterSpacing: '0.1em' }}>SALE</div> : ""

  return (
    <>
      <div className="card border-0 mb-3" onClick={() => navigate(data.path)}>
        <div className="row g-0">
          <div className="col-4 col-lg-12">
            <div className={`position-absolute top-0 end-0 m-3`}>{isDesk ? badge : ''}</div>
            <img src={img} className="img-fluid rounded" alt={data.title} onMouseOver={() => (data.icon1) ? setImg(data.icon1) : setImg(data.icon)} onMouseOut={() => setImg(data.icon)} />
          </div>
          <div className="col-8 col-lg-8">
            <div className="card-body">
              <div className='mb-2'>{!isDesk ? badge : ''}</div>
              <h5 className="card-title">{data.title}</h5>
              <div><span className="card-title text-decoration-line-through text-secondary">{(data.oldPrice) ? "$" + data.oldPrice + "USD" : ""}</span> <span className="card-title text-danger">$ {data.price} USD</span></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
