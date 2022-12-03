import React, { useState } from 'react';
import "./App.css";
import axios from 'axios';
// import image from './images/home_page.jpg';
// import Route from './Route';
// import Signupd from './Signupd';
const Home = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [state, isState] = useState(true);
    const reg = new RegExp('^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$');

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(`User-name: ${username}`);
        console.log(`Password: ${password}`);
        console.log(`is Valid Password: ', ${reg.test(password)}`);
        if (state) {
            document.cookie = `email=${username}`
            let formData = new FormData();
            formData.append('email', username);
            formData.append('password', password);
            const isRunning = async () => {
                const data = await axios({
                    method: "post",
                    url: `${process.env.REACT_APP_BACK_END_URL}/signin`,
                    data: formData,
                    headers: { "Content-Type": "multipart/form-data" }
                })
                return data;
            }
            const data = await isRunning();
            console.log(data.data);
            if (data.data === 'Failed')
                props.clickHome(true, false);
            if (data.data === 'Success')
                props.clickHome(false, false)

        }


        else
            props.clickHome(false, true);
    }
    const onSignup = () => {
        console.log('This Sign up');
        isState(false);
    };

    return (
        < div className="ui grid " >
            <div className="three wide column"> </div>

            <div className="ten wide column">
                <div className="cards">
                    <div className="home-page">
                        <h1 className="ui header" style={{ textAlign: 'center' }}>Sign In</h1>
                        <form onSubmit={handleSubmit} className="ui form">

                            <div className="field">
                                <label>Email: </label>
                                <input type="email" name="u-name" placeholder="User-Name"
                                    onChange={(event) => { setUsername(event.target.value) }}
                                />

                            </div>
                            <div className="field">
                                <label>Password: </label>
                                <input type="password" name="p-name" placeholder="Password"
                                    onChange={(event) => { setPassword(event.target.value); }}
                                />
                                <span></span>
                            </div>

                            <div className="ui grid ">
                                <div className="eight wide column " style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
                                    <button className="ui button green" type="submit">
                                        Submit
                                    </button>
                                </div>

                                <div className="eight wide column " style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>

                                    <button className="ui button blue" type="submit" onClick={() => onSignup()}>
                                        Sign-up

                                    </button>

                                </div>
                            </div>



                        </form>
                        <div className="three wide column"> </div>
                    </div>
                </div>
            </div>
        </div >
    );



};
export default Home; 
