import React from 'react';

export default class OperatorItem extends React.Component {
    render () {
        const {
            children,
            onButtonClick,
        } = this.props;

        return (
            <li className="inline">
                <button
                    type="button"
                    className="
                        h-7 w-8
                        font-bold text-white text-center text-sm
                        transition duration-75 ease-out
                        ring-opacity-40 ring-primary hover:ring-2
                        bg-primary active:bg-primary-dark
                        rounded-sm shadow
                    "
                    onClick={onButtonClick}>
                    {children}
                </button>
            </li>
        )
    }
}