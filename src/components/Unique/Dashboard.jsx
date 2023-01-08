import React, { useEffect, useState } from 'react'
import Navbar from '../Reusable/Navbar.jsx'
import Footer from '../Reusable/Footer.jsx'
import Cover from '../Reusable/Cover.jsx'
import Product from './Product.jsx'
import Common from '../Service/Common.jsx'
import { blogList, hiw, product } from '../Data/product.jsx'
import { productCategory } from '../Data/product'
import BrowseRange from './BrowseRange.jsx'
import { useNavigate } from 'react-router'
import Blog from './Blog.jsx'
import Subscribe from '../Reusable/Subscribe.jsx'

const Dashboard = () => {
  let [products, setProducts] = useState(product)
  let [blogLists, setBlogLists] = useState(blogList)
  let isDesk = Common.isDesktop()
  let navigate = useNavigate()

  useEffect(() => setProducts(product.slice(0, 3)), [])
  useEffect(() => setBlogLists(blogList.slice(0, 3)), [])

  return (
    < div >
      <Navbar />
      <Cover id={{ id: 'dash' }} />
      <div className='border-bottom border-muted m-3'>
        <div className={`${isDesk ? "container pb-5" : "container-fluid"}`}>
          <div className={`my-5 ${isDesk ? "fs-2" : "text-center fs-4"}`}>Latest Arrivals</div>
          <div className="row mt-5 mb-3">
            {products.map((e, k) => {
              return (
                <div className="col-12 col-lg-4">
                  <Product data={e} key={k} />
                </div>
              )
            })
            }
          </div>
        </div>
      </div>

      <div className='border-bottom border-muted m-3'>
        <div className={`${isDesk ? "container pb-5 " : "container-fluid"}`}>
          <div className={`my-5 ${isDesk ? "fs-2" : "text-center fs-4"}`}>Browse the range</div>
          <div className="row mt-5 mb-3">
            {productCategory.map((i, ki) => {
              return (
                <div className="col-12 col-lg-4" onClick={() => navigate(i.path)}>
                  <BrowseRange data={i} key={ki} />
                </div>
              )
            })
            }
          </div>
        </div>
      </div>

      <div className='mb-5 container'>
        <div className={`my-5 text-center ${isDesk ? "fs-2" : "fs-4"}`}>How It Works</div>
        <div className="row mt-5 mb-3">
          {hiw.map((i, ki) => {
            return (
              <div key={ki} className="col-12 col-lg-4" onClick={() => navigate(i.path)}>
                <div className="card border-0 mb-5" >
                  <div className="row g-0">
                    <div className="col-4 col-lg-12">
                      <img src={i.icon} className="img-fluid rounded" alt={i.title} />
                      <span className={` mx-auto border-10 text-light ${isDesk ? '' : ''}`}>{i.id}</span>

                    </div>
                    <div className="col-8 col-lg-8">
                      <div className="card-body ps-3">
                        <div className='text-secondary mb-3'>{i.date}</div>
                        <h5 className="card-title">{i.title}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
          }
        </div>
      </div>

      <div className='py-5 bg-grey'>
        <div className={`${isDesk ? "container pb-5 " : "container-fluid"}`}>
          <div className={`my-5 ${isDesk ? "fs-2" : "text-center fs-4"}`}>From our blog</div>
          {<div className="row mt-5 mb-3">
            {blogLists.map((e, k) => {
              return (
                <div className="col-12 col-lg-4">
                  <Blog data={e} key={k} />
                </div>
              )
            })
            }
          </div>}
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div >
  )
}

export default Dashboard
