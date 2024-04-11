import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";
import Wrapper from "@/components/Wrapper/Wrapper";
import Features from "@/components/Features/Features";
import DownloadApp from "@/components/DownloadApp/DownloadApp";
import RestaurantCatalog from "@/components/Catalog/RestaurantCatalog/RestaurantCatalog";


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
				<RestaurantCatalog />
			</Wrapper>
		</main>
	);
}
