import InputForm from './components/InputForm';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <InputForm />
      </body>
    </html>
  );
}
