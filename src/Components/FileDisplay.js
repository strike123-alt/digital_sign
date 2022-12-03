import { useState, useEffect } from 'react';
import axios from "axios";
const FileDisplay = () => {
    const [info, setInfo] = useState([])
    let formData = new FormData();

    const getData = async () => {
        const { data } = await axios({
            method: "post",
            url: `${process.env.REACT_APP_BACK_END_URL}/fileDisplay`,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }

        })

        setInfo(data);
    }

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    useEffect(() => {
        const email = getCookie('email');
        formData.append('email', email);
        getData();
    }, []);


    return (
        <div>
            <table className="ui celled padded table" >
                <thead>
                    <tr>

                        <th>File-ID</th>
                        <th>Document-Name</th>
                    </tr>
                </thead>
                <tbody>


                    {info?.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>{item['file_id'] ?? ""}</td>
                                <td>{item['file_name'] ?? ""}</td>
                            </tr>
                        );
                    })}

                </tbody>
            </table>

        </div>
    )

};

export default FileDisplay;