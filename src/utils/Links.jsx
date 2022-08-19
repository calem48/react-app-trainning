
import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

let links = [
    {
        id: 1,
        name: "stats",
        icon: <IoBarChartSharp />,
        path: "/"
    },
    {
        id: 2,
        name: "all jobs",
        icon: <MdQueryStats />,
        path: "/all-jobs"
    },
    {
        id: 3,
        name: "add job",
        icon: <FaWpforms />,
        path: "/add-job"
    },
    {
        id: 4,
        name: "profile",
        icon: <ImProfile />,
        path: "/profile"
    }
]

export default links