import { signInAuthUserWithEmailPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss';
import '../signup/sign-up-form.styles.scss';
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useState } from "react";


const SignIn = () => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    // const { setCurrentUser } = useContext(UserContext);

    const handleEmailChange = (event) => {
        setLoginEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setLoginPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log("Entered here");
            await signInAuthUserWithEmailPassword(loginEmail, loginPassword);
            // console.log(response);
            // setCurrentUser(response.user);
            setLoginEmail('');
            setLoginPassword('');
        } catch(error) {
            if (error.code === 'auth/invalid-credential') alert("Either email or password is incorrect")
            else console.error("An error occured: ", error);
        }
    }

    const logGoogleUser = async (event) => {
        event.preventDefault();
        await signInWithGooglePopup();
        // console.log(response);
        // setCurrentUser(response.user);
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span className="">Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" onChange={handleEmailChange} name="loginEmail" required value={loginEmail} />
                
                <FormInput label="Password" type="password" onChange={handlePasswordChange} name="loginPassword" required value={loginPassword} />
                <br />
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={logGoogleUser}>Google SignIn</Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;