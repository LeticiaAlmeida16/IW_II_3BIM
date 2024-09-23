import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card({id}){
    return(
        <section className={styles.card}> 
            <Link to={`/watch/${id}`}>
                <img src={`https://i.ytimg.com/vi/${id}/mqdefault.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBG3kar6sgX0id-vAe-lNe1SwfWfA`} 
                alt="Capa"/>
            </Link>
        </section>
    );
}

export default Card;