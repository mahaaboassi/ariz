// import './App.css'
// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// import Layout from './pages/layout'
// import Home from './pages/home/page'
// import About from './pages/about/page'
// import Contact from './pages/contact/page'
// import SubServices from './pages/services/subServices'
// import Blogs from './pages/blog/blog'
// import Terms from './pages/support/terms'
// import Privacy from './pages/support/privacy'
// import FAQs from './pages/support/faqs'
// import DetailsBlog from './pages/blog/detailsBlog'
// import Page_404 from './pages/404/page_404'

// function App() {

//   return (<BrowserRouter>
//             <Routes>
//                 <Route path='/*' element={<Layout/>}>
//                     <Route path='' element={<Home/>} />
//                     <Route path='about' element={<About/>} />
//                     <Route path='contact' element={<Contact/>} />
//                     <Route path='blog' element={<Blogs/>} />
//                     <Route path='blog/:link' element={<DetailsBlog/>} />
//                     <Route path="terms" element={<Terms/>} />
//                     <Route path="policy" element={<Privacy/>} />
//                     <Route path="faqs" element={<FAQs/>} />
//                     <Route path="services/:link" element={<SubServices/>} />
//                     <Route path="*" element={<Navigate to="/404" />}  />
//                 </Route>
//                 <Route path='/404' element={<Page_404/>} />
//                 <Route path='*' element={<Page_404/>} />
//             </Routes>
//         </BrowserRouter>
//   )
// }

// export default App

import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './pages/layout';
import React, { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/home/page'));
const About = lazy(() => import('./pages/about/page'));
const Contact = lazy(() => import('./pages/contact/page'));
const SubServices = lazy(() => import('./pages/services/subServices'));
const Blogs = lazy(() => import('./pages/blog/blog'));
const Terms = lazy(() => import('./pages/support/terms'));
const Privacy = lazy(() => import('./pages/support/privacy'));
const FAQs = lazy(() => import('./pages/support/faqs'));
const DetailsBlog = lazy(() => import('./pages/blog/detailsBlog'));
const Page_404 = lazy(() => import('./pages/404/page_404'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/*" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blogs />} />
            <Route path="blog/:link" element={<DetailsBlog />} />
            <Route path="terms" element={<Terms />} />
            <Route path="policy" element={<Privacy />} />
            <Route path="faqs" element={<FAQs />} />
            <Route path="services/:link" element={<SubServices />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Route>
          <Route path="/404" element={<Page_404 />} />
          <Route path="*" element={<Page_404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
