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