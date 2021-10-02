import styled from 'styled-components'

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 6rem;
    padding: 2rem 0;
    background-color:${({ theme }) => (theme.colors.primaryColor)};

`
export const SectionTitle = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.6;
    padding-left: 0.5rem;
    transition: opacity 0.3s ease-in-out;

    &:not(:last-child){
        margin-right: 1.5rem;
    }
`
export const Dot = styled.span`
    opacity: 0.6;
    padding: 0.45rem;
    position: relative;
    border: 1px solid ${({ theme }) => (theme.colors.black5)};
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;

    ${SectionTitle.active} &{
        opacity: 1;

        &:before{
            opacity: 1;
        }
    }

    &:before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px solid ${({ theme }) => (theme.colors.black5)};
        background-color: ${({ theme }) => (theme.colors.black5)};
        margin: 1px;
        opacity: 0.6;
    }

    ${SectionTitle}:hover &{
        opacity: 1;

        &:before{
            opacity: 1;
        }
    }
`
export const PrimaryTitle = styled.h1`
    font-size: 1.9rem;
    font-weight: inherit;
    opacity: 0.6;
    padding-left: 0.5rem;
    transition: opacity 0.3s ease-in-out;

    ${SectionTitle.active} &{
        opacity: 1;
    }

    ${SectionTitle}:hover &{
        opacity: 1;
    }
`



