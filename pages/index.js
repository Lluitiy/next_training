import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					Hi I am Pavlo. I am a Full Stack Developer. You can contact
					me on <a href="https://wa.me/380635777602">WhatsApp</a>
				</p>
				<p>
					(This is a sample website - you’ll be building a site like
					this on{" "}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>
					.)
				</p>
			</section>
		</Layout>
	);
}
