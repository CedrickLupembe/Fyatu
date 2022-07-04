import styled from "styled-components";


export const Container = styled.section`

width: 82%;
height: auto;
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

// Content
export const Content = styled.div`

    width: 100%;
    height: 90vh;
    padding: 20px;
    position: relative;
    display: flex;

    /* Media mobile */
@media (max-width: 480px){
    height: auto;
    padding: 5px;
    flex-direction: column;
  }
//   Media Tablette
@media (min-width: 481px) and (max-width: 768px){
    height: auto;
    padding: 15px 5px;
    flex-direction: column;
}

`


// left content
export const LeftBlock = styled.div`

    width: 65%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;

        /* Media mobile */
@media (max-width: 480px){
    width: 100%;
    
    .Botton{
        margin-top: -5px;
    }
  }
//   Media Tablette
@media (min-width: 481px) and (max-width: 768px){
    width: 100%;
}

`

export const View = styled.div`

    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    padding: 5px 10px;


    .Index{
        background-color: #3742fa;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

    }

    .Second{
        background-color: #fff;

        &:hover{
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }

        li{
            color: black;
        }

        .Paraph{
            color: #a4b0be;
        }
    }

    div{
        display: flex;
        align-items: center;
        border-radius: 10px;
        width: 45%;
        height: 100%;
        position: relative;
        padding: 10px 12px;
        cursor: pointer;
        transition: all .4s ease-in-out;

        span{
            width: 20%;
            height: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            font-size: 18px;
            color: #3742fa;
        }

        .Icon{
            background-color: #fff;
        }

        .Icon2{
            background-color: #f1f2f6;
        }

        .btnIcon{
            color: #fff;
        }
        .btnIcon2{
            color: #3742fa;
        }

        div{
            width: 60%;
            height: 90%;
            display: flex;
            justify-content: space-between;

            div{
                
                ul{
                    list-style: none;
                    padding: 0;

                    li{
                        font-size: 11px;
                        color: #fff;
                    }

                    .Title{
                        font-size: 15px;
                        font-weight: 500;
                    }
                }
                

            }
        }
    }

/* Media mobile */
@media (max-width: 480px){
    width: 100%;
    height: auto;
    padding: 5px 10px;
    flex-direction: column;


    div{
        display: flex;
        align-items: center;
        border-radius: 10px;
        width: 100%;
        height: auto;
        position: relative;
        padding: 7px 12px;
        cursor: pointer;
        transition: all .4s ease-in-out;
        margin-top: 10px;

        span{
            width: 20%;
            height: 65px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            font-size: 18px;
            color: #3742fa;
        }

        div{
            width: 60%;
            height: 90%;
            display: flex;
            justify-content: space-between;

            div{
                
                ul{
                    list-style: none;
                    padding: 0;
                    margin-top: -20px;

                    li{
                        font-size: 11px;
                        color: #fff;
                    }

                    .Title{
                        font-size: 17px;
                        font-weight: 500;
                    }
                }
                

            }
        }
    }

  }
//   Media Tablette
@media (min-width: 481px) and (max-width: 768px){
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    padding: 5px 10px;
}

`

export const Chart = styled.div`

    width: 93%;
    height: 400px;
    background-color: #fff;
    position: relative;
    padding: 15px 28px;
    border-radius: 10px;
    margin-left: 23px;
    margin-top: 8px;


    div{
        width: 100%;
        height: 20%;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span{
            font-size: 18px;
            font-weight: 500;
        }

        select{
            border: none;
            font-family: poppins;
            outline: none;
            color: #3742fa;
            font-weight: 500;
            margin-top: -15px;
        }
    }

    span{
        width: 100%;
        height: 80%;
        overflow: hidden;
        position: relative;

        img{
            width: 100%;
            height: 80%;
            object-fit: cover;
        }
    }


/* Media mobile */
@media (max-width: 480px){
    width: 96%;
    height: 400px;
    background-color: #fff;
    position: relative;
    padding: 10px 20px;
    border-radius: 10px;
    margin-left: 5px;
    margin-top: 8px;

    div{
        width: 100%;
        height: 20%;

        select{
            
            margin-top: -30px;
        }
    }
}
//   Media Tablette
@media (min-width: 481px) and (max-width: 768px){
    
}

`

// Right content
export const RightBlock = styled.div`

    width: 35%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 4px 0;

/* Media mobile */
@media (max-width: 480px){
    width: 100%;
    padding: 10px;
}
//   Media Tablette
@media (min-width: 481px) and (max-width: 768px){
    width: 100%;
    padding: 23px;
}

`
export const Div1 = styled.div`
    width: 100%;
    height: 55%;
    position: relative;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;

    div{
        width: 100%;
        height: 15%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        background-color: white;

        span{
            font-size: 15px;
            font-weight: 500;
        }

        a{
            text-decoration: none;
            padding: 10px;
            border-radius: 50%;
            font-size: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all .4s ease-in-out;

            &:hover{
                background-color: #f1f2f6;
                color: #3742fa;
            }
        }
    }

    h1{
        margin-left: 20px;
        margin-top: 5px;
        font-size: 25px;
    }

    span{
        width: 100%;
        height: auto;
        position: relative;
        overflow: hidden;
        margin-top: 10px;

        img{
            width: 100%;
            height: auto;
        }
    }

/* Media mobile */
@media (max-width: 480px){
    width: 100%;
    height: 55%;
    position: relative;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    padding: 10px 0;

    

}
//   Media Tablette
@media (min-width: 481px) and (max-width: 768px){
    width: 100%;
    height: 55%;
    position: relative;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    padding: 20px 0;
}

`

// Block users bottom right block
export const Div2 = styled.div`

    width: 100%;
    height: 42%;
    position: relative;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;

    
    /* Media mobile */
@media (max-width: 480px){
    margin-top: 10px;
}
//   Media Tablette
@media (min-width: 481px) and (max-width: 768px){
    margin-top: 10px;
    padding: 15px 0;
}

`

export const Head = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;

    p{
        font-size: 15px;
        font-weight: 600;
    }

    a{
        text-decoration: none;
        font-size: 13px;
        color: #3742fa;
        font-weight: 500;
    }
`

export const Users = styled.div`

    width: 100%;
    height: 80%;
    padding: 0 20px;
    position: relative;

`
export const User = styled.div`

    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;

    span{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        overflow: hidden;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    ul{
        list-style: none;
        padding: 0;
        line-height: 20px;
        margin-left: 15px;

        li{
            font-size: 12px;
            color: #a4b0be;
        }

        .Name{
            font-size: 14px;
            font-weight: 600;
            color: #000;
        }
    }

    p{
        margin-left: 80px;
        font-size: 12px;
        color: #a4b0be;
    }


//   Media Tablette
@media (min-width: 481px) and (max-width: 768px){
    p{
        margin-left: 350px;
    }
}


`