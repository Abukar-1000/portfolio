import React from "react";
import { projects, personalDiscription, courseWork, programmingLanguages, awards } from '../info';

import {DoubleCard, GpaCard, NormalCard} from "./cards"

function AbtMe(props)
{
    // const 
    return (
        <div className="centerContent placeCenter">
            <div className="allCards">
                <GpaCard />
                <DoubleCard title1 = "Confident" title2 = "Familiar" confident = {programmingLanguages.confident} familiar = {programmingLanguages.familiar} />
                <NormalCard cardType = "Awards" title = "Awards" content = {awards}/>
                <NormalCard cardType = "UnderGradCoursesCard" title = "Undergraduate Courses" content = {courseWork.undergraduate}/>
                <NormalCard cardType = "PersonalDescriptionCard" title = "A couple Bits About Me" content = {personalDiscription.about}/>
                <NormalCard cardType = "SideCoursesCard" title = "Side Courses" content = {courseWork.sideCourses}/>
            </div>
        </div>
    );
}
export default AbtMe;