import './auth.styles.scss';
import SignIn from "../../components/signin/sign-in.component";
import SignUpForm from "../../components/signup/sign-up-form.component";

const Auth = () => {
    
    return (
        <div className='auth-container'>
            <SignIn />
            <SignUpForm />
        </div>
    )
}

export default Auth;