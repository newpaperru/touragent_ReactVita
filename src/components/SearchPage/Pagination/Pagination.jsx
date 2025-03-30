import styles from "./Pagination.module.css";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrev = () => onPageChange(currentPage - 1);
    const handleNext = () => onPageChange(currentPage + 1);

    return (
        <div className={styles.pagination}>
            <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className={styles.paginationButton}
            >
                &lt;
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`${styles.paginationButton} ${
                        currentPage === page ? styles.active : ""
                    }`}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={styles.paginationButton}
            >
                &gt;
            </button>
        </div>
    );
};
