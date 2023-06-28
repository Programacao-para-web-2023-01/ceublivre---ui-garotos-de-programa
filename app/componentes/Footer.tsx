import React from "react";
const Footer = () => {
    return (<div className="card footer text-center">
        <div className="card-body">    </div>

        <div className="py-4 align-items-center" >
            <p>Siga-nos nas nossas redes sociais:</p>
            <a href="https://www.linkedin.com/" className="btn btn-primary m-1" role="button" rel="nofollow" target="_blank">
                <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="btn btn-primary m-1" role="button" rel="nofollow">
                <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="btn btn-primary m-1" role="button" rel="nofollow"
               target="_blank">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="btn btn-primary m-1" role="button" rel="nofollow"
               target="_blank">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="btn btn-primary m-1" role="button" rel="nofollow"
               target="_blank">
                <i className="fab fa-github"></i>
            </a>
        </div>

    <div className="card-footer text-body-secondary">
        Copyright © 2023 | CeubLivre - Garotos de Programa
    </div>
</div>);
};
export default Footer;