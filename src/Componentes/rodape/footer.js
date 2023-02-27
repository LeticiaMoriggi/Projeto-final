import React from "react";
import styled from 'styled-components';

const Footer = () => {
return (
	<Box>
			Hyberica Softwares | Todos os direitos reservados Versao UI v 1.0.23 | API v 1.0.13
	</Box>
);
};
export default Footer;


export const Box = styled.div`
font-size: 0.8rem;
background: #5c5c5c;
opacity: 0.8;
position: absolute;
bottom: -22rem;
width: 100%;
color: #ffff;
height: 4rem;
margin-top: 50px;
margin-bottom: -1rem;
display: flex;
align-items: center;
justify-content: center;
`