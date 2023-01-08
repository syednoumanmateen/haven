import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Unique/About';
import BlogDetails from './components/Unique/BlogDetails';
import Blogs from './components/Unique/Blogs';
import Contact from './components/Unique/Contact';
import Dashboard from './components/Unique/Dashboard';
import FAQ from './components/Unique/FAQ';
import PageNotFound from './components/Unique/PageNotFound';
import ProductDetails from './components/Unique/ProductDetails';
import Products from './components/Unique/Products';
import TermsConditions from './components/Unique/TermsConditions';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' index element={<Dashboard />} />
        <Route path='/dashboard' exact element={<Dashboard />} />
        <Route path='/products/:id' element={<Products />} />
        <Route path='/productDetails/:id' element={<ProductDetails />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/blog' exact element={<Blogs />} />
        <Route path='/blogDetails/:id' element={<BlogDetails />} />
        <Route path='/contact' exact element={<Contact />} />
        <Route path='/faq' exact element={<FAQ />} />
        <Route path='/termsandconditions' exact element={<TermsConditions />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
