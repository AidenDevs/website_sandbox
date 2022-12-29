import React from "react";
import { Container, Row, Card } from 'react-bootstrap';

function uniqueId() {
    const dateString = Date.now().toString(36);
    const randomness = Math.random().toString(36).substr(2);
    return dateString + randomness;
  };

class Blogpost extends React.Component {
    constructor(props) {
        super(props)
    }
    
    createPost = (props) => {
        const blogID = uniqueId();
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
                    }}>{this.props.blogTitle}</Card.Title>
                <Card.Text className="pb-4" style={{
                        fontSize: '.75em',
                        color: 'rgb(78, 78, 78)'
                    }}>
                    {this.props.blogText}
                </Card.Text>
                <Card.Text className="pb-4" style={{
                        fontSize: '.75em',
                        color: 'rgb(78, 78, 78)'
                    }}>
                    {this.props.blogSubtext}
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