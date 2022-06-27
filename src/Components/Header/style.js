import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
    background: rgb(107, 47, 181);
    border-bottom: 2px solid wheat;
    height: 100px;
    width: 100%;
    position: fixed;
    top: -1rem;
    z-index: 1;

    .header_text{
        margin-left: -1.2rem;
        margin-bottom: 1rem;

        h1{
            font-size: 1.8rem;
            margin: 2rem 0 0 0;
            color: wheat; 
            font-weight: 300;
        }
        h3{
            color: yellow;
            font-weight: 100;
            text-align: right;
            margin: -0.5px -17px;
        }
    }

    .header_buttons{
        margin-right: -2rem;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-evenly;
        height: 100px;
        margin-bottom: 0;
    }

    .header_hamb{
        display: none;
    }

    .bars_container{
        background: none;
        border: none;
    }

    .hamb_bars{
        width: 33px;
        height: 4px;
        margin: 0.5rem;
        border-radius: 5%;
        background: wheat;
    }

    .bars_container:hover{
        background: rgba(242, 223, 17, 0.200);
    }

    .side_menu{
        position: fixed;
        background: rgb(54, 2, 102);
        display: flex;
        flex-direction: column;
        top: 0;
        right: 0;
        height: 100%;
        z-index: 1;
        align-items: center;
        transition: all 0.2s;
        box-shadow: 0 0 10px 3px;
    }

    .close_button{
        position: fixed;
        background: none;
        border: none;
        color: wheat;
        font-size: 2rem;
        font-weight: bold;
        right: -0.3rem;
        top: -0.3rem;
    }

    .side_menu > button {
        height: 50px;
        margin: 1rem 2rem; 
    }

    .side_menu > button:nth-child(2){
        margin-top: 5rem;
    }


    @media screen and (max-width: 500px){
        .header_buttons{
            display: none;
        }

        .header_text{
            position: fixed;
            left: 3rem;
            top: -1.5rem;
        }

        .header_hamb{
            display: flex;
            width: 20px;
            margin: 2rem 0 0.7rem 19rem;
        }
    }
`;

export const StyledButton = styled.button`
    background: none;
    border: none;
    text-transform: uppercase;
    color: wheat;
    font-weight: bold;
    font-size: 0.90rem;
    height: 100%;
    padding: 1.3rem 1rem 0 ;

    &:hover{
        background: rgba(242, 223, 17, 0.200);
    }
`;

export const StyledLi = styled.li`
    list-style: none;
    box-shadow: 0 1px 10px 0.2px black;
    max-width: 80vw;
    margin: 1rem auto;
    width: 600px;
    height: 140px;
    cursor: pointer;
    border-radius: 8px;
    background: rgb(107, 47, 181);
    padding: 0 1rem 0 1rem;

    &:hover{
        background: rgba(242, 223, 17, 0.200);
    }

    &:active{
        box-shadow: none;
    }

    h4{
        font-size: 1.5rem;
        color: yellow;
        margin: 0.5rem;
    }

    p{
        margin-left: 1.2rem;
        color: wheat;
        line-height: 1.2;
        letter-spacing: 1px;
    }
`;