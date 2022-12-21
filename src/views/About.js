import React from "react";
import { Container,} from 'react-bootstrap';
import Card_welcome from '../components/Card_welcome';
import Blogpost from '../components/Blogpost';

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch("http://10.0.0.173:5000/users/verify_token", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            token: window.localStorage.getItem("token"),
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      };

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