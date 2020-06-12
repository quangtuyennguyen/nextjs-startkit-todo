import React from 'react';
import Link from 'next/link';

function NotFound() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <div className="error-page text-center">
                        <div className="error-code">
                            <strong>404</strong>
                        </div>
                        <div className="error-message">
                            <h3>Oops... Page Not Found!</h3>
                        </div>
                        <div className="error-body">
                            Try using the button below to go to main page of the site <br />
                            <Link href="/" as="/">
                                <a className="btn btn-primary solid blank">
                                    <i className="fa fa-arrow-circle-left"></i>
                                Back to Home Page
                            </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;