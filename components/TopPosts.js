import styles from '../styles/Home.module.css'
import GetTopPosts from './GetTopPosts'
import ArticleBox from './ArticleBox';

export default function TopPosts(){

    function displayTopPosts(getContent){
        return <ArticleBox title={getContent.title}/>
    }

    return(
        <div className={styles.topPosts}>
            {GetTopPosts.map(displayTopPosts)}
        </div>
    );
}