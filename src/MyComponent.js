import React, { useContext } from 'react';
import PropTypes from 'prop-types';

const MyComponent = () => {
    const { t } = useContext(MyContext);
    return <div>{t('Hello World!')}</div>;
};

MyComponent.propTypes = {
    t: PropTypes.func
};

export default MyComponent;
