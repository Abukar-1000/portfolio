import { React, useState, useEffect } from "react";
import axios from "axios";
import Editor from "./editor";
import {_,sqlSolution1,sqlSolution2,pythonSolution,jsSolution} from "../info"

import './Assesment.css';

function Assesment() {

    const URL = "https://data.cityofnewyork.us/api/views/kk4q-3rt2/rows.json";
    
    // hooks 
    let [trainData, setTrainData] = useState([]);

    // runs my async func once and updates the UI
    useEffect(() => {
        // function to make request for the train station data
        const makeRequest = async url => {
            try {
                // make request
                const apiResponse = await axios.get(url);
                
                // grab the column with fieldName = "name" | there is an index because .filter returns an array for all solutions
                let targetColumn = apiResponse.data.meta.view.columns.filter(entry => {
                    return entry.fieldName === "name";
                })[0];

                // sort the train stations alphabetically 
                let trainStations = targetColumn.cachedContents.top.sort((trainA,trainB) => {
                    // use the overloaded < | > operators to compare station names
                    if (trainA.item < trainB.item) {
                        return -1;
                    } else if (trainA.item > trainB.item) {
                        return 1;
                    } else {
                        return 0;
                    }
                });

                // grab first 10
                trainStations = trainStations.slice(0,10);

                // create jsx elements to display stations in order
                trainStations = trainStations.map(entry => {
                    return <li className="stationEntry" >{entry.item}</li>
                });

                console.log(trainStations)
                // update UI state to show solution
                setTrainData(trainStations);
                return trainStations;
            } catch (err) {
                console.error(err);
            }
        } 

        makeRequest(URL);
    },[]);
    return (<div className="doubleGridDisplay assesmentContainer">
        <div>
            <div className="listContainer">
                <h1 className="title">Stations: </h1>
                <br className="underline"/>
                <ol>
                    {trainData}
                </ol>
            </div>
        </div>
        <div className="suplimentaryContent flexableGridDisplay">
            {/* <div className="">
                <div className="">
                    
                </div>
            </div> */}
            <Editor content = {sqlSolution1} title = {"Sql Solution 1"}/>
            <Editor content = {sqlSolution2} title = {"Sql Solution 2"}/>
            <Editor content = {pythonSolution} title = {"Python Solution"}/>
            <Editor content = {jsSolution} title = {"React Solution"}/>
        </div>
    </div>);
}

export default Assesment;