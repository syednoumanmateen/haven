import React from 'react'
import Footer from '../Reusable/Footer.jsx'
import Navbar from '../Reusable/Navbar.jsx'
import Subscribe from '../Reusable/Subscribe.jsx'
import Title from './Title.jsx'
import { faqList } from '../Data/product.jsx'
import Common from '../Service/Common.jsx'

const FAQ = () => {
  let isDesk = Common.isDesktop()

  return (
    <div>
      <Navbar />
      <Title title={"FAQ"} />
      <div className={`${isDesk ? 'container' : 'container-fluid'}`}>
        <div className='border-bottom border-muted'></div>
        <div className={`${isDesk ? 'm-5' : 'm-3'}`}>
          {(faqList || []).map((e, k) => {
            return (
              <>
                <div key={k} className={`row g-0 border-bottom border-muted ${isDesk ? 'my-5 p-5' : 'my-5'}`}>
                  <div className={`${isDesk ? 'offset-1 col-lg-1' : 'col-2'}`}>
                    <img src={e.icon} alt={e.title} srcset="" />
                  </div>
                  <div className={`fs-2 fw-500 ${isDesk ? 'col-lg-2' : 'col-10 mb-5'}`}>{e.title}</div>
                  <div className={`${isDesk ? 'col-lg-7' : 'col-12'}`}>
                    {
                      (e.QA || []).map((i, ki) => {
                        return (
                          <>
                            <div key={ki} className='mb-5'>
                              <div className={`${isDesk ? 'fs-3 fw-500 mb-2' : 'fs-5 fw-500 mb-2'}`}>{i.Q}</div>
                              <p>{i.A}</p></div>
                          </>
                        )
                      })
                    }
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>

      <Subscribe />
      <Footer />
    </div>
  )
}

export default FAQ
