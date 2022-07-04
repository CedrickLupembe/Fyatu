import styled from "styled-components";

// Container sidebar
export const Container = styled.section`

    width: 18%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    padding: 20px 20px;
    flex-direction: column;

/* Media mobile */
  @media (max-width: 480px){
      display: none;
  }
//   Media Tablette
@media (min-width: 481px) and (max-width: 768px){
    display: none;
}

`

// Logo 
export const Div1 = styled.div`

    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    div{
        line-height: 18px;
        margin-left: 10px;

        span{
            font-weight: 500;
        }
        p{
            font-size: 12px;
            color: #a4b0be;
        }
    }

`

// Navigation
export const Div2 = styled.div`

    width: 100%;
    height: auto;

    ul{
        list-style: none;
        padding-left: 18px;

        li{
            margin-top: 30px;

            a{
                display: flex;
                align-items: center;
                justify-content: flex-start;
                text-decoration: none;
                font-weight: 500;
                color: #a4b0be;
                font-size: 14px;
                transition: all .4s ease-in-out;

                &:hover{
                    color: #3867d6;
                }

                span{
                    margin-right: 15px;
                    margin-top: 5px;
                }
            }
        }
    }

`

// Banner
export const Div3 = styled.div`

    width: 100%;
    height: 200px;
    background-color: #f1f2f6;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    position: relative;

    span{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;

        img{
            width: 80px;
            height: auto;
            object-fit: cover;
            margin-top: -20px;
            filter: drop-shadow(.75em .75em .9em);
        }
    }

    p{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 15px;
        padding: 10px;
    }

    button{
        border: none;
        background-color: #3742fa;
        color: #fff;
        padding: 7px 60px;
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

`