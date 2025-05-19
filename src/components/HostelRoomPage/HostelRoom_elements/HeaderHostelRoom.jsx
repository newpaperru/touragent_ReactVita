import styles from "../HosteRoom.module.css"

export const HeaderHostelRoom = ({ header_data, isFixed }) => {
    return (
        <div className={`${styles.header} ${
            isFixed ? `${styles.fixed} ${styles.visible}` : ''
        }`}>
            <span className={styles.name_hostel}>{header_data}</span>
            <div className={styles.info_user_chose}>
                <span className={styles.user_date}>7-22 Мая</span>
                <span className={styles.user_count}>Гостей: 3</span>
            </div>
        </div>
    )
}
