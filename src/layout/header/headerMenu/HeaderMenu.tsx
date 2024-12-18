import React from 'react';
import styled from "styled-components";
import {Link} from "../../../Components/Link";
import {theme} from "../../../styles/Theme";


export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link>
                            {item}
                        </Link>
                    </ListItem>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        justify-content: center;
        display: flex; 
        gap: 48px;
    }

    @media ${theme.media.tablet} {
        opacity: 0;
    }
`
const ListItem = styled.li`
    ${Link} {
        font-weight: 500;
        line-height: 1.5;
    }
`

