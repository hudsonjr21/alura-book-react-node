import IconesHeader from '../IconesHeader';
import Logo from '../Logo';
import OptionsHeader from '../OptionsHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header `
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OptionsHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header;