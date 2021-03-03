import React from 'react';
import { connect } from 'react-redux';

import FormStyle from './form.css';

import Input from '../input/input';
import { clearInput, setInput, setError } from '../../redux/actions';

function Op ({ children }) {
    return <span className={FormStyle.operator}>{children}</span>;
}

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
                    placeholder="Digite a fórmula. Por exemplo (A ∧ B) → (C ∨ D)."
                    autoComplete="off"
                    error={this.props.error}
                    defaultValue={this.props.input}
                    onChange={event => this.onChange(event)} />

                <div className={FormStyle.description}>
                    <span className={FormStyle.operation}>
                        Negação: <Op>&#xAC;</Op><Op>&#x7E;</Op><Op>&#x21;</Op>
                    </span>

                    <span className={FormStyle.operation}>
                        Conjunção: <Op>&#x2227;</Op><Op>&#x26;</Op><Op>&#x2A;</Op>
                    </span>

                    <span className={FormStyle.operation}>
                        Disjunção: <Op>&#x2228;</Op><Op>&#x7C;</Op><Op>&#x2B;</Op>
                    </span>

                    <span className={FormStyle.operation}>
                        Implicação: <Op>&#x2192;</Op><Op>&#x21D2;</Op><Op>-&#x3E;</Op>
                    </span>

                    <span className={FormStyle.operation}>
                        Equivalência: <Op>&#x2194;</Op><Op>&#x21d4;</Op><Op>&#x3C;-&#x3E;</Op>
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
