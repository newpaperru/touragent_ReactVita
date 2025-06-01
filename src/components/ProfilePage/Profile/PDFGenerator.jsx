import { useEffect, useState } from "react";
import {
    PDFViewer,
    Document,
    Page,
    Text,
    View,
    StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        padding: 30,
        backgroundColor: "#fff",
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: "center",
        color: "#333",
    },
    section: {
        marginBottom: 15,
        padding: 10,
    },
    label: {
        fontSize: 12,
        color: "#666",
        marginBottom: 5,
    },
    value: {
        fontSize: 14,
        fontWeight: "bold",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    column: {
        width: "48%",
    },
    bookingDetails: {
        marginTop: 10,
        padding: 10,
        backgroundColor: "#f9f9f9",
        borderRadius: 5,
    },
    signatureBlock: {
        marginTop: 50,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    signatureText: {
        fontSize: 16,
        fontFamily: "Courier-Oblique",
        marginTop: 10,
    },
});

const TicketPDF = ({ ticket, userData }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <Text style={styles.header}>Travel Ticket Confirmation</Text>

            <View style={styles.section}>
                <Text style={styles.label}>Guest Information</Text>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Full Name:</Text>
                        <Text style={styles.value}>
                            {userData.fullName || "Not specified"}
                        </Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.label}>Email:</Text>
                        <Text style={styles.value}>
                            {userData.email || "Not specified"}
                        </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Phone:</Text>
                        <Text style={styles.value}>
                            {userData.phone || "Not specified"}
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.label}>Booking Details</Text>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Destination:</Text>
                        <Text style={styles.value}>
                            {ticket.country ||
                                ticket.paymentData?.booking?.country ||
                                "N/A"}
                        </Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.label}>Price:</Text>
                        <Text style={styles.value}>{ticket.price}$</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Booking Date:</Text>
                        <Text style={styles.value}>{ticket.date}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.label}>Status:</Text>
                        <Text style={styles.value}>Paid</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Booking period:</Text>
                        <Text style={styles.value}>{ticket.dateRange}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.label}>Guests:</Text>
                        <Text style={styles.value}>{ticket.totalGuests}</Text>
                    </View>
                </View>
            </View>

            {ticket.paymentData?.booking && (
                <View style={styles.section}>
                    <Text style={styles.label}>Accommodation Details</Text>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.label}>Hostel:</Text>
                            <Text style={styles.value}>
                                {ticket.paymentData.booking.hostelTitle}
                            </Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.label}>Room:</Text>
                            <Text style={styles.value}>
                                {ticket.paymentData.booking.roomTitle}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.label}>Breakfast:</Text>
                            <Text style={styles.value}>
                                {ticket.paymentData.booking.breakfastIncluded
                                    ? "Included"
                                    : "Not included"}
                            </Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.label}>
                                Cancellation Policy:
                            </Text>
                            <Text style={styles.value}>
                                {ticket.paymentData.booking.prepaymentPolicy ===
                                "refundable"
                                    ? "Refundable"
                                    : "Non-refundable"}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.label}>Address</Text>
                            <Text style={styles.value}>
                                {ticket.paymentData?.booking?.address ||
                                    "Address not specified"}
                            </Text>
                        </View>
                    </View>
                </View>
            )}

            <View style={styles.section}>
                <Text style={styles.label}>Additional Comments</Text>
                <Text style={styles.value}>
                    {userData.comment || "No text"}
                </Text>
            </View>
            
        </Page>
    </Document>
);

export const PDFGenerator = ({ ticket, userData }) => {
    const [showModal, setShowModal] = useState(false);

    // Блокируем прокрутку при открытом модальном окне
    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [showModal]);

    return (
        <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
            {/* Button to open/close modal */}
            <button
                onClick={() => setShowModal(!showModal)}
                style={{
                    padding: "5px 10px",
                    backgroundColor: "#1CA600",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    cursor: "pointer",
                    color: "#fff",
                }}
            >
                {showModal ? "Hide PDF" : "View PDF"}
            </button>

            {/* Modal overlay */}
            {showModal && (
                <>
                    <div
                        className="modal-overlay"
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0,0,0,0.5)",
                            zIndex: 999,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        onClick={() => setShowModal(false)}
                    >
                        <div
                            style={{
                                background: "#fff",
                                width: "80%",
                                height: "80%",
                                padding: 0,
                                margin: "auto",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                                position: "relative",
                                overflow: "hidden",
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                style={{
                                    position: "absolute",
                                    top: "10px",
                                    right: "10px",
                                    zIndex: 1000,
                                    background: "#ccc",
                                    border: "none",
                                    padding: "5px 10px",
                                    cursor: "pointer",
                                    borderRadius: "4px",
                                }}
                                onClick={() => setShowModal(false)}
                            >
                                X
                            </button>
                            <PDFViewer width="100%" height="100%">
                                <TicketPDF
                                    ticket={ticket}
                                    userData={userData}
                                />
                            </PDFViewer>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
