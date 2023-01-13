import Nav from "../nav"
export const SimpleLayout = ({children}:any) =>(
    <>
        <Nav></Nav>
        {children}
    </>
)