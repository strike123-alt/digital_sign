import React from 'react';
import Header from './Header';
import Route from './Route';
import FileUploader from './FileUpload';
import FileDisplay from './FileDisplay';
import FileVerify from './FileVerify';
import Signin from './Signin';
// const showFileUploader = () => {
//     if (window.location.pathname === '/dropdown') {
//         return <FileUploader />;
//     }
// }
// const showFileDisplay = () => {
//     if (window.location.pathname === '/translate') {
//         return <FileDisplay />;
//     }
// }
// const showComponent = (route, component) => {
//     return window.location.pathname === route
//         ? component : null;
// };
const FileJunction = () => {

    return (
        <div>
            <Header />
            <Route path="/fileUpload">
                <FileUploader />
            </Route>
            <Route path="/fileList">
                <FileDisplay />
            </Route>
            <Route path="/fileVerify">
                <FileVerify />
            </Route>
            <Route path="/signOut">
                <Signin />
            </Route>
        </div>
    );
};

export default FileJunction;