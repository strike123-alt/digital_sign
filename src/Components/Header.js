import { findByLabelText } from '@testing-library/react';
import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/fileUpload" className="item">
                File Upload
            </Link>
            <Link href="/fileList" className="item">
                File List
            </Link>
            <Link href="/fileVerify" className="item">
                File Valid
            </Link>

            <Link href="/signOut" className="item" style={{ display: 'flex', alignItem: 'flex-end', justifyContent: 'flex-end' }}>
                Log-out
            </Link>
        </div>
    );
};
export default Header;