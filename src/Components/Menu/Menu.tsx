import React from 'react';
import styled from "styled-components";
import {Link} from "../Link";

export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link>
                            {item}
                            {/*<Mask>*/}
                            {/*    <span>*/}
                            {/*    {item}*/}
                            {/*    </span>*/}
                            {/*</Mask>*/}
                            {/*<Mask>*/}
                            {/*    <span>*/}
                            {/*    {item}*/}
                            {/*    </span>*/}
                            {/*</Mask>*/}
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
`
const ListItem = styled.li`
${Link} {
    font-weight: 500;
    line-height: 1.5;
}
`

const Mask = styled.span`
`
