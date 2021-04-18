import React, { useContext } from "react";
import { Marginer } from "../Marginer";
import { AccountContext } from "./accountContext";
import { MutedLink, Input, FormContainer, BoxContainer, SubmitButton, BoldLink } from "./common";
export function LoginForm (props) {

    const { switchToSignup } = useContext(AccountContext);

    return  <BoxContainer>
    <Marginer direction = "vertical" margin = {10}/>
    <FormContainer>
        <Input type = "email" placeholder = "Email" />
        <Input type = "password" placeholder = "Password" />
    </FormContainer>
    <Marginer direction = "vertical" margin = {5} />
    <MutedLink href = "#">Forgot your password?</MutedLink>
    <Marginer direction = "vertical" margin = "1.6em" />
    <SubmitButton type = "submit">Sign in</SubmitButton>
    <Marginer direction = "vertical" margin = "1.1em" />
    <MutedLink href = "#">New here? <BoldLink href = "#" onClick = {switchToSignup}>Sign up</BoldLink> </MutedLink>

</BoxContainer> 
}