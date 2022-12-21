import React from "react";
import { Container, Row, Col} from 'react-bootstrap';
import Card_welcome from '../components/Card_welcome';
import Blogpost from '../components/Blogpost';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className='my-4'>
                <Row md={7}>
                    <Blogpost
                        blogTitle="Theoretical Title"
                        blogSubtext="Aiden"
                        blogText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    ></Blogpost>
                </Row>
                <Row className='justify-content-center align-items-center'>
                    <Col md={8}>
                        <Card_welcome 
                        totalCards={1}>
                        </Card_welcome>
                    </Col>
                    <Col md={4}>
                        <Card_welcome 
                        totalCards={1}>
                        </Card_welcome>
                    </Col>
                </Row>

                <Row className='justify-content-center align-items-center'>
                    <Col md={4}>
                        <Card_welcome 
                        totalCards={1}>
                        </Card_welcome>
                    </Col>
                    <Col md={8}>
                        <Card_welcome 
                        totalCards={1}>
                        </Card_welcome>
                    </Col>
                </Row>

                
            </Container>
        );
    }
}

export default Homepage;