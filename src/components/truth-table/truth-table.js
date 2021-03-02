import React from 'react';
import { connect } from 'react-redux';

import { setError } from '../../redux/actions';
import createTruthTable from '../../lib';

import TruthTableView from './truth-table-view';

class TruthTable extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            matrix: [],
            expressions: [],
        };
    }

    componentDidMount () {
        this.createTruthTable(this.props.input);
    }

    componentDidUpdate (prevProps) {
        if (prevProps.input !== this.props.input) {
            this.createTruthTable(this.props.input);
        }
    }

    createTruthTable (input) {
        if (input) {
            try {
                const { matrix, expressions } = createTruthTable(input);

                this.setState({
                    matrix,
                    expressions,
                });

                this.props.dispatch(setError(false));
            }
            catch (e) {
                this.props.dispatch(setError(true));
            }
        }
        else {
            this.setState({
                matrix: [],
                expressions: [],
            });
        }
    }

    render () {
        return (
            <TruthTableView
                matrix={this.state.matrix}
                expressions={this.state.expressions} />
        );
    }
}

function mapStateToProps (state) {
    return {
        input: state.input,
    };
}

export default connect(mapStateToProps)(TruthTable);
