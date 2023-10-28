export default function OperatorButton ({ ...props }) {
    return (
        <button
            {...props}
            type="button"
            className="h-7 w-8 font-bold text-white text-sm transition ease-out ring-opacity-40 ring-primary hover:ring-2 bg-primary active:bg-primary-dark rounded-sm shadow"
        />
    );
}
