import computerImage from './assets/images/computer-img.png';
import geologyImage from './assets/images/geology-img.png';
import engineeringImage from './assets/images/engineering-img.png';
import grigoryImage from './assets/images/person9-img.png';
import danielleImage from './assets/images/person8-img.png';

export const courses = [
    {
        title: "CSCI 100: Python",
        instructorName: "J. Winston",
        numStudents: 13,
        image: computerImage
    },
    {
        title: "GEO 205: MINERAL SURVEYING",
        instructorName: "H. Smith",
        numStudents: 62,
        image: geologyImage
    },
    {
        title: "ENG 250: FUEL SYSTEMS",
        instructorName: "T. Payne",
        numStudents: 45,
        image: engineeringImage
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