import React from "react";
import { Button, Container, } from 'react-bootstrap';
import Blogpost from '../components/Blogpost';


function uniqueId() {
    const dateString = Date.now().toString(36);
    const randomness = Math.random().toString(36).substr(2);
    return dateString + randomness;
};

function fetch_addPost(title, body_text, author) {
    console.log(title, body_text, author);
    fetch("https://54.146.196.213:5000/blogposts/addpost", {
        method: "POST",
        crossDomain: true,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            title,
            body_text,
            author
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.status == "ok") {
                console.log("Added!");
            }
            else if (data.status == "error") {
                alert(data.err)
            }
        });

    //REMOVE
    console.log("Test Post Added")
}

function testPrint() {
    console.log("here")
}

class Blog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            blogpost_data: [],
        };
    }

    componentDidMount() {
        fetch("https://54.146.196.213:5000/blogposts/initposts", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(
                //HERE WE CAN ADD SOME STUFF
            ),
        })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ blogpost_data: data.data });
                console.log(data);
            });

        //REMOVE
        console.log("Recieved Posts")
    }

    printData() {
        // for(this.state.blogpost_data)
        console.log(this.state.blogpost_data[0].body_text)
    }

    drawBlogposts() {
        const elements = [];

        this.state.blogpost_data.forEach(element => {
            const blogID = uniqueId();
            elements.push(
                <Blogpost
                    key={'bp_' + blogID}
                    blogTitle={element.title}
                    blogSubtext={element.author}
                    blogText={element.body_text}
                ></Blogpost>
            )
        });
        console.log('here')
        return elements;
    }

    render() {
        return (
            <Container className='my-4' style={{

            }}>
                <div className="blog-content">
                    { this.drawBlogposts() }
                </div>
            </Container>
        );
    }
}

export default Blog; 