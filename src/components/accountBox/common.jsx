import styled from "styled-components";

export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;
export const FormContainer = styled.form`
    width : 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 2.5px rgba(15,15,15,0.19)
`;

export const MutedLink = styled.a`
    font-size: 13px;
    color: rgba(200, 200, 200, 0.8);
    font-weight: 500;
    text-decoration: none;
    margin-top:10px;
`;
export const  BoldLink = styled.a `
    font-size: 12px;
    color: rgba(15, 216, 132, 0.8);
    font-weight: 800;
    text-decoration: none;
`;

export const Input = styled.input`
    width:100%;
    outline: none;
    height: 42px;
    border: 1px solid rgba(200,200,200,0.3);
    padding: 0px 10px;
    border-bottom: 1.4px solid transparent;
    transition: all 100ms ease-in-out;
    font-size: 14px;
    font-weight: 600;
    &::placeholder {
        color: rgba(200,200,200,1);
    }
    &:not(:last-of-type) {
        border-bottom: 1.5px solid rgba(200,200,200,0.4);
    }
    &:focus {
        outline: none;
        border-bottom: 2px solid rgba(15, 216, 132, 0.8);
    }
`;
export const SubmitButton = styled.button`
    width: 100%;
    padding: 11px 30%;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px;
    margin-top: 10px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: rgb(241,196,15);
    background: linear-gradient(
        45deg,
        rgba(241,196,15,1) 20%, 
        rgba(0,212,255,1) 100%
        );
    &::hover {
        filter: brightness(1.03)
    }
`;
