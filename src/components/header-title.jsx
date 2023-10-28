export default function HeaderTitle ({ children }) {
    return (
        <div className="flex items-center flex-col gap-y-2 sm:flex-row sm:items-center">
            {children}
        </div>
    );
}
