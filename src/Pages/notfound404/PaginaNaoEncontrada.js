import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Image from "../../assets/PaginaNaoEncontrada.png";

function PaginaNaoEncontrada () {
    return(
        <NFContainer className="container">
            <div className="row justify-content-center">
                <div className="col-sm col-md-12">
                    <a href="/" class="btn btn-primary" role="button">VOLTAR A PÁGINA INICIAL</a>
                </div>
                </div>
           
        </NFContainer>


    )
}
export default PaginaNaoEncontrada

export const NFContainer = styled.div`
    background-image: url(${Image});
    background-repeat: no-repeat;
    max-width: 100%;
    margin-top: -5rem;
    height: 900px;
    background-size: contain;
    background-position: center;
    background-color: #111111;
    display: flex;
    align-items: center;
    justify-content: center;

.btn-primary {
    margin-top: 650px;
    margin-left: 350px;
    margin-right: 400px;
    background: none !important;
    color: #FF720C;
    text-transform: uppercase;
    font-weight: bold;
    text-shadow: 2px 2px 5px #FF720C;

    border: none;
    border-radius: 10px;
    border-bottom: 2px solid #ff720c;

}

`