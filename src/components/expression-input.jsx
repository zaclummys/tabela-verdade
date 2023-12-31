import { twMerge } from 'tailwind-merge';

function computeValidityClassNames (validity) {
    if (validity) {
        return 'ring-primary border-gray-300 hover:border-primary focus:border-primary';
    } else {
        return 'ring-red-500 border-red-500 hover:border-red-500 focus:border-red-500';
    }
}

export default function ExpressionInput ({
    validity,
    inputRef,
    ...props
}) {
    const className = twMerge(
        'p-2 w-full border-2 rounded transition ease-out ring-opacity-40 focus:ring-2',
        computeValidityClassNames(validity)
    );

    return (
        <input
            ref={inputRef}
            type="text"
            autoComplete="off"
            className={className}
            {...props}
        />
    );
}
