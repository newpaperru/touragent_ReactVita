import styles from "./PackagesFilter.module.css";
import SearchIcon from "../../../assets/Icons/location.svg?react";
import StarIcon from "../../../assets/Icons/packagesStar.svg?react";

export const PackagesFilter = ({ priceRange, filters, onFilterChange }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onFilterChange({
            ...filters,
            [name]: value,
        });
    };

    return (
        <div className={styles.packages_filter}>
            <span className={styles.subtitle}>Plan Your Trip</span>
            <p className={styles.description}>
                Ex optio sequi et quos praesentium in nostrum labore nam rerum
                iusto aut magni nesciunt? Quo quidem neque iste expedita est
                dolo.
            </p>
            <div className={styles.search_field}>
                <span className={styles.filter_title}>Country</span>
                <div className={styles.search_input}>
                    <SearchIcon className={styles.icon} />
                    <input
                        type="text"
                        name="destination"
                        placeholder="Where to"
                        value={filters.destination}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className={styles.filter_section}>
                <span className={styles.filter_title}>Price</span>
                <div className={styles.price_inputs}>
                    <div className={styles.input_group}>
                        <label>From ($)</label>
                        <input
                            type="number"
                            name="priceFrom"
                            placeholder={priceRange.min}
                            value={filters.priceFrom}
                            onChange={handleChange}
                            min={priceRange.min}
                            max={priceRange.max}
                        />
                    </div>
                    <div className={styles.input_group}>
                        <label>To ($)</label>
                        <input
                            type="number"
                            name="priceTo"
                            placeholder={priceRange.max}
                            value={filters.priceTo}
                            onChange={handleChange}
                            min={priceRange.min}
                            max={priceRange.max}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.filter_section}>
                <span className={styles.filter_title}>Rating</span>
                <div className={styles.input_group}>
                    <label>Up to</label>
                    <div className={styles.rating_input}>
                        <input
                            type="number"
                            name="ratingTo"
                            placeholder="5"
                            value={filters.ratingTo}
                            onChange={handleChange}
                            min="1"
                            max="5"
                            step="0.1"
                        />
                        <StarIcon className={styles.star_icon} />
                    </div>
                </div>
            </div>
        </div>
    );
};
