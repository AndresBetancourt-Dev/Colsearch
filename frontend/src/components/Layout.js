import React from "react"
import Navbar from "./Navbar";
import Footer from "./Footer";


const Layout = (props) => {

    return(
        <React.Fragment>
            <Navbar/>
            <Footer/>
            {props.children}
            
            
        </React.Fragment>
        
    )
}

export default Layout;