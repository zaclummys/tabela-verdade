export default function OperatorButtonBlocks ({ children }) {
    return (
        <div className="flex justify-between space-x-2 snap-x snap-mandatory overflow-y-scroll sm:overflow-y-visible">
            {children}
        </div>
    );
}
