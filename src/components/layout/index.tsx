import { Navbar, Logo, Container, Menu, MenuItem, Main, Document } from '../styled';

interface ILayout {
    children: React.ReactNode;
}

export const Layout = ({ children }: ILayout) => {
    return <Document>
        <Navbar>
            {/* TODO: wrap here into container */}
            <Logo>h-one</Logo>

            <Menu>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuItem>Link 3</MenuItem>
            </Menu>
        </Navbar>

        <Main>
            {children}
        </Main>
    </Document>
}