import React from 'react';
import { connect } from 'react-redux';

import Input from 'src/components/input/input';
import { setCursor, setInput } from 'src/redux/actions';
import Operators from 'src/routes/main/operators/operators';

import FormStyle from './form.css';

class Form extends React.Component {
    onInputChange (event) {
        this.updateInput(event.target.value);
    }

    onInputKeyUp (event) {
        this.updateCursor(
            event.target.selectionStart,
            event.target.selectionEnd,
        );
    }

    onInputMouseUp (event) {
        this.updateCursor(
            event.target.selectionStart,
            event.target.selectionEnd,
        );
    }

    updateInput (input) {
        this.props.dispatch(setInput(input));
    }

    updateCursor (start, end) {
        this.props.dispatch(setCursor({
            start: start,
            end: end,
        }));
    }

    render () {
        return (
            <div className={FormStyle.form}>
                <Input
                    required
                    autoFocus
                    name="input"
                    type="text"
                    autoComplete="off"
                    placeholder="Digite a expressão lógica. Por exemplo (A ∧ B) → (C ∨ D)."
                    error={this.props.error}
                    value={this.props.input}
                    onKeyUp={event => this.onInputKeyUp(event)}
                    onMouseUp={event => this.onInputMouseUp(event)}
                    onChange={event => this.onInputChange(event)} />

                <Operators />
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
