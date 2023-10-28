import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export default function CustomLink ({ className, ...props }) {
    const mergedClassName = twMerge(
        className,
        'py-1 px-2 font-medium text-secondary text-sm rounded transition ease-out hover:bg-secondary hover:bg-opacity-10'
    );

    return (
        <Link
            {...props}
            className={mergedClassName}
        />
    );
}
