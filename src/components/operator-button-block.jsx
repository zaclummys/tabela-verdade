export default function OperatorButtonBlock ({ children }) {
    return (
        <div className="flex flex-col items-center space-y-2 xl:flex-row xl:space-y-0 xl:space-x-2 snap-start">
            {children}
        </div>
    );
}


