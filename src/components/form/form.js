import React from 'react';
import { connect } from 'react-redux';

import Input from '../input/input';
import { clearInput, setInput, setError } from '../../redux/actions';

class Form extends React.Component {
    onChange (event) {
        const input = event.target.value;

        if (input) {
            this.props.dispatch(setInput(input));
        }
        else {
            this.props.dispatch(clearInput());
            this.props.dispatch(setError(false));
        }
    }

    render () {
        return (
            <Input
                required
                name="input"
                type="text"
                placeholder="Digite a fórmula. Por exemplo, (A ∧ B) → (C ∨ D)."
                autoComplete="off"
                error={this.props.error}
                defaultValue={this.props.input}
                onChange={(event) => this.onChange(event)} />
        );
    }
}

function mapStateToProps (state) {
    return {
        input: state.input,
        error: state.error,
    };
}

export default connect(mapStateToProps)(Form);
