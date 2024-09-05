import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Watch.module.css";

function Watch(){
    return (
        <>
            <Header />
            <Container> 
                <section className={styles.watch}> 
                    <h1>Assistir</h1>
                    <iframe width="854" height="480" src="https://www.youtube.com/embed/DK3d0Pcc5MI?si=r_r3OUugqjgYogtY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </section>
            </Container>
            <Footer/>

        </>
    );
}

export default Watch;