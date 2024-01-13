import operators from '~/library/operators';

import OperatorButtonBlocks from '~/components/operator-button-blocks';
import OperatorButtonBlock from '~/components/operator-button-block';
import OperatorButtonBlockLabel from '~/components/operator-button-block-label';
import OperatorButtonBlockList from '~/components/operator-button-block-list';
import OperatorButton from '~/components/operator-button';

export default function OperatorButtonBlocksContainer ({
    language,
    onRegularOperatorButtonClick,
    onWrappingOperatorButtonClick,
}) {
    const blocks = [
        {
            label: language.parenthesesOperatorButtonBlockLabel,
            wrapping: operators.wrapping.parenthesis,
        },
        {
            label: language.negationOperatorButtonBlockLabel,
            regular: operators.regular.negation,
        },
        {
            label: language.conjunctionOperatorButtonBlockLabel,
            regular: operators.regular.conjunction,
        },
        {
            label: language.disjunctionOperatorButtonBlockLabel,
            regular: operators.regular.disjunction,
        },
        {
            label: language.conditionalOperatorButtonBlockLabel,
            regular: operators.regular.conditional,
        },
        {
            label: language.biconditionalOperatorButtonBlockLabel,
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
