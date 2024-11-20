export default function ContactLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div>
        <center className="text-6xl mt-64">This is Contact Page</center>
        {children}
    </div>;
}