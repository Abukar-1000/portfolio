import {React, useState} from "react";

function Editor(props) {
    const {
        content,
        title
    } = props;

    let [copyImg,setCopyImg] = useState("copy.png");
    return (<div className="EditorContainer">
        <button
            type="button"
            onClick={e => {
                navigator.clipboard.writeText(content);
                setCopyImg("check.png");
                setTimeout(() => {
                    setCopyImg("copy.png");
                },500)
            }}
        >
            <p className="copyContainerContent">{title}</p>
            <img className = "clipboardImg" src={"./imgs/" + copyImg}/>
        </button>
    </div>);
}

export default Editor;