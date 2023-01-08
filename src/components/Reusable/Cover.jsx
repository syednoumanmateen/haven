import React from 'react'
import Common from '../Service/Common.jsx'
import { useNavigate } from 'react-router'
import { coverData } from '../Data/product.jsx'

const Cover = (props) => {
  let data = props.id
  let isDesk = Common.isDesktop()
  let navigate = useNavigate()

  let ui;

  coverData.map((e, k) => {

    if (e.id === data.id) {
      let bg = {
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(" + e.bgImg + ")",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        padding: (isDesk) ? '220px 0px' : '50px 0px'
      }
      ui = <>
        <div className='text-center text-light' key={k} style={bg}>
          <div className='display-2 mb-3 fw-bold' style={{ letterSpacing: '0.1em' }}>{e.name}</div>
          <div className={`mb-4 ${isDesk ? 'fs-5' : 'fs-6'}`}>Here’s a description of the featured collection or promotion.</div>
          {(data.id === 'dash') ? <button onClick={() => navigate('/products/sale')} className={`btn btn-md btn-dark fw-500 ${isDesk ? 'py-2 px-4 fs-5' : 'p-2'}`}>SHOP THE SALE</button> : ""}
        </div>
      </>
    }
    return e
  })

  return (
    <>
      {ui}
    </>
  )
}

export default Cover
