import { Nav, Navbar } from "react-bootstrap"
import { palett } from "../../../styles/theme";
import { CustonBanner } from "../../template";

const CustomNavbar = () =>{
     
    return(
        <>
            <Navbar className="jau-nav" collapseOnSelect expand="lg">
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                
                <Nav>
                    <Nav.Link href="#ingreso-simulador">Ingreso al simulador</Nav.Link>
                    <Nav.Link eventKey={2} href="#como-usar-simulador">
                        Cómo usar este simulador
                    </Nav.Link>
                    <Nav.Link eventKey={3} href="#preguntas-frecuentes">
                        Pregúntas frecuentes
                    </Nav.Link>
                    <Nav.Link eventKey={4} href="#contacto">
                        Contáctanos
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            <style jsx>
                {`
                    div {
                        width: 100%;
                    }
                    .nav-link .active{
                        color: red
                    }
                    .navbar-dark .navbar-nav .active>.nav-link, .navbar-dark .navbar-nav .nav-link.active, .navbar-dark .navbar-nav .nav-link.show, .navbar-dark .navbar-nav .show>.nav-link {
                        color: #fff;
                        border-bottom: solid;
                    }
                    
                `}
            </style>
        </>
    )
}

export default CustomNavbar;