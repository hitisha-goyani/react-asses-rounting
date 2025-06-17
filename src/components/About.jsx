

import { Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';

const About = () => {
  return (
     <Container>
      <Row>
        <Col xs={100}>
        <h2 className='text-center my-5'>About Us</h2>
        <div className='text-center'> 
            <Image  fluid src="https://st2.depositphotos.com/3591429/10464/i/450/depositphotos_104648666-stock-photo-group-of-people-brainstorming-on.jpg"  />
        </div>
        
        </Col>
      
      </Row>
    </Container>
  )
}

export default About