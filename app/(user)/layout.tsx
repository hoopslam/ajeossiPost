import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import '../../styles/globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body className='max-w-5xl mx-auto'>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
