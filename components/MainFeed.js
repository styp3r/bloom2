import styles from '../styles/Home.module.css'

export default function MainFeed() {
    return (
        <div className={styles.mainFeed}>
            <div className={styles.hero}>
                <div className={styles.heroCarousel}>
                    <div className={styles.heroSub1}>
                    </div>
                    <div className={styles.heroSub2}>
                        <div className={styles.heroSub2Container1}>
                            <div className={styles.heroBlock1}></div>
                            <div className={styles.heroBlock2}></div>
                        </div>
                        <div className={styles.heroSub2Container2}>
                            <div className={styles.heroBlock3}></div>
                            <div className={styles.heroBlock4}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.trendingContainer}></div>
            </div>
        </div>
    )
}