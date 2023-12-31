import operators from '~/library/operators';

import OperatorButtonBlocks from '~/components/operator-button-blocks';
import OperatorButtonBlock from '~/components/operator-button-block';
import OperatorButtonBlockLabel from '~/components/operator-button-block-label';
import OperatorButtonBlockList from '~/components/operator-button-block-list';
import OperatorButton from '~/components/operator-button';

export default function OperatorButtonBlocksContainer ({
    locale,
    onRegularOperatorButtonClick,
    onWrappingOperatorButtonClick,
}) {
    const blocks = [
        {
            label: locale.parenthesesOperatorButtonBlockLabel,
            wrapping: operators.wrapping.parenthesis,
        },
        {
            label: locale.negationOperatorButtonBlockLabel,
            regular: operators.regular.negation,
        },
        {
            label: locale.conjunctionOperatorButtonBlockLabel,
            regular: operators.regular.conjunction,
        },
        {
            label: locale.disjunctionOperatorButtonBlockLabel,
            regular: operators.regular.disjunction,
        },
        {
            label: locale.conditionalOperatorButtonBlockLabel,
            regular: operators.regular.conditional,
        },
        {
            label: locale.biconditionalOperatorButtonBlockLabel,
            regular: operators.regular.biconditional,
        },
    ];

    return (
        <OperatorButtonBlocks>
            {blocks.map((block) => (
                <OperatorButtonBlock key={block.label}>
                    <OperatorButtonBlockLabel>
                        {block.label}
                    </OperatorButtonBlockLabel>

                    <OperatorButtonBlockList>
                        {block.wrapping
                            ? (
                                [
                                    block.wrapping.opening,
                                    block.wrapping.closing,
                                ].map((operator) => (
                                    <OperatorButton
                                        key={operator}
                                        data-default-operator={operator}
                                        data-opening-operator={block.wrapping.opening}
                                        data-closing-operator={block.wrapping.closing}
                                        onClick={onWrappingOperatorButtonClick}
                                    >
                                        {operator}
                                    </OperatorButton>
                                ))
                            )
                            : (
                                block.regular.map((operator) => (
                                    <OperatorButton
                                        key={operator}
                                        data-operator={operator}
                                        onClick={onRegularOperatorButtonClick}
                                    >
                                        {operator}
                                    </OperatorButton>
                                ))
                            )}
                    </OperatorButtonBlockList>
                </OperatorButtonBlock>
            ))}
        </OperatorButtonBlocks>
    );
}
