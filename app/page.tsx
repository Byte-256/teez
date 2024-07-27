import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { SignInButton } from "@clerk/nextjs";

export default function Home() {
	return (
		<section className="bg-black">
			<section
				className="flex flex-col items-center justify-center h-screen bg-cover rotate-3 bg-center text-white"
				style={{
					backgroundImage: "url(./hero1.webp)",
				}}
			>
				<h1 className="text-5xl font-bold mb-4">Wear Your Passion</h1>
				<p className="text-xl mb-8">
					Discover our collection of premium t-shirts designed for comfort and
					style.
				</p>
				<a
					href="#shop"
					className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
				>
					Shop Now
				</a>
			</section>
		</section>
		// <section classNameName="flex flex-col items-center justify-center gap-4 py-8 md:py-10"></section>
	);
}
