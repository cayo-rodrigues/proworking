import styled from "styled-components";

// lembre-se de usar html semântico
export const FooterContainer = styled.footer`
    max-width: 1400px;
    position: relative;
    min-height: 200px;
    margin: 0 auto ;
    width: 98%;
    
    @media (max-width:660px){
        width: 100%;
        border-radius: 0;
        .footer-pages{
            display: none;
        }
    }

    .footer-contato{
        ul{
            list-style: none;
            
        }
    }

    
    li{
        margin: 10px 0;
    }
    a{
        color: white;
    }
    ::after{
        position: absolute;
        top: -20px;
        right: 20%;
        content: '';
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: var(--color-primary);
    }
    ::before{
        content: '';
        position: absolute;
        border-radius: 50%;
        bottom: 30px;
        right: 40%;

        width: 60px;
        height:60px ;
        background-color: var(--color-primary);
        @media (max-width:660px){
            left: 10%;
            bottom: 75px;
            width: 30px;
            height:30px ;
        }
    }

    p{
        margin: 30px 30px 90px   ;
    }

    .footer__box{
        z-index: 0;
        padding: 50px 30px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        background-color: var(--color-aux);
        border-radius: 30px;
        color: white;

        .footer-logo-socialicon{
            width: 100%;
            text-align: center;
            svg{
                margin:0 5px;
                width: 25px;
                height: 25px;
                cursor: pointer;
                :hover{
                    color: #f4f4f4;
                }
            }
        }
        @media (max-width:660px){
            flex-direction: column;
            text-align: center;
            padding: 20px 0;
            border-radius: 0;
            ul{
                margin: 20px;
                list-style: none;
            }

        }
        .footer-button{
            display: flex;
            align-items: center;
            justify-content: center;
            button{
                background-color: var(--color-primary);
            }
        }
        
    }

`;
