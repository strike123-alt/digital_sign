import axios from "axios";
const FileDisplay = () => {
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
    const email = getCookie('email');
    let formData = new FormData();
    formData.append('email', email);
    console.log(email);
    const isRunning = () => {
        axios({
            method: "post",
            url: "http://localhost:5000/fileDisplay",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }

        }).then((resp) => {
            return resp;
        })

    };

    let data = isRunning();
    console.log(data);
    const displayData = data.map((info, index) => {
        return (
            <tr key={index}>
                <td>{info.email}</td>
                <td>{info.file_name}</td>
            </tr>
        );
    });


    return (
        <div>
            <table className="ui celled padded table" >
                <thead>
                    <tr>

                        <th>Email</th>
                        <th>Document-Name</th>
                    </tr>
                </thead>
                <tbody>


                    {displayData}

                </tbody>
            </table>

        </div>
    )

};

export default FileDisplay;