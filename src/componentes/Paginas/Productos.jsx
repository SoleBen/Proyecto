
import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import img1 from "../../assets/img/imagen5.webp";

export const Productos =() =>{
    const responsive ={
        superLargeDesktop: {
            breakpoint: {max:4000, min: 3000},
            items: 5
        },
        desktop:{
            breakpoint: {max:3000, min: 1024},
            items: 3
        },
        tablet:{
            breakpoint: {max:1024, min: 464},
            items: 2
        },
        mobile:{
            breakpoint: {max:464, min: 0},
            items:1
        },
    };

    const productData=[
        {
            id: 1,
            src: img1,
            name: "Televisores Ultra",
            precio: "Bs1825.00",
            description: "Mas información del Producto",
        },
        {
            id: 1,
            src: img1,
            name: "Televisores Ultra",
            precio: "Bs1825.00",
            description: "Mas información del Producto",
        },
        {
            id: 1,
            src: img1,
            name: "Televisores Ultra",
            precio: "Bs1825.00",
            description: "Mas información del Producto",
        },
    ]

    productData.map(item=>(
        <Productos/>
    ))
    return(
        <div className="App">
            <h1>Nuestros televisores</h1>
           <Carousel responsive={responsive}>
            <div className="Card">
                <img className="product--image"
                src={img1} alt="imagen del producto"/>
                <h2>Celular Ultra</h2>
                <p className="precio"> Bs1825.00</p>
                <p>Mas informacion del producto</p>
                <p>
                    <button>Añadir al carrito</button>
                </p>
            </div>
            <div className="Card">
                <img className="product--image"
                src={img1} alt="imagen del producto"/>
                <h2>Celular Ultra</h2>
                <p className="precio"> Bs1825.00</p>
                <p>Mas informacion del producto</p>
                <p>
                    <button>Añadir al carrito</button>
                </p>
            </div>
            <div className="Card">
                <img className="product--image"
                src={img1} alt="imagen del producto"/>
                <h2>Celular Ultra</h2>
                <p className="precio"> Bs1825.00</p>
                <p>Mas informacion del producto</p>
                <p>
                    <button>Añadir al carrito</button>
                </p>
            </div>
            
            </Carousel> 
        </div>
    );
}
export default Productos;