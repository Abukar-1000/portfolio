import React from "react";
import Face from "./face";
/*
attribute image website
    <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Freepik - Flaticon</a>
*/
function Cube() {
    const bgColor = "#80a3a28e";
    return (
        <>
            <div className="cubeContainer">
                <div className="cube">
                    <Face side = "front" imgSrc = "imgs/github.png" bgColor = {bgColor}/>  
                    <Face side = "back" imgSrc = "imgs/linkedin.png" bgColor = {bgColor}/>
                    <Face side = "right" imgSrc = "imgs/js.png" bgColor = {bgColor}/>
                    <Face side = "left"  imgSrc = "imgs/node.png" bgColor = {bgColor}/>
                    <Face side = "top"  imgSrc = "imgs/python.png" bgColor = {bgColor}/>
                    <Face side = "bottom" imgSrc = "imgs/java.png" bgColor = {bgColor}/>
                </div>
            </div>
            
        </>
    );
}

export default Cube;
