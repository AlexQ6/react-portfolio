import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaLinkedinIn, FaGithub } from "react-icons/fa"

    
function Footer() {

    return(
        <footer className="fixed-bottom mt-5 bg-white">
            <Container fluid={true}>
                <Row className="border-top justify-content-end p-2">
                    <Col className="p-0 d-flex justify-content-end" >
                        <a href="https://github.com/AlexQ6" target="_blank" rel="noopener noreferrer" style={{color: "black"}} className="mr-3"><FaGithub size="23"/></a> 
                        <a href="https://www.linkedin.com/in/alex-qiang/" target="_blank" rel="noopener noreferrer" style={{color: "black"}}><FaLinkedinIn size="23"/></a> 
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;