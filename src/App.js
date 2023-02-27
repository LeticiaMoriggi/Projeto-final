import { BrowserRouter }  from "react-router-dom";
import  Navbar  from "./Componentes/navbar/Navbar";
import Footer from "./Componentes/rodape/footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rotas from "./Rotas";
import AuthContext from './contexto/AuthContext'


const App = () => {
  return (
    <AuthContext>
    <BrowserRouter>
        <ToastContainer />
        <Footer />
        <Navbar />
        <Rotas />
        
    </BrowserRouter>
    </AuthContext>
  );
}

export default App;


