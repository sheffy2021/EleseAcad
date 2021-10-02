import React from 'react'
import { BtnSubmit, FormH2, InputBox, Input, Label, SignInOut, CheckboxInput, CheckboxLabel, CheckboxInputBox, FormContainer, FormWrap2, FormWrap1, Logo, SmallText, SmallTextLink, FormWrap1FormH2 } from './Styling'
// import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './Styling'

const SignIn = () => {
    return (
        <>
            <FormContainer>
                <SignInOut>
                    <FormWrap1>
                        <Logo to='/'>ELESE<span>ACAD</span></Logo>
                        <FormWrap1FormH2>Welcome Back!</FormWrap1FormH2>
                        <form method="GET">
                            <InputBox>
                                <Input type="text" name="" required />
                                <Label>Username:</Label>
                            </InputBox>


                            <InputBox>
                                <Input type="text" name="" required />
                                <Label>Password:</Label>
                            </InputBox>
                            <SmallText><SmallTextLink to='forgot-password'>Forgot password?</SmallTextLink></SmallText>

                            <BtnSubmit type="submit" name="" value="Sign in" />
                        </form>
                    </FormWrap1>
                    <FormWrap2>
                        <FormH2>Create Account</FormH2>
                        <form method="GET">
                            <InputBox>
                                <Input type="text" name="" required />
                                <Label>Fisrt Name:</Label>
                            </InputBox>
                            <InputBox>
                                <Input type="text" name="" required />
                                <Label>Last Name:</Label>
                            </InputBox>
                            <InputBox>
                                <Input type="tel" name="" required />
                                <Label>Email:</Label>
                            </InputBox>
                            <InputBox>
                                <Input type="text" name="" required />
                                <Label>Password:</Label>
                            </InputBox>
                            <InputBox>
                                <Input type="text" name="" required />
                                <Label>Confirm Password:</Label>
                            </InputBox>
                            <CheckboxInputBox>
                                <CheckboxInput type='checkbox' />
                                <CheckboxLabel>I accept the <a href='/'>Terms of Use</a> & <a href='/'>Private Policy.</a></CheckboxLabel>
                            </CheckboxInputBox>
                            <BtnSubmit type="submit" name="" value="Sign Up" />
                        </form>
                    </FormWrap2>
                </SignInOut>
            </FormContainer>
        </>
    )
}

export default SignIn
