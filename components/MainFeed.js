import styles from '../styles/Home.module.css'
import Hero from './Hero'
import TopPosts from './TopPosts'

export default function MainFeed() {
    return (
        <div className={styles.mainFeed}>
            <Hero />
            <TopPosts />
        </div>
    )
}