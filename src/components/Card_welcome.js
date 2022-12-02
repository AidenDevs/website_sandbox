import React from "react";
import ReactDOM from 'react-dom/client';
import { Container, Row, Card } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

class Card_welcome extends React.Component {
    constructor(props) {
        super(props)
    }

    createCards = () => {
        const elements = [];
        for (let i = 0; i < this.props.totalCards; i++) {
            elements.push(
                <Card key={'welcomeCard_' + i}
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, .45)',
                        backdropFilter: 'blur(5px)',
                        margin: '1rem',
                        zindex: '1',
                    }}
                    className="p-4 shadow "
                    >
                    <Card.Title className="" style={{
                        fontSize: '1em',
                        color: 'rgb(78, 78, 78)'
                    }}>Card Title</Card.Title>
                    <Card.Text className="cardText pb-4" style={{
                        fontSize: '.75em',
                        color: 'rgb(78, 78, 78)'
                    }}>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card>
            )
        }
        return elements;
    }

    render() {
        return (
            <Container>
                <Row md={4} style={{
                    justifyContent: 'center'
                }}>
                    {this.createCards()}
                </Row>
            </Container>
        );
    }
}
export default Card_welcome;