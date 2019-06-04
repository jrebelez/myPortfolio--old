import React from 'react';


function Footer(props){
    return(
<div className="footer" >
    <div className="container">
    <div className="row ">
       <div className="col">
       <a className="btn btn-social-icon fa fa-phone fa-lg" href="tel:253-720-2817" ></a>
       </div>
       <div className="col">
       <a className="btn btn-social-icon fa fa-envelope fa-lg "
     href="mailto:59lpjrebelez@gmail.com"></a>
        </div>
        <div className="col">
       <a className="btn btn-social-icon fab fa-linkedin-in" href="https://linkedin.com/in/joshua-rebelez-67b558181" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
       </div>
       <div className="col">
       <a className="btn btn-social-icon btn-githubfa-lg " href="https://github.com/jrebelez" target="_blank" rel="noopener noreferrer"> <i className="fa fa-github" target="_blank"></i></a>
       </div>
        </div>
    </div>
        

</div>



);
}
export default Footer;
