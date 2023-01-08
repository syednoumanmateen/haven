import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import title from '../../Images/Title2.svg';
import Common from '../Service/Common.jsx';
import { footer } from '../Data/product';

const Footer = () => {
  let isDesk = Common.isDesktop();
  let para = isDesk ? { width: '365px' } : {}

  return (
    <>
      <div className={`bg-dark text-light ${isDesk ? 'py-5' : 'py-2'}`}>
        <div className={`${isDesk ? 'my-5 container' : 'my-4 container-fluid'}`}>
          <div className="row">
            <div className={`col-12 col-lg-6 ${isDesk ? '' : 'text-center'}`}>
              <img className='mb-4' src={title} alt="" />
              <div className={`${isDesk ? '' : 'mb-4'}`} style={para}>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            {
              footer.map((e, k) => {
                return (
                  <div key={k} className={`col-6 col-lg-2 ${isDesk ? '' : ''}`}>
                    <div className='mb-3'>{e.title}</div>
                    <ul className='ps-0'>
                      {
                        e.list.map((i, ki) => {
                          return (<li className='navbar-nav' key={ki}>
                            <Link className='text-decoration-none text-secondary mb-2' to={i.path}>{i.name}</Link></li>
                          )
                        }
                        )
                      }
                    </ul>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Footer)
