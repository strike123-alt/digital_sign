import React, { useState } from 'react';
import axios from 'axios';


const FileVerify = () => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const handleChange = (event) => {
        setFile(event.target.files[0]);
        console.log(event.target.value);
        console.log(event.target.files[0]);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = 'http://localhost:5000/fileVerify';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', fileName);


        console.log(file);

        const isRunning = async () => {
            const { data } = await axios.post(url, formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            return data;
        }
        console.log(await isRunning())

    }
    return (


        <div className="cards">

            <div className="home-page">
                <div className="ui grid">
                </div>
                <div className="three wide column"></div>
                <div className="ten wide column">
                    <h1 className="ui header">File Verify</h1>
                    <form className="ui form" onSubmit={handleSubmit}>
                        <div className="field">
                            <label>File-Name</label>
                            <input type="text" name="file-name" placeholder="abc" onChange={(event) => {
                                setFileName(event.target.value)
                            }} />
                        </div>
                        <div className="field">
                            <label>File-Upload</label>
                            <input type="file" name="file" onChange={handleChange} />
                        </div>
                        <button className="ui button blue" type="submit" >Upload</button>
                    </form>
                </div>
                <div className="three wide column"></div>
            </div>
        </div>


    );
};

export default FileVerify