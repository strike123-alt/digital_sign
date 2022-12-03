import axios from "axios";
import React, { useState } from "react";


const Signupd = (props) => {
    const [name, setName] = useState(" ");
    const [lastname, setLastname] = useState(" ");
    const [mobile, setMobile] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [c_password, setCpassword] = useState(null);
    const [home, setHome] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(name, lastname, mobile, email, password, c_password)
        if (password === c_password && password.length > 0 && c_password.length > 0) {
            setHome(true);
            let formData = new FormData();
            formData.append('firstName', name);
            formData.append('lastName', lastname);
            formData.append('mobile', mobile);
            formData.append('email', email);
            formData.append('password', password);
            const isRunning = async () => {
                const data = await axios({
                    method: "post",
                    url: `${process.env.REACT_APP_BACK_END_URL}/signup`,
                    data: formData,
                    headers: { "Content-Type": "multipart/form-data" }
                })
                return data;
            }
            const data = await isRunning();
            console.log(data);

            props.onContentChange(home);
        }
        else {
            alert('Password and Confirm must be same');
        }
    }
    return (
        < div className="ui grid" >
            <div className="two wide column"></div>
            <div className="twelve wide column">

                <div className="ui centered aligned container">
                    <div className="form-border">
                        <h1 className="ui header" style={{ textAlign: 'center', margin: '10px' }}>Sign Up</h1>
                        <div className=" form-item">
                            <form onSubmit={handleSubmit} className="ui form">
                                <div className="field">
                                    <label>First Name</label>
                                    <input type="text" name="first-name" placeholder="First Name"
                                        onChange={(e) => {
                                            setName(e.target.value)
                                        }} />
                                </div>
                                <div className="field">
                                    <label>Last Name</label>
                                    <input type="text" name="last-name" placeholder="Last Name"
                                        onChange={(e) => {
                                            setLastname(e.target.value)
                                        }}
                                    />
                                </div>
                                <div className="field">
                                    <label>Mobile No:</label>
                                    <input type="tel" name="mobile"
                                        placeholder="111111111"
                                        onChange={(e) => {
                                            setMobile(e.target.value)
                                        }}
                                    />
                                </div>
                                <div className="field">
                                    <label>Email:</label>
                                    <input type="email" name="email"
                                        placeholder="xyz@g.com"
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                        }}
                                    />
                                </div>
                                <div className="field">
                                    <label>Password: </label>
                                    <input type="password" name="password"
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }}
                                    />
                                </div>
                                <div className="field">
                                    <label>Confirm Password: </label>
                                    <input type="password" name="c_password"
                                        onChange={(e) => {
                                            setCpassword(e.target.value)
                                        }}
                                    />
                                </div>
                                <button className="ui button green" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="two wide column">

            </div>

        </div >
    );
};

export default Signupd;