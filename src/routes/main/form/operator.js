import React from 'react';
import { connect } from 'react-redux';

import { addCharacter } from '../../redux/actions';

import OperatorStyle from './operator.css';

class Operator extends React.Component {
    onClick () {
        this.props.dispatch(addCharacter(this.props.operator))
    }

    render () {
        return (
            <button type="button"
                className={OperatorStyle.operator}
                onClick={() => this.onClick()}>
                {this.props.operator}
            </button>
        );
    }
}

export default connect()(Operator);
