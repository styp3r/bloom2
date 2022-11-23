import styles from '../styles/Home.module.css'

export default function ArticleBox(props){
    return(
        <div id={styles.articleBox}>
            <p>{props.title}</p>
        </div>
    );
}