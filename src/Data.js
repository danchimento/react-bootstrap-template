import computerImage from './assets/images/computer-img.png';
import geologyImage from './assets/images/geology-img.png';
import engineeringImage from './assets/images/engineering-img.png';
import chemistryImage from './assets/images/chemistry-img.png';
import grigoryImage from './assets/images/person9-img.png';
import danielleImage from './assets/images/person8-img.png';

import lectureIcon from './assets/icons/lecture-icon.svg';
import postIcon from './assets/icons/post-icon.svg';
import submissionIcon from './assets/icons/submission-icon.svg';
import assessmentIcon from './assets/icons/assessment-icon.svg';

export const courses = [
    {
        code: "CSCI 100",
        title: "Python",
        instructorName: "J. Winston",
        numStudents: 13,
        image: computerImage
    },
    {
        code: "GEO 205",
        title: "MINERAL SURVEYING",
        instructorName: "H. Smith",
        numStudents: 62,
        image: geologyImage
    },
    {
        code: "ENG 250",
        title: "FUEL SYSTEMS",
        instructorName: "T. Payne",
        numStudents: 45,
        image: engineeringImage,
        schedule: [
            {
                title: "WEEK 1",
                assignments: [
                    {
                        title: "Rough Draft of Rotor Scematics",
                        icon: submissionIcon,
                        color: '#FFC261',
                        status: "Completed"
                    },
                    {
                        title: "Practive Assessment for Section 1-3 Test",
                        icon: assessmentIcon,
                        color: '#BE435F',
                        status: "COMPLETE BY MARCH 15"
                    },
                    {
                        title: "Decreasing Particulate Emmissions in Diesel Systems",
                        icon: lectureIcon,
                        color: '#437FBE',
                        status: "In Progress",
                        by: "Dr. Theodore Payne",
                        date: "April 2, 2021",
                        assets: [
                            {
                                title: "Simmens et al. 2017",
                                description: "This is a paper discussing the Volkswagen Emissions Scandel in the context of regulatory gaps in European countries. I recommend you read this as you pick a research topic."
                            }
                        ]
                    }
                ]
            },
            {
                title: "WEEK 2",
                assignments: [
                    {
                        title: "Explainer on Effects of Heat and Frictino on Breaking",
                        icon: postIcon,
                        color: '#D7D5D2',
                        status: "Published Article"
                    },
                    {
                        title: "Comparisons Between Current Rotor Systems",
                        icon: lectureIcon,
                        color: '#437FBE',
                        status: "Recording Available"
                    }
                ]
            },
            {
                title: "WEEK 3",
                assignments: [
                    {
                        title: "Final Draft of Rotor Schematics",
                        icon: submissionIcon,
                        color: '#FFC261',
                        status: "Completed"
                    }
                ]
            }
        ]
    },
    {
        code: "CHM 100",
        title: "INTRO TO CHEMISTRY",
        instructorName: "T. Payne",
        numStudents: 45,
        image: chemistryImage
    }
]

export const recentMessages = [
    {
        senderFirstName: "Grigory",
        message: "Yeah I didn't get that one either.",
        sentTimeAgo: "12 Minutes",
        senderProfileImage: grigoryImage
    },
    {
        senderFirstName: "Danielle",
        message: "I just uploaded that graph to the drive. Let me know if you got it.",
        sentTimeAgo: "45 Minutes",
        senderProfileImage: danielleImage
    }
]

export const projectActivity = [
    {
        title: "European History Final Presentation",
        remainingTime: "3 days",
        progressPercent: 85
    },
    {
        title: "Picture of Dorian Grey Analysis",
        remainingTime: "7 days",
        progressPercent: 55
    },
    {
        title: "Guatemala Annual Growth Report",
        remainingTime: "10 days",
        progressPercent: 45
    }
]

export const todos = [
    { "title" : "Email Prof. Garrison" },
    { "title" : "Ping team for tuesday" },
    { "title" : "Read 10 min for chem" },
    { "title" : "Check in with Jennifer" },
    { "title" : "Submit essay early" },
    { "title" : "Find research topic" },
    { "title" : "Coffee Club Memo" },
    { "title" : "Confirm Friday Meet" },
]

