export const metadata = {
  title: 'PORTLIF IMS',
  description: 'Portlif Grupp OÜ CRM + ISO Integrated Management System'
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>{children}</body>
    </html>
  );
}
