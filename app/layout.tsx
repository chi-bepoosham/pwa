import "./globals.css";


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fa">
        <body
            dir="rtl"
            className="w-screen h-screen"
        >
        <main className="max-w-screen-md mx-auto bg-primary h-full">
            {children}
        </main>

        </body>
        </html>
    );
}
