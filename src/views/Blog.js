import React from "react";
import { Container, } from 'react-bootstrap';
import Blogpost from '../components/Blogpost';

function uniqueId() {
    const dateString = Date.now().toString(36);
    const randomness = Math.random().toString(36).substr(2);
    return dateString + randomness;
};

function fetch_addPost(title, body_text, author) { 
    console.log(title, body_text, author);
    fetch("http://10.0.0.173:5000/blogposts/addpost", {
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
}


class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogpost_data: "",
            title: 'testing',
            body_text: 'asda',
            author: 'aidenthebard'
        };
    }

    componentDidMount() {
        const { title, body_text, author } = this.state;

        fetch_addPost('testing', 'boidy asdasdawdawsdawa', 'aidenthebard');
        // fetch("http://10.0.0.173:5000/blogposts/", {
        //     method: "POST",
        //     crossDomain: true,
        //     headers: {
        //         "Content-Type": "application/json",
        //         Accept: "application/json",
        //         "Access-Control-Allow-Origin": "*",
        //     }
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         if (data.status == "ok") {
        //             console.log(data);
        //         }
        //         else if (data.status == "error") {
        //             alert(data.err)
        //         }
        //     });
    }

    initBlogposts = () => {
        const elements = [];
        const totalBlogposts = 10;

        for (let i = 0; i < totalBlogposts; i++) {
            const blogID = uniqueId();
            elements.push(
                <Blogpost
                    key={'bp_' + blogID}
                    blogTitle="a"
                    blogSubtext="b"
                    blogText="c"
                ></Blogpost>
            )
        }
        return elements;
    }

    render() {
        return (
            <Container className='my-4' style={{

            }}>
                <div className="user-profile">
                    {/* Group 1<h1>{this.state.test.group_2.fruit_1}</h1>
                    Group 1<h1>{this.state.test.group_3.fruit_1}</h1> */}
                </div>
                {this.initBlogposts()}
            </Container>
        );
    }
}

export default Blog;