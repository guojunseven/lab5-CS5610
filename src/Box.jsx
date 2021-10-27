import React from 'react';
import './box.css';

class Box extends React.Component {
    render() {
        return <div className= {`box ${this.props.className}`}>{this.props.children}</div>;
    }
}
export default Box;
    