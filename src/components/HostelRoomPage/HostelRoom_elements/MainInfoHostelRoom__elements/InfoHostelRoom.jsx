import styles from "../../HosteRoom.module.css"

export const InfoHostelRoom = ({title, square, beds}) => {
    return (
        <div className={styles.info_hostel_room}>
            <span className={styles.title}>{title}</span>
            <span className={styles.square}>Square: {square}m²</span>
            <span className={styles.beds}>{beds}</span>
        </div>
    )
}