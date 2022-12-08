import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
                <link rel="shortcut icon" href="/icons/logo.png" type="image/x-icon" />
            </Head>
            <body className='bg-layout-100'>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
