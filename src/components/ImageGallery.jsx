import ImageGalleryItem from "./ImageGalleryItem"

const ImageGallery = ({ images }) => {
    return (
        <ul>
            {images.map(({ id, webformatURL, tags }) =>
            (  < ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                tags={tags}
            />
            ))}        
                
        </ul>
    )
}

export default ImageGallery;

