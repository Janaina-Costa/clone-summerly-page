"use client"

import { styled } from "styled-components"

export const Container = styled.div`  
   padding-left: 3.75rem;
   padding-right: 3.75rem;
`
export const Navibar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1160px;
    position: relative;
    margin-right:auto;
    margin-left: auto;
    padding-top: 1rem;
`
export const Logo = styled.div` 

`


export const Menu = styled.ul` 
    width: 100%;
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 1rem 0 1rem 0;
    @media (max-width: 990px){
        display: none;
    }

    
`

export const Items = styled.li` 
    
    
    a{
        text-decoration: none;
        color: #fff;
        font-weight: 500;
        transition: color .3s;
        &:hover{
            color: #8325cb;
        }
    }
   
`


