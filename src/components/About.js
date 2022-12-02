import React from "react";
import { Container,} from 'react-bootstrap';
import Card_welcome from './Card_welcome';
import Blogpost from './Blogpost';

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className='my-4' style={{
                border: 'solid',
                background: 'linear-gradient(135deg, rgba(38, 139, 255, 0.12), rgba(136, 62, 255, .12))',
                backdropFilter: 'blur(5px)',
                }}>
                    <p>HELLO ABOUT</p>
            </Container>
        );
    }
}

export default About;