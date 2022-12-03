import React, { useState } from 'react';
import axios from 'axios';


const FileUploader = () => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const fileNameChange = (e) => {
        setFileName(e.target.value);
        console.log(e.target.value);
    }
    const handleChange = (event) => {
        setFile(event.target.files[0]);
        console.log(event.target.value);
        console.log(event.target.files[0]);
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        const getCookie = (name) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        }
        const email = getCookie('email');
        const url = 'http://localhost:5000/fileUpload';
        const formData = new FormData();
        formData.append('file', file);
        if (fileName.length === 0)
            formData.append('fileName', file.name);
        else
            formData.append('fileName', fileName);
        formData.append('email', email)

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
                    <h1 className="ui header">File Upload</h1>
                    <form className="ui form" onSubmit={handleSubmit}>
                        <div className="field">
                            <label>File-Name</label>
                            <input type="text" name="file-name" placeholder="abc" onChange={(event) => {
                                fileNameChange(event);
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

export default FileUploader;