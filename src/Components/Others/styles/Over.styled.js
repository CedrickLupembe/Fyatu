import styled from "styled-components";

export const Container = styled.section`

width: 82%;
height: 100vh;
background-color: #f1f2f6;
position: relative;
overflow: auto;

/* Media mobile */
@media (max-width: 480px){
    width: 100%;
    height: auto;
    padding: 0;
  }
//   Media Tablette
@media (min-width: 481px) and (max-width: 768px){
    width: 100%;
    height: auto;
    padding: 0;
}

`
// Navbar 
export const Navbar = styled.nav`

    width: 100%;
    height: 10vh;
    background-color: #fff;
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;


/* Reseach bar */

    span{
        width: auto;
        height: auto;
        display: flex;
        align-items: center;
        padding: 0 10px;
        background-color: #f1f2f6;
        border-radius: 10px;
        
        input{
            padding-left: 8px;
            padding-top: 12px;
            padding-bottom: 12px;
            padding-right: 20px;
            width: 300px;
            border: none;
            outline: none;
            background-color: transparent;

            ::placeholder{
                font-size: 13px;
                font-family: 'Poppins', sans-serif;
                color: #a4b0be;
            }
        }
    }

    div{
        width: auto;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;

        ul{
            list-style: none;
            display: flex;
            align-items: center;

            li{
                margin-left: 15px;

                a{
                    text-decoration: none;
                    padding: 10px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #f1f2f6;
                    transition: all .4s ease-in-out;

                    &:hover{
                        color: #1e90ff;
                    }
                }
            }
        }

        span{
            width: auto;
            height: auto;
            background-color: transparent;
            cursor: pointer;

            img{
                width: 40px;
                height: 40px;
                object-fit: cover;
                border-radius: 50%;
            }
        }
    }

/* Media mobile */
@media (max-width: 480px){

    padding: 0 20px;

    span{
        padding: 0 5px;
        border-radius: 5px;
        
        input{
            padding-left: 5px;
            padding-top: 8px;
            padding-bottom: 8px;
            padding-right: 5px;
            width: 100px;
            font-size: 13px;

            ::placeholder{
                font-size: 9px;
            }
        }
    }

    div{

        ul{

            li{
                margin-left: 10px;

                a{
                    text-decoration: none;
                    padding: 8px;
                }
            }
        }

        span{

            img{
                width: 35px;
                height: 35px;
            }
        }
    }
  }
//   Media Tablette
@media (min-width: 481px) and (max-width: 768px){
    padding: 0 20px;

span{
    padding: 0 5px;
    border-radius: 5px;
    
    input{
        padding-left: 5px;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-right: 5px;
        width: 100px;
        font-size: 13px;

        ::placeholder{
            font-size: 9px;
        }
    }
}

div{

    ul{

        li{
            margin-left: 10px;

            a{
                text-decoration: none;
                padding: 8px;
            }
        }
    }

    span{

        img{
            width: 35px;
            height: 35px;
        }
    }
}
}
    

`

// Maintainance block
export const Maint = styled.div`

    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span{

        img{
            width: 350px;
            height: 100%;
            object-fit: cover;
        }
    }

    h1{
        font-size: 2em;
    }
    p{
        font-size: 15px;
        color: #747d8c;
    }
    button{
        border: none;
        background-color: #3742fa;
        color: #fff;
        padding: 10px 60px;
        border-radius: 20px;
        font-size: 15px;
        cursor: pointer;
        margin-top: 10px;
        transition: all .4s ease-in-out;
        font-family: inherit;

        &:hover{
            background-color: rgba(56, 103, 214, 0.8);
        }
    }


/* Media mobile */
@media (max-width: 480px){

     span{

        img{
            width: 300px;
            height: 100%;
            object-fit: cover;
        }
    }

    h1{
        font-size: 1.5em;
    }
    p{
        font-size: 13px;
        color: #747d8c;
        padding: 0 60px;
        text-align: center;
    }
    button{
        border: none;
        background-color: #3742fa;
        color: #fff;
        padding: 7px 50px;
        border-radius: 20px;
        font-size: 13px;
        cursor: pointer;
        margin-top: 10px;
        transition: all .4s ease-in-out;
        font-family: inherit;

        &:hover{
            background-color: rgba(56, 103, 214, 0.8);
        }
    }
}

`