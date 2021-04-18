import React, { useContext } from "react";
import { Marginer } from "../Marginer";
import { AccountContext } from "./accountContext";
import { MutedLink, Input, FormContainer, BoxContainer, SubmitButton, BoldLink } from "./common";
export function SignupForm (props) {

    const { switchToSignin } = useContext(AccountContext)

    return  <BoxContainer>
    <Marginer direction = "vertical" margin = {10}/>
    <FormContainer>
        <Input type = "text" placeholder = "Full Name" />
        <Input type = "email" placeholder = "Email" />
        <Input type = "email" placeholder = "Confirm Email" />
        <Input type = "password" placeholder = "Password" />
        <Input type = "password" placeholder = "Confirm Password" />
    </FormContainer>
    <Marginer direction = "vertical" margin = {5} />
    <Marginer direction = "vertical" margin = "1.6em" />
    <SubmitButton type = "submit">Sign up</SubmitButton>
    <Marginer direction = "vertical" margin = "1.1em" />
    <MutedLink href = "#">Already have an account? <BoldLink href = "#" onClick = {switchToSignin}>Sign in</BoldLink> </MutedLink>
</BoxContainer> 
}