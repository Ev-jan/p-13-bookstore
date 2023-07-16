"use client"
import { useState } from "react";
import { selectServerError, selectPasswordError, selectEmailError, selectEmail, selectPassword, useAppSelector, useAppDispatch, selectIsEmailValid, selectIsPasswordValid, selectIsAuthenticated } from "../../redux/hooks";
import { login } from "../../redux/features/user/user";
import { resetValidity, clearAllErrors, resetField, setEmail, validateEmail, setPassword, validatePassword, setError } from "../../redux/features/form/formSlice";
import {
  PasswordToggleBtn,
  Wrapper,
  Legend,
  Label,
  FieldSet,
  Input,
  ErrorMsg,
  LogInBtn,
} from "./style";

export default function AuthModal() {
  const email = useAppSelector(selectEmail);
  const password = useAppSelector(selectPassword);
  const isPasswordValid = useAppSelector(selectIsPasswordValid);
  const isEmailValid = useAppSelector(selectIsEmailValid);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const emailError = useAppSelector(selectEmailError);
  const passwordError = useAppSelector(selectPasswordError);
  const serverError = useAppSelector(selectServerError);
  const dispatch = useAppDispatch()
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
    setIsPasswordFocused(true);
  };


  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setEmail(value));
    dispatch(validateEmail())
  };

  const handlePasswordInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    dispatch(setPassword(value));
    dispatch(validatePassword())
  };

  const handleEmailInputBlur = () => {
    setIsEmailFocused(false);
    dispatch(setError({ fieldName: "email", value: "" }));
    !isEmailValid && dispatch(resetField("email"))
  };

  const handlePasswordInputBlur = () => {
    setIsPasswordFocused(false);
    dispatch(setError({ fieldName: "password", value: "" }));
    !isPasswordValid && dispatch(resetField("password"))
  };

  const handleLogin = async () => {
    try {
      setIsLoading(true);

      const response = await fetch("api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
      })

      if (response.ok) {
        const data: { success: boolean, token: string } = await response.json();
        if(data.token === "testToken") {
          dispatch(login({ name: "", email: email, bio: "", image: "" }));
          dispatch(clearAllErrors());
        }
      } else {
        const errorData = await response.json();
        dispatch(setError({fieldName: "server", value: errorData.message}));
      }
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.trim() === "") {
    dispatch(resetValidity("isPasswordValid"))
    }
    if (email.trim() === "") {
      dispatch(resetValidity("isEmailValid"))
    }
    handleLogin()
  };


  return (
    <Wrapper onSubmit={handleFormSubmit}>
      <Legend>Log in</Legend>
      <FieldSet>
        <Label htmlFor="email-input-1">
          Email
          <Input
            id="email-input-1"
            name="email"
            type="email"
            value={email}
            placeholder="e.g. example@mail.com"
            onChange={handleEmailInputChange}
            onBlur={handleEmailInputBlur}
            onFocus={() => setIsEmailFocused(true)}
            autoComplete="off"
            $valid={isEmailValid}
            $error={!isEmailValid && isEmailFocused}
            $default={!isEmailValid && !isPasswordValid}
          />
      <ErrorMsg>{emailError}</ErrorMsg>
        </Label>
        <Label htmlFor="password-input-1">
          Password
          <Input
            id="password-input-1"
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordInputChange}
            onBlur={handlePasswordInputBlur}
            onFocus={() => setIsPasswordFocused(true)}
            $valid={isPasswordValid}
            $error={!isPasswordValid && isPasswordFocused}
            $default={!isPasswordValid && !isEmailValid}

          />
          <PasswordToggleBtn 
            type="button"
            $hide={showPassword}
            onClick={toggleShowPassword}
            disabled={password.trim() === ""}
          />
        {serverError === "" ? (<ErrorMsg>{passwordError}</ErrorMsg>) : (<ErrorMsg>{serverError}</ErrorMsg>)}
        </Label>
      </FieldSet>
      <LogInBtn
        disabled={!isEmailValid || !isPasswordValid || isAuthenticated || isLoading}
      >
        <span>{isLoading ? 'Loading...' : 'Log in'}</span>
      </LogInBtn>
    </Wrapper>
  );
}
