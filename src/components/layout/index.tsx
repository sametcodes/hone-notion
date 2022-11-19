import { Navbar, Logo, Container, Menu, MenuItem, Main, Document } from '../styled';

interface ILayout {
    children: React.ReactNode;
}

export const Layout = ({ children }: ILayout) => {
    return <Document>
        <Navbar>
            <Logo>h-one</Logo>

            <Menu>
                <MenuItem>a</MenuItem>
                <MenuItem>b</MenuItem>
                <MenuItem>c</MenuItem>
            </Menu>
        </Navbar>

        <Main>
            {children}
        </Main>
    </Document>
}