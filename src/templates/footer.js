import React,{Component} from 'react';
import styles from '../styles/css/styles.css';
import {Container, Row, Col} from 'react-bootstrap';
class footer extends Component{
    render(){
        return(
        <div>

            <footer className="footerSection">
                <Container>
                <Row>
                    <Col md={4} className="footerColumn">
                    <div className="footerHeading">Our Motto</div>
                    <div className  = "footerContent">Provide best services to our customers</div>
                    </Col>

                    <Col md={4} className="footerColumn">
                        <div className="footerHeading"> Happy customers</div>
                        <div className  = "footerContent">
                            Every year, we get over 1500 new happy customers, who become our permanent clients. 
                        </div>
                    </Col>
                    <Col md={4} className="footerColumn">
                        <div className="footerHeading"> Contact Us</div>
                        <div className  = "footerContent">
                            Email: abc@gmail.com<br/>
                            Contact Number: +91 1234567890<br/>
                        </div>
                    </Col>
                </Row>
                    <br/><br/>
                    <p>This website is made for demo purpose. </p>

                </Container>
                
                
            
            </footer>
        </div>
        );
    }
}
export default footer;