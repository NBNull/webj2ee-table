import React from 'react';
import PropTypes from 'prop-types';

export default class Column extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        dataKey: PropTypes.string,
        head: PropTypes.string,
        width: PropTypes.number
    };

    render() {
        return null;
    }
}
