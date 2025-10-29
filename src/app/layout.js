import Layout from "@/components/Layout";
import "./globals.css";
import 'antd/dist/reset.css';

export const metadata = {
  title: "O’Shea Equipment Company",
  description: "O'Shea Equipment Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Roboto+Slab:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
