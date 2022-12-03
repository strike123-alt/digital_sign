import { useState } from 'react';
import './App.css';
import Home from './Home';
import Signupd from './Signupd';
const Signup = (() => {
    const [home, setHome] = useState(false);
    const onContentChange = () => {
        setHome(true);
    }


    return (
        home ? <Home /> : <Signupd onContentChange={onContentChange} />
    );
});
export default Signup;