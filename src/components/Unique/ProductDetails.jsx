import React, { useEffect, useState } from 'react'
import Footer from '../Reusable/Footer.jsx'
import Navbar from '../Reusable/Navbar.jsx'
import Subscribe from '../Reusable/Subscribe.jsx'
import Common from '../Service/Common.jsx'
import { product } from '../Data/product.jsx'
import Product from './Product.jsx'

const ProductDetails = () => {

  let [products, setProducts] = useState(product)
  let isDesk = Common.isDesktop()

  useEffect(() => setProducts(product.slice(0, 3)), [])

  return (
    <div>
      <Navbar />

      <div className='border-bottom border-muted m-3'>
        <div className={`${isDesk ? "container pb-5 " : "container-fluid"}`}>
          <div className={`my-5 ${isDesk ? "fs-2" : "text-center fs-4"}`}>You may also consider</div>
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
      <Subscribe />
      <Footer />
    </div>
  )
}

export default ProductDetails
