import React from "react";

// props.children -> lets you use children inbetween custom jsx code
function NormalCard(props)
{
    const content = props.content.map(item => {
        return <p>{item}</p>
    });

    return (<div className="CardContainer">
                <div className="cardGates">
                    <div className="leftGate"></div>
                    <div className="rightGate"></div>
                </div>
                <div className="cardContent">
                    <h1 className="cardTitle">{props.title}</h1>
                    <div className="innerContent">
                        {content}   
                    </div>     
                </div>
            </div>)
}

function DoubleCard(props)
{
    const confident = props.confident.map(item => {
        return <p className="languageItem">{item}</p>
    });

    const familiar = props.familiar.map(item => {
        return <p className="languageItem">{item}</p>
    });

    return (<div className="CardContainer doubleWidthGrid">
                <div className="cardGates">
                    <div className="leftGate"></div>
                    <div className="rightGate"></div>
                </div>
                <div className="doubleCardContent">
                <h1 className="cardTitle">{props.title1}</h1>
                <h1 className="cardTitle">{props.title2}</h1>
                    <div className="confidentLanguages">
                        <div className="innerContent">
                            {confident}   
                        </div> 
                    </div>
                    <div className="familiarLanguages">
                            <div className="innerContent">
                                {familiar}   
                            </div> 
                    </div>    
                </div>
            </div>)
}

function GpaCard(props)
{
    return (<div className="CardContainer halfHeightGrid">
                <div className="cardGates">
                    <div className="leftGate"></div>
                    <div className="rightGate"></div>
                </div>
                <div className="cardContent">
                    <h1 className="cardTitle">Education</h1>
                    <div className="innerContent">
                        <p>IUPUI</p>
                        <p>BS In Computer Science</p>
                        <p>May 2025 | Indiananpolis,IN</p>
                        <p className="GPA">GPA: 3.96 / 4.0</p>   
                    </div>     
                </div>
            </div>)
}

export {
    GpaCard,
    NormalCard,
    DoubleCard
}

