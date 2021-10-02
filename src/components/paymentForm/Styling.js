import { Link } from 'react-router-dom'
import styled from 'styled-components'


// ==========================Payment Form===========================
export const FormContainer = styled.div`
    /* box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2); */
    margin-top: 8rem;
`
export const FormWrapper = styled.div`
    background: ${({ theme }) => (theme.colors.primaryColor)};
    /* margin-left: 6rem; */
    padding: 0 6rem;
`
export const FormTitle = styled.h4`
    text-transform: uppercase;
    padding: 2rem 0;
`
export const Form = styled.form``

export const InputBox = styled.div`
    position: relative;
    `
export const Input = styled.input`
    width: 100%;
    padding: 1.5rem;
    height: 5rem;
    font-size: 16px;
    letter-spacing: 1px;
    color: rgb(10, 10, 10);
    margin-bottom: 10px;
    outline: none;
    border: none;
    background: ${({ theme }) => (theme.colors.white)};

`

export const Label = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    letter-spacing: 1px;
    padding: 1.5rem;
    font-size: 16px;
    color: rgb(12, 12, 12);
    pointer-events: none;
    transition: .5s;
    input:focus ~ &,
    input:valid ~ &{
        top: -13px;
        left: 0;
        color: #03a9f4;
        font-size: 10px;
    }
 
`
export const SelectBox = styled.div``
export const Select = styled.select`
    padding: 1.5rem;
    height: 5rem;
    font-size: 16px;
    letter-spacing: 1px;
    color: rgb(10, 10, 10);
    width: 100%;
    margin-bottom: 10px;
    outline: none;
    border: none;
    background: ${({ theme }) => (theme.colors.white)};
`
export const Option = styled.option`
    background: yellow;
    /* cursor: pointer; */
    /* z-index: 0; */
`
export const Amount = styled.p`
    text-transform: uppercase;
    font-weight: bold;
    padding: 1.5rem;
    height: 5rem;
    font-size: 16px;
    letter-spacing: 1px;
`
export const Btns = styled.div`
    display: flex;

    @media screen and (max-width:425px){
        flex-direction: column;

    }
`
export const ProceedToPayment = styled.input`
    margin: 1rem 2rem 1rem 0;
    padding: 1.5rem;
    font-size: 16px;
    letter-spacing: 1px;
    border-radius: 4px;
    /* width: 100%; */
    color: ${({ theme }) => (theme.colors.white)};
    outline: none;
    border: none;
    background: ${({ theme }) => (theme.colors.green1)};
    
    @media screen and (max-width:425px){
        margin-right: 1rem;
        font-size: 16px;
        padding: 1rem 1.5rem;
        
    }
    `
export const Home = styled(Link)`
    margin: 1rem 2rem 1rem 0;
    text-align: center;
    padding: 1.5rem;
    font-size: 16px;
    letter-spacing: 1px;
    border-radius: 4px;
    /* width: 100%; */
    color: ${({ theme }) => (theme.colors.white)};
    outline: none;
    border: none;
    background: ${({ theme }) => (theme.colors.green1)};
    
    @media screen and (max-width:425px){
        margin-right: 1rem;
        font-size: 16px;
        padding: 1rem 1.5rem;
        
    }
`
