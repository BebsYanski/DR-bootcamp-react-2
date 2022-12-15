import styles from './button.module.css'

function Button(props) {

    return <div>
        <button
            onClick={props.onClick}
            className={styles.button}>
            Clicked {props.times}times
        </button>
    </div>
}

export default Button