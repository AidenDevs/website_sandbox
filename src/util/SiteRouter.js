import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from '../views/Blog';
import About from '../views/About';
import Homepage from '../views/Homepage';

class SiteRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Routes >
                    <Route exact path="/" element={<Homepage />} />
                    <Route exact path="/home" element={<Homepage />} />
                    <Route exact path="/blog" element={<Blog />} />
                </Routes>
            </Router>
        );
    }
}

export default SiteRouter;