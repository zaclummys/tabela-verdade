import React from 'react';
import { connect } from 'react-redux';

import createTruthTable from '../../lib';
import { setError } from '../../redux/actions';

import TruthTableView from './truth-table-view';

class TruthTable extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            matrix: [],
            expressions: [],
        };
    }

    componentDidUpdate (prevProps) {
        if (prevProps.input !== this.props.input) {
            this.createTruthTable(this.props.input);
        }
    }

    createTruthTable (input) {
        if (input) {
            createTruthTable(input)
                .then(table => {
                    this.setState({
                        matrix: table.matrix,
                        expressions: table.expressions,
                    });

                    this.props.dispatch(setError(false));
                })
                .catch(() => {
                    this.props.dispatch(setError(true));
                });
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
