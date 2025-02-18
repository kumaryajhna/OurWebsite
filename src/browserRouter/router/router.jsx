import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Paths } from '../paths/paths';
import Loader from '../../reusables/loader/loader';
const BookanAppointment = lazy(() => import( '../../components/bookanAppointment/bookanAppointment'))

// Lazy load the components
const Home = lazy(() => import('../../components/home/home'));
const About = lazy(() => import('../../components/about/about'));
const Products = lazy(() => import('../../components/products/products'));
const Services = lazy(() => import('../../components/services/services'));
const Blogs = lazy(() => import('../../components/blogs/blogs'));
const ContactUs = lazy(() => import('../../components/contactus/contactus'));

const RouterComponent = () => {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <Suspense fallback={<div><Loader/></div>}>

      <Routes>
        <Route path={Paths.Home} element={<Home />} />
        <Route path={Paths.About} element={<About />} />
        <Route path={Paths.Products} element={<Products />} />
        <Route path={Paths.Services} element={<Services />} />
        <Route path={Paths.Blogs} element={<Blogs />} />
        <Route path={Paths.Contactus} element={<ContactUs />} />
        <Route path={Paths.BookanAppointment} element={<BookanAppointment />} />

      </Routes>
    </Suspense>
  );
};

export default RouterComponent;

