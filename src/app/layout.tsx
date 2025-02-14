import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import '../style/globals.scss';

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700"],
	subsets: ['latin'],
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={poppins.className}>

				{children}

			</body>
		</html>
	);
}
