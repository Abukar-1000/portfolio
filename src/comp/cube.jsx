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
                    <Face side = "front" imgSrc = "imgs/rust.svg" bgColor = {bgColor}/>  
                    <Face side = "back" imgSrc = "imgs/cpp.svg" bgColor = {bgColor}/>
                    <Face side = "right" imgSrc = "imgs/javascript.svg" bgColor = {bgColor}/>
                    <Face side = "left"  imgSrc = "imgs/node.svg" bgColor = {bgColor}/>
                    <Face side = "top"  imgSrc = "imgs/python.svg" bgColor = {bgColor}/>
                    <Face side = "bottom" imgSrc = "imgs/java.svg" bgColor = {bgColor}/>
                </div>
            </div>
            
        </>
    );
}

export default Cube;
