import { React, useState, useEffect } from "react";
import axios from "axios";
/*
    meta => view => columns

    stations are in meta.view.columns[fieldName = "name"].cachedContents.top
    apiResponse.data.meta.view.columns[10].cachedContents.top
*/


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

                // create jsx elements to display in order
                trainStations = targetColumn.cachedContents.top.map(entry => {
                    return <li>{entry.item}</li>
                });
                // console.log("train stations");
                // console.log(trainStations);
                // console.log(trainStations.length);

                // update UI state
                setTrainData(trainStations);
                return trainStations;
            } catch (err) {
                console.error(err);
            }
        } 

        makeRequest(URL);
    },[]);
    return (<div>
    <h1>Stations: </h1>
        <ol>
            {trainData}
        </ol>
    </div>);
}

export default Assesment;