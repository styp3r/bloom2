import styles from '../styles/Home.module.css'

export default function UploadPost() {
    return (
        <div id={styles.uploadPost}>
            <form id={styles.formUpload}>
                <button className={styles.publishBtn}>Publish</button>
                <div className={styles.articleWritingTools}>
                    <button>Bold</button>
                    <button>Italics</button>
                    <button>Underline</button>
                    <button>Bullet</button>
                    <button>Sub-Title</button>
                    <button>Image</button>
                    <button>Video</button>
                    <button>Link</button>
                </div>

                <input placeholder="Title" name="uploadTitleToServer" className={styles.uploadTitle} />
                <textarea placeholder="Write here..." name="uploadPostToServer" className={styles.uploadTextArea}></textarea>
            </form>
        </div>
    )
}