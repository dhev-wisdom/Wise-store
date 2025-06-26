import { useState, useContext } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss';
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    // const { setCurrentUser } = useContext(UserContext)

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const {email, password, confirmPassword} = formFields;
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            console.log("Account creation successful");
            alert("Sign up successfully");
            // console.log(user);
            // setCurrentUser(user);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch(error) {
            alert(error);
            console.error("User creation encountered an error: ", error);
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span className="">Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" onChange={handleChange} name="displayName" required value={displayName} />
                
                <FormInput label="Email" type="email" onChange={handleChange} name="email" required value={email} />
                
                <FormInput label="Password" type="password" onChange={handleChange} name="password" required value={password} />
                
                <FormInput label="Confirm Password" type="password" onChange={handleChange} name="confirmPassword" required value={confirmPassword} />
                
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;