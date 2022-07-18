
import {
    FaHome,
    FaUserFriends,
    FaFolderOpen,
    FaCalendarAlt,
    FaFileAlt,
    FaFacebook,
    FaTwitter,
    FaLinkedin

} from "react-icons/fa";


export let navLinks = [
    {
        id: 1,
        url: "/",
        text: "Home",
        icon: <FaHome />
    },
    {
        id: 2,
        url: "/Team",
        text: "Team",
        icon: <FaUserFriends />
    },
    {
        id: 3,
        url: "/Projects",
        text: "Projects",
        icon: <FaFolderOpen />
    },
    {
        id: 4,
        url: "/Calendar",
        text: "Calendar",
        icon: <FaCalendarAlt />
    },
    {
        id: 5,
        url: "/",
        text: "Documents",
        icon: <FaFileAlt />
    }

]

export let socialLinks = [
    {
        id: 1,
        url: 'https://www.facbook.com',
        icon: <FaFacebook />
    },
    {
        id: 2,
        url: 'https://www.twitter.com',
        icon: <FaTwitter />
    }
    ,
    {
        id: 3,
        url: 'https://www.linkedin.com',
        icon: <FaLinkedin />
    }
]