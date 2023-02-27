import React from 'react';
import styled from "styled-components"
import PedidosIcone from "../../icones/PedidosIcone.png"
import PessoasIcone from "../../icones/PessoasIcone.png"
import ProdutosIcone from "../../icones/ProdutoIcone.png"
import UnidadesIcone from "../../icones/UnidadesIcone.png"
import UsuariosIcone from "../../icones/UsuariosIcone.png"
import { Link } from "react-router-dom"

function Home() {
    return(
        <Container className="container pt-5">
            <div className="row">
                <div className="col-sm col-md-4">
                    <div className="card">
                        <Link to="/pedidos" className="text-center">
                        <img src={PedidosIcone} className="card-img-top" alt="Pedidos Icone"/>
                            <h5 className="card-title">PEDIDOS</h5>
                        </Link>
                    </div>
                </div>
                <div className="col-sm col-md-4">
                    <div className="card">
                        <Link to="/Pessoas" className="text-center">
                        <img src={PessoasIcone} className="card-img-top" alt="Pessoas Icone"/>
                            <h5 className="card-title">PESSOAS</h5>
                        </Link>
                    </div>
                </div>
                    <div className="col-sm col-md-4">
                        <div className="card">
                        <Link to="/Produtos" className="text-center">
                        <img src={ProdutosIcone} className="card-img-top" alt="Produtos Icone"/>
                            <h5 className="card-title">PRODUTOS</h5>
                        </Link>
                    </div>
                </div>
                <div className="col-sm col-md-4">
                    <div className="card">
                        <Link to="/Unidades" className="text-center">
                        <img src={UnidadesIcone} className="card-img-top" alt="Unidades Icone"/>
                            <h5 className="card-title">UNIDADES</h5>
                        </Link>
                    </div>
                </div>
                    <div className="col-sm col-md-4">
                        <div className="card">
                        <Link to="/Usuarios" className="text-center">
                        <img src={UsuariosIcone} className="card-img-top" alt="Usuarios Icone"/>
                            <h5 className="card-title">USUÁRIOS</h5>
                        </Link>
                    </div>
                 </div>
            </div>
        </Container>
    
    )
}
export default Home
export const Container = styled.div`
    margin-right: 30px;
    margin-top: 10px;
    font-size: 20px;
    display: block;
    column-count: 2;
    
    font-size: 28px;
    font-weight: bold;
    .card {
        margin-left: 50px;
        margin-right: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #eeee;
        padding: 20px;
        
        img{
            max-width: 100px;
            margin-bottom: 30px;
        }

        a {
            color:#5c5c5c;
            text-decoration: none;
        }
    }
    :hover {
        background: #FF720C;
        a {
            color: #fff;
        }
    }
   
`

