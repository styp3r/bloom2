import styles from '../styles/Home.module.css'
import Hero from './Hero'

export default function MainFeed() {
    return (
        <div className={styles.mainFeed}>
            <Hero />
        </div>
    )
}