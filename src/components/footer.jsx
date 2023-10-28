export default function Footer ({ children }) {
    return (
        <footer className="my-8 text-center flex justify-center flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-3">
            {children}
        </footer>
    );
}
