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
    "2021 – IUPUI Highest Honors",
    "2020 – MTI A-Honor Roll"
];

export {
    projects,
    personalDiscription,
    courseWork,
    programmingLanguages,
    awards,
    gpaCardInfo
};