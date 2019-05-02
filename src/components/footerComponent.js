import React from 'react';


function Footer(props){
    return(
<div className="footer" >
    <div className="container">
    <div className="text-center">
       <h3> Contact </h3>
       <i className="fa fa-phone fa-lg"></i>:(253)720-2817
       <br />
       <i className="fa fa-envelope fa-lg"></i>
        :<a href="mailto:59lpjrebelez@gmail.com">
                         59lpjrebelez@gmail.com</a>
                         <br />
       <a className="btn btn-social-icon btn-linkedin" href="https://linkedin.com/in/joshua-rebelez-67b558181"><i className="fa fa-linkedin"></i></a>
       
       <a className="btn btn-social-icon btn-github" href="https://github.com/jrebelez"> <i className="fa fa-github"></i></a>
       
        </div>
    </div>
        

</div>



);
}
export default Footer;
