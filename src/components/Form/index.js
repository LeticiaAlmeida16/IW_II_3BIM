import { useState } from "react";
import {categories} from "../Category";
import styles from "./Form.module.css";

function Form (){
    
    const [url, setUrl] = useState('')
    const [category, setCategory] = useState('')
    const [videos, setVideos] = useState([])
    const [errors, setErrors] = useState('')

    function valideUrl (url){
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/
        
        if(!regex.test(url) || url.length < 43){
            setErrors('ERRO: URL inválida!')
            return false
        } else {
            return url.substring(32, 43)
        }
    }
    
    function onSave(e){
        e.preventDefault()
        console.log(url, category)
        

        // valida category
        if(!category || category ==='-'){
            setErrors("ERRO: Escolha uma categoria!")
            return
        } else {
            setErrors('')
        }
        
        
        // validar url e category
        const urlVideo =valideUrl(url)
        if(urlVideo && category){
        // guardar a url e a category
            const newVideo = {url, category}
            setVideos([...videos, newVideo])
            console.log(videos)
            localStorage.setItem('videos', JSON.stringify([...videos, newVideo]))
            // limpa form após inserir video
            setUrl('')
            setCategory('')
        } else {
            setErrors('ERRO: URL inválida')
        }
    }
    
    return(
        <section className={styles.container}>
            <h2>Cadastro de vídeos</h2>
            <form onSubmit={onSave}>
                <div>
                    <label>URL do vídeo</label>
                    <input
                        type="text"
                        placeholder="Digite da URL do vídeo"
                        required="required"
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                        minLength="43"
                        maxLength="43"
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <select
                        required="required"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    >
                        <option value="-">Selecione uma categoria</option>
                        { categories.map(item =>{
                            return(
                                <option value={item}>{item}</option>
                            );
                        })}
                    </select>
                    
                </div>
                <div>
                    <button>Cadastrar</button>
                    <div>{errors}</div>
                </div>
            </form>
        </section>
    );
}

export default Form;