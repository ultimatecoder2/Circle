import React,{Component} from 'react';
import HappyPeople from '../styles/img/travel_1.jpg'
import Travel1 from '../styles/img/travels2.jpg';
import Travel2 from '../styles/img/travels3.jpg';
import Travel3 from '../styles/img/travels4.jpg';
import Travel4 from '../styles/img/travels6.jpg';
import { AiOutlineMail } from 'react-icons/ai';
import {BsPencilSquare } from 'react-icons/bs';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Container, Row, Col, Image,Button,Form, Jumbotron} from 'react-bootstrap';
import styles from '../styles/css/styles.css';
import Tourism from '../styles/img/tourism.jpg'


class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            message:"",
            errors:{
                email:"",
                message:""
            }
        }
    }
    
    handleInputChange=(event)=>{
        const target = event.target;
        const name = target.name;
        this.setState({
          [name]: event.target.value
        });
    }
    validateForm = (data)=>{
        const {email, message} = data;
        let emailError="",messageError="", error=false;
        if(!email){
            emailError = "Email is required";
            error = true;            
        }
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
        {
            emailError = "Email address is Invalid";
            error= true;
        }
        if(!message.trim())
        {
            messageError="Message is required"
            error= true;
        }
        
        
        this.setState(prevState => ({
            errors:{
                email:emailError,
                message: messageError
            }
        }))
        
        return !error;
    }

    handleSubmit = async(event)=> {
        event.preventDefault();
        const isValid = this.validateForm(this.state);
        if(isValid){
            const {email,message} = this.state;
            console.log(email, message);
            window.alert("Your response has been recorded");
        }
        
    }

    render(){
        return(
        <div>
        {/* Left Image Right Content */}
        <section className = "NewSection">
        <Container>
            <div className="SectionHeading">
                <h2>Circle Tourism</h2>
            </div>
            <div className="section__content">
                <Row>
                    <Col sm={6}>
                        <Image src={Tourism} className="image__styles" fluid/>
                    </Col>
                    <Col sm={6} className="image__section--text">
                        <b>Planning a trip abroad?</b> &nbsp; <b>Worried about the budget?</b><br/>
                        Circle tourism is here for your rescue. We will provide you best possible budgets with luxories facilities.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    </Col>
                </Row>
            </div>
        </Container>
        </section>
        
        {/* About Section */}
        <section className = "NewSection section__alternate">
        <Container>
            <div className="SectionHeading">
                <h2>About</h2>
            </div>
            <div className="section__content">
                <p><b>Circle</b> is a multinational corporation specialized in planning internaional trips. We 
                    have over 150 offices across the globe. We provide the best holiday packages with all the leasuires that a person 
                    needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                 sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

            </div>
        </Container>
        </section>

        {/* Left Content Right Image*/}
        <section className = "NewSection">
        <Container>
            <div className="SectionHeading">
                <h2>Our motive</h2>
            </div>
            <div className="section__content">
                <Row>
                    <Col sm={6} className="image__section--text">
                        We provide you best time of your life. You will get relief from all your stress work and enjoy your trip.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Col>
                    <Col sm={6}>
                        <Image src={HappyPeople} className="image__styles" fluid/>
                    </Col>
                </Row>
            </div>
        </Container>
        </section>
        
        {/* Carasoel */}
        <section className="NewSection section__alternate">
            <Container>
            <div className="SectionHeading">
                <h2>Past Memories</h2>
            </div>
            <div className="section__content">
                <Carousel autoPlay={true} >
                <div>
                    <Image src={Travel1}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <Image src={Travel2}/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <Image src={Travel3}/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <Image src={Travel4}/>
                    <p className="legend">Legend 4</p>
                </div>
                </Carousel>
            </div>
            </Container>
        </section>
        
        {/* Contact Information */}
        <section className = "NewSection">
        <Container>
            <div className="SectionHeading">
                <h2>Contact Us</h2>
            </div>
            <div className="section__content">
            <Jumbotron className="form__content__div">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label><span className="form__icon"><AiOutlineMail/></span>Email address</Form.Label>
                        <input name="email" className="form-control" type="email"  placeholder="Enter email" value = {this.state.email} onChange={this.handleInputChange} />
                        <div className="invalid__feedback">{this.state.errors.email}</div>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label><span className="form__icon"><BsPencilSquare/></span> Message</Form.Label>
                        <textarea name="message" className="form-control" rows={5} onChange={this.handleInputChange} value = {this.state.message} placeholder="Enter Message"/>
                        <div className="invalid__feedback">{this.state.errors.message}</div>
                    </Form.Group>
                    <div className="form__btn">
                        <Button className="btn" type="submit" onClick={this.handleSubmit}>
                            Login
                        </Button>
                    </div>
                </Form>
            </Jumbotron>
            </div>
        </Container>
        </section>
</div>
        );
    }
}
export default Home;