import React from 'react';
import Center from './Center';
import Box from './Box';
import Name from './Name';

class Grid extends React.Component {
    render() {
        return <div id = 'container'>
            <Box className = 'header'><Name/></Box>
            <Box className = 'left'/>
            <Box className = 'content'><Center/></Box>
            <Box className = 'right'/>
            <Box className = 'footer'/>
        </div>;
    }
}
export default Grid