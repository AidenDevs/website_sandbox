import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './Blog';
import About from './About';
import Home from './Home';

class SiteRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Routes >
                    <Route exact path="/" element={<Blog />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/blog" element={<Blog />} />
                    <Route exact path="/about" element={<About />} />
                </Routes>
            </Router>
        );
    }
}

export default SiteRouter;