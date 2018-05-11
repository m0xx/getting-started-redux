import React, {Component} from 'react';

const propTypes = {

}

const defaultProps = {}

class EmployeeForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <input className="form-control mb-1" placeholder="First Name" />
                <input className="form-control mb-1" placeholder="Last Name" />
                <button className="btn btn-primary btn-block">Submit</button>
            </div>
        )
    }
}

EmployeeForm.propTypes = propTypes;
EmployeeForm.defaultProps = defaultProps;

export default EmployeeForm;