import React from 'react';
import useTranslation from '../../hooks/useTranslation'


function TodoHeading() {
    const { t } = useTranslation();
    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">{t('headingMain')}</h1>
                    <p className="lead">{t('headingSub')}</p>
                </div>
            </div>
            <style jsx>
                {``}
            </style>
        </>
    );
}

export default TodoHeading;