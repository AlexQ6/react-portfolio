import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {

    return(
        <div className="bg-transparent p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10} sm={12}>
                        { props.title && <h1 className="display-3 mb-4 font-weight-bold" style={{lineHeight: '1.1'}}>{props.title}</h1> }
                        { props.subTitle && <h3 className="display-6 font-weight-light mb-4 text-secondary" style={{fontSize: '1.75rem'}}>{props.subTitle}</h3> }
                        { props.text && <h3 className="lead font-weight-normal text-secondary" style={{fontSize: '1.25rem', maxWidth: '600px'}}>{props.text}</h3> }
                    </Col>
                </Row>
            </Container>
        </div>
    );

}


export default Hero;