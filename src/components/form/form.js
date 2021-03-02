import React from 'react';
import { connect } from 'react-redux';

import FormStyle from './form.css';

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
            <div className={FormStyle.form}>
                <Input
                    required
                    name="input"
                    type="text"
                    placeholder="Digite a fórmula. Por exemplo, (A ∧ B) → (C ∨ D)."
                    autoComplete="off"
                    error={this.props.error}
                    defaultValue={this.props.input}
                    onChange={event => this.onChange(event)} />

                <div className={FormStyle.description}>
                    <span className={FormStyle.operation}>
                        Negação: <b>&#xAC;</b>, <b>&#x7E;</b>, <b>&#x21;</b>
                    </span>

                    <span className={FormStyle.operation}>
                        Conjunção: <b>&#x2227;</b>, <b>&#x26;</b>, <b>&#x2A;</b>
                    </span>

                    <span className={FormStyle.operation}>
                        Disjunção: <b>&#x2228;</b>, <b>&#x7C;</b>, <b>&#x2B;</b>
                    </span>

                    <span className={FormStyle.operation}>
                        Implicação: <b>&#x2192;</b>, <b>&#x21D2;</b>, <b>-&#x3E;</b>
                    </span>

                    <span className={FormStyle.operation}>
                        Equivalência: <b>&#x2192;</b>, <b>&#x21D2;</b>, <b>&#x3C;-&#x3E;</b>
                    </span>
                </div>
            </div>
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
