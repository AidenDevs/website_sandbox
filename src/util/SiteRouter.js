import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from '../views/Blog';

class SiteRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Routes >
                    <Route exact path="/" element={<Blog />} />
                    <Route exact path="/home" element={<Blog />} />
                    <Route exact path="/blog" element={<Blog />} />
                </Routes>
            </Router>
        );
    }
}

export default SiteRouter;