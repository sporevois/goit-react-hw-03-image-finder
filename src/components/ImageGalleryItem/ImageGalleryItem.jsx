import styles from "../ImageGalleryItem/ImageGalleryItem.module.css"

const ImageGalleryItem = ({ webformatURL, tags }) => {
    return (
        <li className={styles.galleryItem}>
          <img className={styles.galleryImage} src={webformatURL} alt={tags}/>
        </li>
    )
}

export default ImageGalleryItem;