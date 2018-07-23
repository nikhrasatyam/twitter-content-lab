import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

 const Layout = (props) => {
    return(
        <div className="App Site">
    <div className="Site-content">
        <div className="App-header">
            <Header />
        </div>
		<div className="main">
            {props.children}
        </div>
    </div>
    <Footer />
 </div>
     
    )
}

export default Layout