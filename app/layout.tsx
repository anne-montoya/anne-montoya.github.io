import './global.css'
import Navigation from './navigation'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <title>Anne Montoya | Software Engineer</title>
                <link rel="icon" href="/logo-no-background.svg"/>
                <meta name="google-site-verification" content="bdKxrDaiE_uT8pCC4cJGS8DmLaEluhfXUYbYi6jbMZA" />
            </head>
            <body>
                <Navigation />
                {children}
            </body>
        </html>
    )
}