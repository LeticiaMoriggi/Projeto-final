import { Form } from "@unform/web";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Image  from "./Login.png";
import * as Yup from "yup";
import InputLabel from "../../Componentes/unform/input-label"
import  Logo  from "../login/Logo.png"
import { toast } from "react-toastify";
import axios from "axios";


const Login = () => {

  const formRef = useRef(null)
  
  const navigate = useNavigate()
  
  const submit = async (data) => {
      try{
          formRef.current.setErrors({})
          const schema = Yup.object().shape({
              username: Yup.string().required("Nome é obrigatorio"),
              password: Yup.string().min(5, 'senha precisa ter 5 caracteres')
          })
          await schema.validate(data, { abortEarly: false})
          await axios.post("http://localhost:3333/usuarios", data)
          .then(response => {
              toast.success("Usuário salvo com sucesso")
              navigate(`/usuarios/${response.data.id}`);
          })
          .catch(erro => {
              toast.error("Usuário nao salvo no banco de dados!")
              console.log(erro);
          })
  
      }catch(error){
          if (error instanceof Yup.ValidationError){
              
              const messages = {}
              error.inner.forEach(erro => {
                  messages[erro.path] = erro.message
              });
  
              formRef.current.setErrors(messages)
          }
      }
  }
    return (
        <LContainer className="container">
           
           <div className="row justify-content-center">
        <div className="col-sm col-md-3 card">
          <div>
            <img src={Logo} alt="Logo" />
          </div>

          <Form ref={formRef} onSubmit={submit} >
            <div className="mt-2">
              <InputLabel  name="username" label="Usuário" />
            </div>

            <div className="mt-3">
              <InputLabel name="password" label="Senha" type="password"/>
            </div>

            <Link className="link" to="/">Esqueceu sua senha?</Link>
            <button className="btn btn-secondary btn-block" type="submit">
              Entrar
            </button>
          </Form>
        </div>
      </div>

        </LContainer>
       
    )  
}
export default Login
export const LContainer = styled.div`
background-image: url(${Image});
background-repeat: no-repeat;
max-width: 500%;
height: 900px;
background-size: contain;
background-position: absolute;
justify-content: absolute;
margin-top: -5rem;
margin-bottom: 0;

img {
  max-width: 150px;
  
}
.card {
  background: #5C5C5C;
    flex-direction: column;
    align-content: center;
    align-items: center;
    padding: 25px;
    margin-top: 20rem;
    margin-left: 1rem;
  
  button {
    background: #FF720C;
    height: 35px;
    width: 100%;
}
.link{
    font-size: 10px;
    color: #fff;
}
}
`