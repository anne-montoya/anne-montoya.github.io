import './global.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <title>Anne Montoya</title>
                <link rel="icon" href="/logo-no-background.svg"/>
            </head>
            <body>{children}</body>
        </html>
    )
}