
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Container from "./components/Container";
import Card from "./components/Card"

function App() {
  return (
    <>
      <Header />
      <Banner image="home" />
      <Container>
        <h2>Séries</h2>
        <section className="cards">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default App;
