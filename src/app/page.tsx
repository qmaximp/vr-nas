import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";
import Wrapper from "@/components/Wrapper/Wrapper";
import Features from "@/components/Features/Features";
import DownloadApp from "@/components/DownloadApp/DownloadApp";


export default function Home() {
	return (
		<main >
			<Wrapper>
				<Header></Header>
				<Hero />
			</Wrapper>
			<Features />
			<Wrapper>
				<DownloadApp />
			</Wrapper>
		</main>
	);
}
