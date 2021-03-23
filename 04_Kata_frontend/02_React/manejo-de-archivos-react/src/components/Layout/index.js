import React from 'react';
import Header from '../Header';
import logo from '../../assets/img/logo.svg';
import Footer from '../Footer/footer';

const Layout = ({children}) => {
  console.log(children)
  return (
    <> 
      <Header logo={logo} />
        <div>
          {children}
        </div>
      <Footer />
    </>
  )
}

export default Layout