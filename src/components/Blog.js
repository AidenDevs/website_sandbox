import React from "react";
import { Container,} from 'react-bootstrap';
import Card_welcome from './Card_welcome';
import Blogpost from './Blogpost';

class Blog extends React.Component {
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
                <Blogpost></Blogpost>
                <Card_welcome totalCards={3}></Card_welcome>
                <Blogpost></Blogpost>
            </Container>
        );
    }
}

export default Blog;