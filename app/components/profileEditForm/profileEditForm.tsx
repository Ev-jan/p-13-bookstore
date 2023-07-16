
import { UserCard, UserForm, FormLabel, Input, ErrorMsg } from "./style";
import { selectEmailError, selectEmail, selectNameError, useAppSelector, useAppDispatch, selectIsEmailValid, selectName, selectIsNameValid } from "../../redux/hooks";
import { setEmail, validateEmail, setName, validateName } from "../../redux/features/form/formSlice";
import { setUserEmail, setUserName } from "../../redux/features/user/user";
import Button from "../button/button";



type ProfileEditFormProps = {
    userImage: React.ReactNode;
    toggleForm: () => void
}


const ProfileEditForm: React.FC<ProfileEditFormProps> = ({ userImage, toggleForm }) => {
    const email = useAppSelector(selectEmail);
    const name = useAppSelector(selectName);
    const isEmailValid = useAppSelector(selectIsEmailValid);
    const isNameValid = useAppSelector(selectIsNameValid)
    const emailError = useAppSelector(selectEmailError);
    const nameError = useAppSelector(selectNameError);
    const dispatch = useAppDispatch();


    const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        dispatch(setEmail(value));
        dispatch(validateEmail())
      };

    const handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        dispatch(setName(value));
        dispatch(validateName())
      };

      const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isEmailValid && isNameValid) {
          dispatch(setUserEmail(email));
          dispatch(setUserName(name));
          toggleForm();
      } else {
        toggleForm();
      }
    };


    return (
        <UserCard>
            {userImage}
            <UserForm onSubmit={handleFormSubmit}>
                <FormLabel htmlFor="userNameInput">YOUR NAME</FormLabel>
                <Input onChange={handleNameInputChange} value={name} id="userNameInput" />
                {<ErrorMsg>{nameError}</ErrorMsg>}
                <FormLabel htmlFor="userEmailInput">YOUR EMAIL</FormLabel>
                <Input onChange={handleEmailInputChange} value={email} id="userEmailInput" />
                {<ErrorMsg>{emailError}</ErrorMsg>}
                <Button type="submit">{"submit"}</Button>
            </UserForm>
        </UserCard>

    )
}

export default ProfileEditForm
