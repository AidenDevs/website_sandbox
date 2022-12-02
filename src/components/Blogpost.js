import React from "react";
import { Container, Row, Card } from 'react-bootstrap';

class Blogpost extends React.Component {
    constructor(props) {
        super(props)
    }

    createPost = () => {
        const blogID = 0;
        const elements = [];

        elements.push(
            <Card key={'bp_' + blogID}
                style={{
                    backgroundColor: 'rgba(255, 255, 255, .45)',
                    backdropFilter: 'blur(5px)',
                    margin: '1rem',
                    minHeight: '300px',
                    zindex: '1',
                }}
                className="p-4 shadow "
            >
                <Card.Title className="" style={{
                        fontSize: '1em',
                        color: 'rgb(78, 78, 78)'
                    }}>Card Title</Card.Title>
                <Card.Text className="pb-4" style={{
                        fontSize: '.75em',
                        color: 'rgb(78, 78, 78)'
                    }}>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card>
        )
        return elements;
    }

    render() {
        return (
            <Container>
                <Row md={8} style={{
                    justifyContent: 'center'
                }}>
                    {this.createPost()}
                </Row>
            </Container>
        );
    }
}
export default Blogpost;