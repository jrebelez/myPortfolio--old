import React from 'react';


function Footer(props){
    return(
<div className="footer" >
    <div className="container">
    <div className="row">
       <div className="col-md-3 col-sm-6 col-6">
       <i className="fa fa-phone fa-lg"></i>:(253)720-2817
       </div>
       <div className="col-md-3 col-sm-6 col-6">
       <a className="fa fa-envelope fa-lg"
     href="mailto:59lpjrebelez@gmail.com"></a>
        </div>
        <div className="col-md-3 col-sm-6 col-6">
       <a className="btn btn-social-icon btn-linkedin" href="https://linkedin.com/in/joshua-rebelez-67b558181"><i className="fa fa-linkedin"></i></a>
       </div>
       <div className="col-md-3 col-sm-6 col-6">
       <a className="btn btn-social-icon btn-github" href="https://github.com/jrebelez"> <i className="fa fa-github"></i></a>
       </div>
        </div>
    </div>
        

</div>



);
}
export default Footer;
