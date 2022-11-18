import styles from '../styles/Home.module.css'

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>fublot.</div>
            <ul className={styles.categoriesList}>
                <li className={styles.categoryItem}><a href='/blockchain'>Blockchain</a></li>
                <li className={styles.categoryItem}><a href='/blockchain'>Technology</a></li>
                <li className={styles.categoryItem}><a href='/blockchain'>Science</a></li>
                <li className={styles.categoryItem}><a href='/blockchain'>Metaverse</a></li>
                <li className={styles.categoryItem}><a href='/blockchain'>Web3</a></li>
                <li className={styles.categoryItem}><a href='/blockchain'>NFTs</a></li>
            </ul>
            <div className={styles.footerContainer}>
                <footer className={styles.footer}>
                </footer>
            </div>
        </div>
    )
}