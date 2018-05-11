import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    value: PropTypes.number,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
}

const defaultProps = {}

class Counter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {value, increment, decrement} = this.props;

         return (
            <div className="mt-4">
                <h1>{ value === undefined ? ';(' : value }</h1>
                <div className="mt-4">
                    <button className="btn btn-outline-primary mr-1" onClick={increment}>Increment +</button>
                    <button className="btn btn-outline-primary" onClick={decrement}>Decrement -</button>
                </div>
            </div>
        )
    }
}

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Counter;