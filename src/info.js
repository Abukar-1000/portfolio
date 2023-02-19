const gpaCardInfo = {
    title: "Education",
    content: [
        "IUPUI",
        "BS In Computer Science",
        "May 2025 | Indiananpolis,IN",
    ],
    gpa: "GPA: 3.97 / 4.0"
}


const projects = [
    {
        key: 0,
        title: "Wifi Bomb",
        duration: "May 2022 - Present Day",
        keyPoints: [
            "Written in C++ this project was meant to disconnect users from my home network",
            "Uses Airodump-ng to listen for connections, and documents users in a SQL database",
            "The data base contains the mac address of devices and associated names with each address",
            "Unrecognized users are automatically disconnected, and existing mac address can be disconnected through a graphical user interface"
        ]
    },
    {
        key: 1,
        title: "Tic-Tac-Toe AI",
        duration: "December 2021",
        keyPoints: [
            "Written in Python, this program utilizes heuristics to play Tic-Tac-Toe against a human player",
            "Minimizes the opponent’s odds of winning while maximizes the computers odds of winning"
        ]
    },
    {
        key: 2,
        title: "Attendance Bot",
        duration: "August 2020 – May 2021",
        keyPoints: [
            "Written in Python during senior year of High School",
            "Created to join my classes for me, during the dark ages of the 2020 pandemic"
        ]
    }
];

const personalDiscription = {
    about: [
        "Willing to learn and adapt to my environment",
        "Eager to take on challenges and make an impact"
    ]
};

const courseWork = {
    undergraduate: [
        "Computing 1",
        "Computing 2",
        "Database Management",
        "Discrete Computational Structures",
        "Data Structures & Algorithms",
        "Computer Architecture"
    ],
    sideCourses: [
        "Full Stack Web Development",
        "Python Programming",
        "Ethical Hacking"
    ]
};

const programmingLanguages = {
    confident: [
        "Python",
        "C++",
        "JavaScript",
        "SQL", "Node.js",
        "HTML", "CSS", "JQuery", "Bootstrap"
    ],
    familiar: [
        "Java",
        "Rust", "React.js"," Mongodb"
    ]
} 

const awards = [
    "2022 – IUPUI Highest Honors",
    "2022 – IUPUI Highest Honors",
    "2021 – IUPUI Highest Honors",
    "2020 – MTI A-Honor Roll"
];

// code snippets

const sqlSolution1 = `
SELECT
	STUDENT.first_name,
    STUDENT.last_name
FROM STUDENT 
INNER JOIN 
ENROLLMENT
ON
	STUDENT.student_id = ENROLLMENT.student_id
INNER JOIN
	COURSE
ON
	ENROLLMENT.course_id = COURSE.course_id
WHERE
	COURSE.name = 'CS101'
	AND COURSE.year = 2011
ORDER BY
	STUDENT.last_name;
`;

const sqlSolution2 = `
SELECT
	STUDENT.first_name,
    STUDENT.last_name
FROM STUDENT
INNER JOIN GRADE
ON
	STUDENT.student_id = GRADE.student_id
INNER JOIN EXAM
ON
	GRADE.exam_id = EXAM.exam_id
INNER JOIN COURSE
ON
	EXAM.course_id = COURSE.course_Id
WHERE
	EXAM.number = 1
	AND COURSE.name = 'CS202'
	AND COURSE.year = 2012
	AND GRADE.score = (
	SELECT
		MAX(score)
FROM
	GRADE
);
`;

const pythonSolution = `

def main() -> None:
    values = {}

    def grabInput() -> None:
        running = True

        while (running):
            userInput = input("")
            userInput = userInput.strip()
            
            # user enter a value of at least lenght 1
            if (len(userInput)):
                try:
                    userInput = int(userInput)
                    values[userInput] += 1
                except (ValueError):
                    print("Input must be an integer")
                except (KeyError):
                    values[userInput] = 1
            else:
                # user leaves program
                running = False

    def formatOutput(key: int) -> str:
        result = ""
        if (values[key] == 1):
            result = str(key) + " appears once"
        elif (values[key] == 2):
            result = str(key) + " appears twice"
        else:
            result = str(key) + " appears " + str(values[key]) + " times"
        
        return result

    grabInput()
    keys = list(values.keys())
    for key in keys:
        occurance = formatOutput(key)
        print(occurance)

if __name__ == "__main__":
    main()
`;

const jsSolution = `
import { React, useState, useEffect } from "react";
import axios from "axios";
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

                // create jsx elements to display stations in order
                trainStations = targetColumn.cachedContents.top.map(entry => {
                    return <li className="stationEntry" >{entry.item}</li>
                });

                // update UI state to show solution
                setTrainData(trainStations);
                return trainStations;
            } catch (err) {
                console.error(err);
            }
        } 

        makeRequest(URL);
    },[]);
    return (<div className="placeCenter assesmentContainer">
        <div className="listContainer">
            <h1 className="title">Stations: </h1>
            <br className="underline"/>
            <ol>
                {trainData}
            </ol>
        </div>
    </div>);
}

export default Assesment;
`;

export {
    projects,
    personalDiscription,
    courseWork,
    programmingLanguages,
    awards,
    gpaCardInfo,
    sqlSolution1,
    sqlSolution2,
    pythonSolution,
    jsSolution
};


