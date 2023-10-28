export default function HeaderTitleText ({ children }) {
    return (
        <h1 className="flex-auto text-3xl font-bold text-primary text-center sm:text-left">
            {children}
        </h1>
    );
}
