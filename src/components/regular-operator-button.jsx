import OperatorButton from '~/components/operator-button';

export default function RegularOperatorButton ({
    operator,
    onClick,
}) {
    return (
        <OperatorButton
            data-operator={operator}
            onClick={onClick}>
            {operator}
        </OperatorButton>
    );
}
