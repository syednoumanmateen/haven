import React from 'react'
import Navbar from '../Reusable/Navbar.jsx'
import Footer from '../Reusable/Footer.jsx'
import Title from './Title.jsx'
import Subscribe from '../Reusable/Subscribe.jsx'
import Blog from './Blog.jsx'
import Common from '../Service/Common.jsx'
import { blogList } from '../Data/product.jsx'

const Blogs = () => {
  let isDesk = Common.isDesktop()

  return (
    <div>
      <Navbar />
      <Title title={"Blog"} />
      <div className={`border-bottom border-muted pb-5 ${isDesk ? "container" : "container-fluid"}`}>
        <div className="row mt-5 mb-3">
          {blogList.map((e, k) => {
            return (
              <div className="col-12 col-lg-4">
                <Blog data={e} key={k} />
              </div>
            )
          })
          }
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  )
}

export default Blogs
