import React from "react";
import { Link } from "react-router-dom";
import video from '../../assets/img/video1.mp4'
import ReactPlayer from "react-player";

export const Inicio =() =>{
    return(
            <div className="container my-5">
                <h3 style={{ textAlign: 'justify' }}className="tituloPrincipal"> Mᴇɢᴀᴛᴇᴄɴᴏʟᴏɢɪ́ᴀ, ᴛɪᴇɴᴅᴀ ᴅᴇ ᴇʟᴇᴄᴛʀᴏ́ɴɪᴄᴀ ʏ ᴛᴇᴄɴᴏʟᴏɢɪ́ᴀ ᴏɴʟɪɴᴇ ᴄᴏɴ ʟᴏs ᴍᴇᴊᴏʀᴇs ᴘʀᴇᴄɪᴏs</h3>
                <h3 style={{ textAlign: 'justify' }}className="tituloPrincipal">   </h3>
                <h3 style={{ textAlign: 'justify' }}className="tituloPrincipal"> 𝐌𝐢𝐓𝐞𝐜𝐧𝐨</h3>
                <div className="row">
                    <div className="col-md-8">
                    <p style={{ textAlign: 'justify',}}>
                    Somos una empresa que se dedica a Trabajar con productos tecnologicos de primera calidad.
                    Realizamos envios a todas las zonas.
                    Realizamos nuestro servicio con responsabilidad y seriedad para garantizar a usted la mayor confianza de nuestros productos.
                    </p>
                </div>
                <h3 style={{ textAlign: 'justify' }}className="tituloPrincipal">  </h3>
                <h3 style={{ textAlign: 'Center' }}className="tituloPrincipal"> Ｃａｔｅｇｏｒíａｓ Ｄｅｓｔａｃａｄａｓ</h3>
                
                <div className="app">
                <h3 style={{ textAlign: 'justify' }}className="tituloPrincipal">  </h3>
                    <ReactPlayer url={video} controls />
                    <h3 style={{ textAlign: 'justify' }}className="tituloPrincipal">  </h3>
                    <h3 style={{ textAlign: 'justify' }}className="tituloPrincipal"> ENTERATE DE TODAS NUESTRAS NOVEDADES </h3>
                </div>
            </div>
        </div>
                
    );
}