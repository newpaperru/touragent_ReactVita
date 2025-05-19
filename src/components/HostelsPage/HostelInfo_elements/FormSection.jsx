import styles from "../HostelInfo.module.css";
import { Link, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useBookingParams } from "../useBookingParams";

export const FormSection = () => {
    const { hostelId } = useParams();
    const { params, updateParams, getQueryString } = useBookingParams();

    return (
        <div className={styles.form_section}>
            <span className={styles.title}>Enter the data</span>
            <div className={styles.wrapper}>
                <div className={styles.date_selection}>
                    <DatePicker
                        selected={params.startDate}
                        onChange={(date) => updateParams({ startDate: date })}
                        selectsStart
                        startDate={params.startDate}
                        endDate={params.endDate}
                        placeholderText="Start date"
                        minDate={new Date()}
                        className={styles.inputs}
                    />
                    <span className={styles.uni}>—</span>
                    <DatePicker
                        selected={params.endDate}
                        onChange={(date) => updateParams({ endDate: date })}
                        selectsEnd
                        startDate={params.startDate}
                        endDate={params.endDate}
                        minDate={params.startDate || new Date()}
                        placeholderText="End date"
                        className={styles.inputs}
                    />
                </div>

                <div className={styles.guests_selection}>
                    <label>
                        Adults:
                        <input
                            type="number"
                            min="1"
                            value={params.adults}
                            onChange={(e) =>
                                updateParams({ adults: parseInt(e.target.value) || 0 })
                            }
                            className={styles.inputs}
                        />
                    </label>
                    <label>
                        Children:
                        <input
                            type="number"
                            min="0"
                            value={params.children}
                            onChange={(e) =>
                                updateParams({ children: parseInt(e.target.value) || 0 })
                            }
                            className={styles.inputs}
                        />
                    </label>
                </div>
            </div>

            <Link
                to={`/hostels/${hostelId}/${hostelId}_rooms?${getQueryString()}`}
                className={styles.hostel_btn}
            >
                Go to choose the hotel room
            </Link>
        </div>
    );
};