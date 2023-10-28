export default function OperatorButtonBlockList ({ children }) {
    return (
        <div className="flex flex-col items-center space-y-1 md:flex-row md:space-x-1 md:space-y-0">
            {children}
        </div>
    );
}
