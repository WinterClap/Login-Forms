import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { motion, transform } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";
const BoxContainer = styled.div`
    width: 300px;
    min-height: 650px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
`;
const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`;
const BackDrop = styled(motion.div)`
    width: 160%;
    top: -300px;
    left: -76px;
    height: 550px;
    position: absolute;
    transform: rotate(-10deg);
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    background: rgb(241,196,15);
    background: linear-gradient(
        45deg,
        rgba(241,196,15,1) 20%, 
        rgba(0,212,255,1) 100%
        );
`;
const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const HeaderText = styled.h2`
    font-size: 30px;
    font-weight: 600;
    line-height: 1.2;
    color: #fff;
    margin: 0px 0 0px 0;
    z-index: 3;
    transition: all 100ms ease-in-out;
`;
const SmallText = styled.h5`
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    z-index: 3;
    margin: 10px 0px 0px 0px;
    transition: all 100ms ease-in-out;
`; /* */
// Minuto 22:39

const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const backdropVariants = {
    expanded: {
        width: "333%",
        height: "1150px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    collapsed: {
        width: "160%",
        heigth: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)"
    }
}

const expandingTransition = {
    type: "spring", 
    duration: 2.3,
    stiffness: 30
}
export function AccountBox(props) {
    const [isExpanded, setExpanded] = useState(false)
    const [active, setActive] = useState("signin")
    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout( () => {
            setExpanded(false);

        }, expandingTransition.duration * 1000 -1500);
    };

    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout (() => {
            setActive("signup");
        }, 400);
    }
    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout (() => {
        setActive("signin");
        }, 400);
    }

    const contextValue = { switchToSignup, switchToSignin };


    return(
    <AccountContext.Provider value= {contextValue}>
    <BoxContainer>
        <TopContainer>
            <BackDrop 
            initial = {false} 
            animate = {isExpanded ? "expanded": "collapsed"} 
            variants = {backdropVariants}
            transition = {expandingTransition}
            />
            {active=== "signin" && <HeaderContainer>
                <HeaderText>Welcome</HeaderText>
                <HeaderText>Back</HeaderText>
                <SmallText> Please, login</SmallText>
            </HeaderContainer>}
            {active=== "signup" && <HeaderContainer>
                <HeaderText>Create</HeaderText>
                <HeaderText>an account</HeaderText>
                <SmallText> Please, signup</SmallText>
            </HeaderContainer>}
        </TopContainer>
        <InnerContainer>
            {active === "signin" && <LoginForm />}
            {active === "signup" && <SignupForm />}
        </InnerContainer>
    </BoxContainer>
    </AccountContext.Provider>
    );
}