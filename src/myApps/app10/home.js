import { FaBars } from "react-icons/fa";
import { useGlobalContext } from './context'


const Home = () => {
    const { modalOpen, barOpen } = useGlobalContext()

    return (
        <main>
            <button onClick={() => barOpen()} className='sidebar-toggle'><FaBars /></button>
            <button onClick={() => modalOpen()} className='btn'>show modal</button>
        </main>
    );
}

export default Home;
