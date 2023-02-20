import {React, useState} from "react";

function Editor(props) {
    const {
        content,
        title,
        isLink
    } = props;

    let startTimg;
    (isLink)? startTimg = "link.png" :  startTimg = "copy.png";

    let [copyImg,setCopyImg] = useState(startTimg);

    return (<div className="EditorContainer">
        <button
            type="button"
            onClick={e => {
                if (isLink){
                    window.location.assign("https://jsfiddle.net/AbukarDjama/xbc6je7h/2/");
                    setCopyImg("check.png");
                    setTimeout(() => {
                        setCopyImg("link.png");
                    },500)
                } else {
                    navigator.clipboard.writeText(content);
                    setCopyImg("check.png");
                    setTimeout(() => {
                        setCopyImg("copy.png");
                    },500)
                }
            }}
        >
            {
                (isLink)? 
                <a href="https://jsfiddle.net/AbukarDjama/xbc6je7h/2/"><p className="copyContainerContent">{title}</p></a> :
                <p className="copyContainerContent">{title}</p>
            }
            <img className = "clipboardImg" src={"./imgs/" + copyImg}/>
        </button>
    </div>);
}

export default Editor;