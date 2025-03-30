import { RegistrationForm } from "../components/Forms/RegistrationForm/RegistrationForm"


export const PageRegistration = () => {
    return (
        <div style={{display: "flex", width: 100 + "%", height: 100 + "vh", justifyContent: "center", alignItems: "center",}}>
            <RegistrationForm />
        </div>
    )
}