import Head from 'next/head';
import Layout from "../components/Layout";
import HeroSection from '../components/HeroSection';


export default function Home() {
  return (
    <Layout>
      <Head>
      <title>Headless WP/Nextjs</title>
      </Head>
<HeroSection />

    </Layout>
  )
}
