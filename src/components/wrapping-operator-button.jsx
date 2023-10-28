import OperatorButton from '~/components/operator-button';

export default function WrappingOperatorButton ({
    openingOperator,
    closingOperator,
    defaultOperator,
    onClick,
}) {
    return (
        <OperatorButton
            data-opening-operator={openingOperator}
            data-closing-operator={closingOperator}
            data-default-operator={defaultOperator}
            onClick={onClick}>
            {defaultOperator}
        </OperatorButton>
    );
}
