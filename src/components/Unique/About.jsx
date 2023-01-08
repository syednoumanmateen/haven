import React from 'react'
import About11 from '../../Images/About/About1.1.jpeg'
import About12 from '../../Images/About/About1.2.jpeg'
import About13 from '../../Images/About/About1.3.jpeg'
import About1 from '../../Images/About/About1.jpg'
import Footer from '../Reusable/Footer.jsx'
import Navbar from '../Reusable/Navbar'
import Subscribe from '../Reusable/Subscribe.jsx'
import Common from '../Service/Common.jsx'
import './About.css'
import Title from './Title.jsx'

const About = () => {
  let isDesk = Common.isDesktop()

  return (
    <>
      <Navbar />
      <Title title={"Beautify your space"} />
      <>
        <div className={`${isDesk ? "container" : "container-fluid"}`}>
          <img src={About1} className={`w-content`} alt="Beautify your space" />
          <div className={`mx-auto my-5 ${isDesk ? 'w-600' : ''}`}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
          </div>
        </div>
        <div className='img'>
          {isDesk ? <img src={About11} className="img1 border" width={250} alt="" /> : ""}
          {isDesk ? <img src={About12} className="img2 border" width={250} alt="" /> : ""}
          <div className='bg-grey text-center mx-auto'>
            <div className={`my-5 py-5 ${isDesk ? "container  w-600" : "container-fluid"}`}>
              <div className={`fw-500 ${isDesk ? "mb-5" : "mb-3"}`}>OUR PROMISE</div>
              <div className='text-prime fs-2'>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage.</div>
            </div>
          </div>
          {isDesk ? <img src={About13} className="img3 border" width={250} alt="" /> : ""}
        </div>
      </>
      <Subscribe />
      <Footer />
    </>
  )
}

export default About
