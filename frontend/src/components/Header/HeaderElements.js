import {NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const NavLink = styled(Link)`
    text-decoration: none;
    color: black;
    &.active {
        color: rgb(172,172,172);
    }
    &.visited{
        color: black;
    }
`;
/*
export const BarsIcon = styled.div`
    display: block;
    positon: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%,75%);
    font-size: 1.8rem;
    cursor: pointer
    color: #0000
`
export const Bars = styled(FaBars)`
    display: block;
    positon: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%,75%);
    font-size: 1.8rem;
    cursor: pointer;
`
*/