import styles from "../Button/Button.module.css"

const Button = ({ onClick }) => {
    return (
        <div className={styles.buttonWrapper}>
            <button className={styles.button} type="button" onClick={onClick}>Load more</button>
        </div>
    )
}
export default Button;