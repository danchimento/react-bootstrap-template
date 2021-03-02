import computerImage from './assets/images/computer-img.png';
import geologyImage from './assets/images/geology-img.png';
import engineeringImage from './assets/images/engineering-img.png';
import chemistryImage from './assets/images/chemistry-img.png';

import jacobImage from './assets/images/person-img.png';
import grigoryImage from './assets/images/person9-img.png';
import danielleImage from './assets/images/person8-img.png';
import person13Image from './assets/images/person13-img.png';
import person6Image from './assets/images/person6-img.png';

import lectureIcon from './assets/icons/lecture-icon.svg';
import postIcon from './assets/icons/post-icon.svg';
import submissionIcon from './assets/icons/submission-icon.svg';
import assessmentIcon from './assets/icons/assessment-icon.svg';
import libraryIcon from './assets/icons/library-icon.svg';
import driveIcon from './assets/icons/drive-icon.svg';
import wikipediaIcon from './assets/icons/wikipedia-icon.svg';
import wolframIcon from './assets/icons/wolfram-icon.svg';


export const courses = [
    {
        code: "CSCI 100",
        title: "Python",
        instructorName: "J. Winston",
        numStudents: 13,
        image: computerImage,
        grade: "A-",
        grades: [
            { 
                name: "Variables and Strings Gist",
                type: "Submission",
                dueBy: "Feb 21, 2021 11:59 pm",
                completed: "Feb 18, 2021 10:30 pm",
                result: 16.8,
                possible: 20.0,
                weight: 3.5
            },
            { 
                name: "Variables Quiz",
                type: "Assessment",
                dueBy: "Feb 28, 2021 11:59 pm",
                completed: "Feb 21, 2021 1:30 pm",
                result: 46.8,
                possible: 50.0,
                weight: 6
            },
            { 
                name: "Glasses Gist",
                type: "Submission",
                dueBy: "Mar 1, 2921 11:59 pm",
                completed: "Mar 2, 2021 6:00 am",
                result: 19.0,
                possible: 20.0,
                weight: 3.5,
                late: true
            }
        ]
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

export const conversations = [
    {
        name: "Jacob Han",
        handle: "@JacobHan",
        image: jacobImage,
        lastMessagePreview: "Duis aute irure dolor in reprehenderit in voluptate velit.",
        lastMessageDate: "12:48 PM",
        status: "Online",
        messages: [
            {
                sender: "@JacobHan",
                message: "Excepteur sint occaecat cupidatat non proident.",
                date: "7:50 PM"
            },
            {
                sender: "@JacobHan",
                message: "Excepteur sint occaecat cupidatat non proident.",
                date: "7:50 PM"
            },
            {
                sender: "@Me",
                message: "Excepteur sint occaecat cupidatat non proident.",
                date: "7:50 PM"
            },
            {
                sender: "@Me",
                message: "Excepteur sint occaecat cupidatat non proident.",
                date: "7:50 PM"
            },
            {
                sender: "@Me",
                message: "Excepteur sint occaecat cupidatat non proident.",
                date: "7:50 PM"
            },
            {
                sender: "@Me",
                date: "7:50 PM",
                file: {
                    type: "PDF",
                    title: "Disasater Relief Analysis for SOC 201",
                    size: "103.4 MB"
                }
            },
            {
                sender: "@JacobHan",
                message: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                date: "7:50 PM"
            },
        ]
    },
    {
        name: "Jacob Han",
        handle: "@JacobHan",
        image: jacobImage,
        lastMessagePreview: "Duis aute irure dolor in reprehenderit in voluptate velit.",
        lastMessageDate: "12:48 PM",
        status: "Online"
    },
    {
        name: "Jacob Han",
        handle: "@JacobHan",
        image: jacobImage,
        attachment: true,
        lastMessagePreview: "Duis aute irure dolor in reprehenderit in voluptate velit.",
        lastMessageDate: "12:48 PM",
        status: "Online"
    },
    {
        name: "Jacob Han",
        handle: "@JacobHan",
        image: jacobImage,
        attachment: true,
        lastMessagePreview: "Duis aute irure dolor in reprehenderit in voluptate velit.",
        lastMessageDate: "12:48 PM",
        status: "Online"
    },
    {
        name: "Jacob Han",
        handle: "@JacobHan",
        image: jacobImage,
        attachment: true,
        lastMessagePreview: "Duis aute irure dolor in reprehenderit in voluptate velit.",
        lastMessageDate: "12:48 PM",
        status: "Online"
    },
    {
        name: "Jacob Han",
        handle: "@JacobHan",
        image: jacobImage,
        attachment: true,
        lastMessagePreview: "Duis aute irure dolor in reprehenderit in voluptate velit.",
        lastMessageDate: "12:48 PM",
        status: "Online"
    },
    {
        name: "Jacob Han",
        handle: "@JacobHan",
        image: jacobImage,
        attachment: true,
        lastMessagePreview: "Duis aute irure dolor in reprehenderit in voluptate velit.",
        lastMessageDate: "12:48 PM",
        status: "Online"
    },
]

export const projects = {
    columns: [ 
        {
            title: "New",
            canAdd: true,
            items: [
                {
                    title: "Calcium Deposits Report",
                    course: "GEO 205",
                    attachments: 13,
                    totalTasks: 5,
                    style: "warning",
                    completedTasks: 0,
                    timeRemainingStatus: "ok",
                    showProgressBar: false,
                    timeRemaining: "14 days",
                    assignees: [
                        {
                            image: person13Image,
                            firstName: "Jason",
                            lastName: "Whitman"
                        },
                        {
                            firstName: "Alex",
                            lastName: "Fox",
                            color: "#FF8161"
                        },
                        {
                            firstName: "Alex",
                            lastName: "Fox"
                        },
                        {
                            firstName: "Alex",
                            lastName: "Fox"
                        },
                        {
                            firstName: "Alex",
                            lastName: "Fox"
                        }
                    ]
                },
                {
                    title: "Engine Subject Presentation",
                    course: "ENG 250",
                    attachments: 2,
                    totalTasks: 8,
                    style: "warning",
                    completedTasks: 0,
                    timeRemainingStatus: "ok",
                    showProgressBar: false,
                    timeRemaining: "10 days",
                    assignees: [
                        {
                            image: person6Image,
                            firstName: "Jason",
                            lastName: "Whitman"
                        },
                        {
                            firstName: "Erin",
                            lastName: "Li",
                            color: "#FFD061"
                        }
                    ]
                }
            ]
        },
        {
            title: "In Progress",
            canAdd: false,
            items: [
                {
                    title: "Calcium Deposits Report",
                    course: "GEO 205",
                    attachments: 13,
                    totalTasks: 5,
                    style: "ok",
                    completedTasks: 4,
                    timeRemainingStatus: "danger",
                    showProgressBar: true,
                    timeRemaining: "1 day",
                    assignees: [
                        {
                            image: person13Image,
                            firstName: "Jason",
                            lastName: "Whitman"
                        },
                        {
                            firstName: "Alex",
                            lastName: "Fox",
                            color: "#FF8161"
                        },
                        {
                            firstName: "Alex",
                            lastName: "Fox"
                        },
                        {
                            firstName: "Alex",
                            lastName: "Fox"
                        },
                        {
                            firstName: "Alex",
                            lastName: "Fox"
                        }
                    ]
                },
                {
                    title: "Engine Subject Presentation",
                    course: "ENG 250",
                    attachments: 2,
                    totalTasks: 5,
                    style: "ok",
                    completedTasks: 2,
                    timeRemainingStatus: "danger",
                    showProgressBar: true,
                    timeRemaining: "2 days",
                    assignees: [
                        {
                            image: person6Image,
                            firstName: "Jason",
                            lastName: "Whitman"
                        },
                        {
                            firstName: "Erin",
                            lastName: "Li",
                            color: "#FFD061"
                        }
                    ]
                }
            ]
        },
        {
            title: "Submitted",
            canAdd: false,
            items: [
                {
                    title: "Calcium Deposits Report",
                    course: "GEO 205",
                    attachments: 13,
                    totalTasks: 5,
                    style: "success",
                    completedTasks: 5,
                    timeRemainingStatus: "danger",
                    showProgressBar: true,
                    timeRemaining: null,
                    assignees: [
                        {
                            image: person13Image,
                            firstName: "Jason",
                            lastName: "Whitman"
                        },
                        {
                            firstName: "Alex",
                            lastName: "Fox",
                            color: "#FF8161"
                        },
                        {
                            firstName: "Alex",
                            lastName: "Fox"
                        },
                        {
                            firstName: "Alex",
                            lastName: "Fox"
                        },
                        {
                            firstName: "Alex",
                            lastName: "Fox"
                        }
                    ]
                },
                {
                    title: "Engine Subject Presentation",
                    course: "ENG 250",
                    attachments: 2,
                    totalTasks: 5,
                    style: "success",
                    completedTasks: 5,
                    timeRemainingStatus: "danger",
                    showProgressBar: true,
                    timeRemaining: null,
                    assignees: [
                        {
                            image: person6Image,
                            firstName: "Jason",
                            lastName: "Whitman"
                        },
                        {
                            firstName: "Erin",
                            lastName: "Li",
                            color: "#FFD061"
                        }
                    ]
                }
            ]
        },
    ]
}

export const apps = [
    {
        title: "My Library",
        icon: libraryIcon
    },
    {
        title: "Google Drive",
        icon: driveIcon
    },
    {
        title: "Wikipedia",
        icon: wikipediaIcon
    },
    {
        title: "Wolfram Alpha",
        icon: wolframIcon
    },
]

export const upcomingEvents = [
    {
        title: "Qualitative Data Survey",
        type: "Assignment",
        color: "#434ABE",
        dueDate: "March 11, 2021",
    },
    {
        title: "MAT 150: Introduction to Calculus",
        type: "Class",
        color: "#43BE6C",
        dueDate: "March 16, 2021",
    },
    {
        title: "Organic Chem Study Session",
        type: "Event",
        color: "#BE4399",
        dueDate: "March 23, 2021",
    }
]