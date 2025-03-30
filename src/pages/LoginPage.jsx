import { LoginForm } from "../components/Forms/LoginForm/LoginForm"

export const PageLogin = () => {
    return (
        <div style={{display: "flex", width: 100 + "%", height: 100 + "vh", justifyContent: "center", alignItems: "center",}}>
            <LoginForm />
        </div>
    )
}