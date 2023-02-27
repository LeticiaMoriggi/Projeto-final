import React from "react"
import styled from "styled-components"
import IconeDeUsuarioNavbar from "../../icones/IconeDeUsuarioNavbar.png"
import Image from "../../assets/clothingLOGO.png"

function Navbar(){
    return(
    <header>
        <nav className="navbar">
            <Container className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-sm col-md-6">
                        <a className="navbar-brand" href="/Login">
                        <img src={IconeDeUsuarioNavbar} alt="logo"/>
                        </a>
                    </div>
                </div>
            </Container>
        </nav>
    </header>
    
    )
}
export default Navbar

export const Container = styled.div`
background-image: url(${Image});
background-repeat: no-repeat;
width: 100%;
height: 80px;
background-size: contain;
background-position: center;
justify-content: center;
margin-top: -1rem;
background-color: #5c5c5c;
    img{
        max-width: 100px;
        margin-left: 50rem;
        position: relative;
        margin-top: 0;
}
`