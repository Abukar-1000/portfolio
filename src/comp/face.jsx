import React from "react";

function Face(props) {
    let styles= {
        backgroundColor: props.bgColor,
        // backgroundImage: "url('" + props.imgSrc + "')"
    };

    return (
        <>
            <div className={"face " + props.side}>
                {/* <div style = {styles} className="divImg" alt = "logo img"></div> */}
                <img src = {props.imgSrc} style = {styles} className="divImg" alt = "logo img"/>
            </div>
        </>
    );
}

export default Face;