export default function Header ({ children }) {
    return (
        <header className="flex flex-col gap-y-4">
            {children}
        </header>
    );
}
