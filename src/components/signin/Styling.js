import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FormContainer = styled.section`
display: flex;
justify-content: center;
`
export const SignInOut = styled.div`
    background: ${({ theme }) => (theme.colors.primaryColor)};
    width: 80vw;
    display: flex;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
    margin-top: 10rem;
    border-radius: 6px;
    overflow: hidden;

    @media screen and (max-width:768px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`
export const FormWrap1 = styled.div`
    padding: 1rem;
    width: 100%;
    background: ${({ theme }) => (theme.colors.green1)};
    flex: 1;
    `
export const FormWrap2 = styled.div`
    padding: 10px;
    width: 100%;
    background: ${({ theme }) => (theme.colors.white)};
    flex: 2;
    `
export const Logo = styled(Link)`
font-size: 1.2rem;
font-weight: 600;

span{
    
    font-weight: 400;
}
`
export const SmallTextLink = styled(Link)`
    font-size: 1.1rem;
    color: ${({ theme }) => (theme.colors.white)};;
`
export const SmallText = styled.p`
    font-size: 1.1rem;
    color: ${({ theme }) => (theme.colors.white)};;
`

export const FormWrap1FormH2 = styled.h2`
    padding: 5rem 0 3rem 0;
    color: rgb(0, 0, 0);
    text-align: center;
    margin-bottom: 3rem;
    `
export const FormH2 = styled.h2`
    padding-top: 20px;
    color: rgb(0, 0, 0);
    text-align: center;
    margin-bottom: 3rem;
    `

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
    background: ${({ theme }) => (theme.colors.primaryColor)};
  
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
export const Textarea = styled.textarea`
    border: none;
    border-bottom: 1px solid rgb(15, 15, 15);
    outline: none;
    background: transparent;
    width: 100%;
    margin-bottom: 15px;
`

export const BtnSubmit = styled.input`
        border: 1px solid ${({ theme }) => (theme.colors.white)};;
        outline: none;
        color: white;
        font-size: 1.2rem;
        text-transform: uppercase;
        background: ${({ theme }) => (theme.colors.green1)};
        padding: 10px 20px;
        margin-top: 2rem;
        cursor:pointer;
        border-radius: 5px;

    &:hover{
        font-weight: bold
    }
`
export const CheckboxInput = styled.input``
export const CheckboxLabel = styled.label`
font-size: 1.2rem;
padding-left: 1rem;
`
export const CheckboxInputBox = styled.div`
    display: flex;
    align-items: center;
`


export const Box3 = styled.div``



