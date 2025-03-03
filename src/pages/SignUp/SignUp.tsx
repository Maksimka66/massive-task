import SignUpForm from "../../components/SignUpForm/SignUpForm";

import styles from "./SignUp.module.scss";

export default function SignUp() {
    return (
        <div className={styles.signUpPage}>
            <SignUpForm />
        </div>
    );
}
