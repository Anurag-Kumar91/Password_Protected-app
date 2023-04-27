import React from 'react';
import '../App.css';
import LeftBody from './LeftBody';
import CenterBody from './CenterBody';
import RightBody from './RightBody';
import Door from './Door';

const Body=()=>{
    return (
        <div className="container">
            <LeftBody />
            <CenterBody />
            <RightBody />
      </div>
    )
}
export default Body;