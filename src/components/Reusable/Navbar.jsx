import React, { memo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import title from '../../Images/Title.svg'
import Common from '../Service/Common.jsx'
import Chart from '../Unique/Chart.jsx'
import search from '../../Images/FAQ/FAQ6.svg'
import chart from '../../Images/FAQ/FAQ7.svg'
import { navbarList, navList } from '../Data/product'

const Navbar = () => {
  let isDesk = Common.isDesktop();
  let navigate = useNavigate()

  return (
    <>
      <div className={`mt-3 border-bottom border-muted ${isDesk ? 'container' : 'container-fluid'}`}>
        <div className={`row d-flex align-items-center ${isDesk ? 'py-3' : 'py-1'}`}>
          <div className="col-1 col-lg-2">
            <div className="dropdown">
              <h2 data-bs-toggle="dropdown"><i className="bi bi-list"></i></h2>
              <ul className="dropdown-menu py-2">
                {
                  navList.map((i, ki) => {
                    return (<li key={ki}>
                      <Link className="dropdown-item text-secondary fs-6" to={i.path}>{i.name}</Link>
                    </li>)
                  })
                }
              </ul>
            </div>
          </div>
          <div className="col-8 col-lg-8 text-center" >
            <img src={title} alt="HAVEN" onClick={() => navigate('/dashboard')} />
          </div>
          <div className="col-3 col-lg-2 float-end">
            <div className='d-flex align-items-center'>
              <img className="me-3" src={search} alt="" /> <img className="me-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" src={chart} alt="" /><span className='badge bg-danger'>0</span>
            </div>
          </div>
          <div className="offcanvas offcanvas-end" id="offcanvas">
            <div className="offcanvas-header">
            </div>
            <div className="offcanvas-body">
              <Chart />
            </div>
          </div>
        </div>
        <nav className='navbar-expand-lg'>
          <div className="navbar-nav d-flex">
            <div className='mx-auto p-3'>
              {navbarList.map((e, k) => {
                return (
                  <Link key={k} className={`text-secondary text-decoration-none fw-500 ${isDesk ? 'ms-5 fs-5' : 'ms-2 fs-6'}`} to={'/products/' + e.path}>{e.name}</Link>
                )
              })}
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default memo(Navbar)
