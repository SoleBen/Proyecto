import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import Logo from '../../assets/img/logo Blanco.png';
import img1 from "../../assets/img/imaden1.jpg";
import img2 from "../../assets/img/imagen2.png";
import img3 from "../../assets/img/imagen4.jpg";
import React from 'react';

export const Nosotros = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    }
    return (
        <div className="container my-5">
            <h3 style={{ textAlign: 'justify' }}className="tituloPrincipal"> 𝐌𝐢𝐓𝐞𝐜𝐧𝐨</h3>
            <div className="row">
                <div className="col-md-8">
                <p style={{ textAlign: 'justify' }}>
                Somos una empresa que se dedica a Trabajar con productos tecnologicos de primera calidad.
                Realizamos envios a todas las zonas.
                Realizamos nuestro servicio con responsabilidad y seriedad para garantizar a usted la mayor confianza de nuestros productos.
                </p>
            
                </div>
                <div className="col-md-4">
                    <img src={Logo} alt="Ada1" className="imgPrincipal" />
                </div>
                <section className="skill" id="skills">
                    <Container>
                        <Row>
                            <Col>
                                <div className="skill-bx">
                                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                        <div className="item">
                                            <img src={img1} alt="Ada2"/>
                                            <h5>Televisores Ultra HD</h5>
                                        </div>
                                        <div className="item">
                                            <img src={img2} alt="Ada3"/>
                                            <h5>Relojes Inteligentes</h5>
                                        </div>
                                        <div className="item">
                                            <img src={img3} alt="Ada4"/>
                                            <h5>Impresoras ultra</h5>
                                        </div>
                    
                                    </Carousel>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        
        </div>
        
    )
};