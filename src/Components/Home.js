import React, { useState, useEffect } from "react";
import Signin from './Signin';
import Signup from "./Signup";

import FileJunction from "./FileJunction";
const Home = () => {
    const [home, setHome] = useState(true);
    const [signup, setSignup] = useState(false);

    const clickHome = (homeState, signState) => {
        setHome(homeState);
        setSignup(signState);
        whichState();
        console.log('This is Home ');
    };

    const whichState = () => {
        if (home)
            return <Signin clickHome={clickHome} />;
        else if (signup)
            return <Signup />;
        return <FileJunction />;
    };
    useEffect(() => {

    }, [home, signup]);

    return (
        whichState()
    );
}
export default Home;