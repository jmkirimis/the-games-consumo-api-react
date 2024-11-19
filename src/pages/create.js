import Head from "next/head";
import Container from "@/components/Container";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import CreateGame from "@/components/CreateGame";

export default function Homepage() {
  return (
    <>
      <Head>
        <title>The Games &copy; 2024</title>
        <meta
          name="description"
          content="Consumo em React de uma API de Games"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        <Container>
          <CreateGame />
        </Container>
      </main>
      <Footer />
    </>
  );
}
