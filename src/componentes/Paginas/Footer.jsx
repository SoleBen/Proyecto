import React, { useContext } from "react"
import { useEffect,useState, } from "react"
import './footer.css';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';

export const Footer =() =>{
    return(
       <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                        <div className="sb_footer-links_div">
                            <h4>For Bussines </h4>
                            <a href="/employer">
                                <p>Employer</p>
                            </a>
                            <a href="/healthplan">
                                <p>Health plan</p>
                            </a>
                            <a href="/individual">
                                <p>Individual</p>
                            </a>
                        </div>
                        <div className="sb_footer-links_div">
                            <h4>Resources </h4>
                            <a href="/resource">
                                <p>Resource center</p>
                            </a>
                            <a href="/resource">
                                <p>Testimonials</p>
                            </a>
                            <a href="/resource">
                                <p>STV</p>
                            </a>
                        </div>
                        <div className="sb_footer-links_div">
                            <h4>Partners </h4>
                            <a href="/employer">
                                <p>Swing Tech</p>
                            </a>
                        </div>
                        <div className="sb_footer-links_div">
                            <h4>Company</h4>
                            <a href="/about">
                                <p>About</p>
                            </a>
                            <a href="/press">
                                <p>Press</p>
                            </a>
                            <a href="/career">
                                <p>Career</p>
                            </a>
                            <a href="/contacto">
                                <p>Contacto</p>
                            </a>
                            </div>
                        <div className="sb_footer-links_div">
                            <h4>Comming soon on</h4>
                            <div className="socialmedia">
                                <p>
                                    <a href="https://www.facebook.com/retail.cl?_rdc=1&_rdr" alt="">
                                    <img src={navIcon1} alt=""/>  
                                    </a>
                                </p>
                                <p>
                                    <a href="https://www.facebook.com/retail.cl?_rdc=1&_rdr" alt="">
                                    <img src={navIcon2} alt=""/>  
                                    </a>
                                </p>
                                <p>
                                    <a href="https://www.instagram.com/megatecnologiaes/" alt="">
                                    <img src={navIcon3} alt=""/>  
                                    </a>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            <hr></hr>
            <div className="sb_footer-below">
                <div className="sb_footer-copyright">
                    <p>
                        @{new Date().getFullYear()} codeInn. Derechos reservados.
                    </p>
                </div>
                <div className="sb_footer-below-links">
                    <a href="/terms"><div><p>Terminos y Condiciones</p></div></a>
                    <a href="/privacidad"><div><p>Privacidad</p></div></a>
                    <a href="/seguridad"><div><p>Seguridad</p></div></a>
                    <a href="/cookie"><div><p>Declaracion de Cookies </p></div></a>
                </div>
            </div>
       </div> 
    )
}
export default Footer;