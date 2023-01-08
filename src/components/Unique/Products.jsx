import React, { useState } from 'react'
import { useParams } from 'react-router'
import { product } from '../Data/product.jsx'
import Cover from '../Reusable/Cover.jsx'
import Footer from '../Reusable/Footer.jsx'
import Navbar from '../Reusable/Navbar.jsx'
import Subscribe from '../Reusable/Subscribe.jsx'
import Common from '../Service/Common.jsx'
import Product from './Product.jsx'

const Products = () => {

  let params = useParams()
  let isDesk = Common.isDesktop()
  let products = product.filter(e => e.category.indexOf(params.id) !== -1)
  let [pagination, setPagination] = useState({ currentPage: 0, itemsPerPage: 9 })
  // let [products, setProducts] = useState(product.filter(e => e.category.indexOf(params.id) !== -1))

  // useEffect(() => {
  //   setProducts(product.filter(e => e.category.indexOf(params.id) !== -1))
  // }, [params.id]);
  let paginationButtons;
  let cover;

  if (params.id === 'all') {
    let startIndex = pagination.currentPage * pagination.itemsPerPage
    products = products.slice(startIndex, startIndex + pagination.itemsPerPage)
    paginationButtons = <div className="row mb-4">
      <div className={`col-6 text-end`}>{(pagination.currentPage !== 0) ? <button className={`btn btn-dark btn-md ${isDesk ? "py-2 px-5 fs-5" : "py-1 px-3 fs-6"}`} onClick={() => prev()}><i className="bi bi-caret-left-fill me-2"></i>PREV</button> : ""}</div>
      <div className={`col-6`}>{((startIndex + pagination.itemsPerPage) <= product.length) ? <button className={`btn btn-dark btn-md ${isDesk ? "py-2 px-5 fs-5" : "py-1 px-3 fs-6"}`} onClick={() => next()}>NEXT <i className="bi bi-caret-right-fill ms-2"></i></button> : ""}</div>
    </div>
  }

  if (params.id !== 'all') {
    cover = <Cover id={params} />
  }

  let prev = () => {
    let startIndex = pagination.currentPage * pagination.itemsPerPage;
    products = products.slice(startIndex, startIndex + pagination.itemsPerPage);
    if (pagination.currentPage !== 0) {
      setPagination({
        ...pagination,
        currentPage: pagination.currentPage - 1
      })
    }
  }

  let next = () => {
    let startIndex = pagination.currentPage * pagination.itemsPerPage;
    products = products.slice(startIndex, startIndex + pagination.itemsPerPage);
    if (product.length >= (startIndex + pagination.itemsPerPage)) {
      setPagination({
        ...pagination,
        currentPage: pagination.currentPage + 1
      })
    }
  }

  return (
    <>
      <Navbar />
      {cover}
      <div className={`border-bottom border-muted pb-5 ${isDesk ? "container" : "container-fluid"}`}>
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
        {paginationButtons}
      </div>
      <Subscribe />
      <Footer />
    </>
  )
}

export default Products
