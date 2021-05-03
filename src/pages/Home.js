import React, {useState} from 'react';
import Header from '../components/Header';
import ShortlyApp from '../components/ShortlyApp/ShortlyApp';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Header isOpen={isOpen} toggle={toggle}/>
            <ShortlyApp />
        </>
    )
}

export default Home;
