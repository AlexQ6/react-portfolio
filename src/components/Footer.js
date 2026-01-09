import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaLinkedinIn, FaGithub } from "react-icons/fa"

    
function Footer() {
    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-center p-3">
                    <Col className="p-0 d-flex justify-content-between align-items-center" style={{maxWidth: '1000px', width: '100%'}}>
                        <span className="text-secondary" style={{fontSize: '0.9rem'}}>© 2026 Alex Qiang</span>
                        <div className="d-flex justify-content-end">
                            <a href="https://github.com/AlexQ6" target="_blank" rel="noopener noreferrer" className="mr-4 text-secondary"><FaGithub size="20"/></a> 
                            <a href="https://www.linkedin.com/in/alex-qiang/" target="_blank" rel="noopener noreferrer" className="text-secondary"><FaLinkedinIn size="20"/></a> 
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;