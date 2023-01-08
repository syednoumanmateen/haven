import React, { useEffect, useState } from 'react'
import Navbar from '../Reusable/Navbar.jsx'
import Footer from '../Reusable/Footer.jsx'
import Subscribe from '../Reusable/Subscribe.jsx'
import blogDetailsImage from '../../Images/Blog/Blog.jpg'
import Common from '../Service/Common.jsx'
import Blog from './Blog.jsx'
import { blogList } from '../Data/product.jsx'

const BlogDetails = () => {

  let [blogLists, setBlogLists] = useState(blogList)
  let isDesk = Common.isDesktop()

  useEffect(() => setBlogLists(blogList.slice(0, 3)), [])

  return (
    <div>
      <Navbar />
      <div className=''>

        <div className={`mx-auto my-5 ${isDesk ? 'w-600' : ''}`}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
          <div className='my-3 fs-3'>1914 translation by H. Rackham</div>
          <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>
          <p className='mb-5'>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
          <div className='text-prime fs-2 text-center mb-5'>“To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?”</div>
          <img className='img-fluid' src={blogDetailsImage} alt="" />
          <p className='fs-6 text-center text-muted mb-3'>Here is a caption for the image above</p>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
          <ul className='mb-5'>
            <div className='my-3 fs-3'>A brief summary:</div>
            <li>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms.</li>
            <li>But in certain circumstances and owing to the claims of duty.</li>
            <li>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally</li>
          </ul>
        </div>
      </div>

      <div className='py-5 bg-grey'>
        <div className={`${isDesk ? "container pb-5" : "container-fluid"}`}>
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
    </div>
  )
}

export default BlogDetails
