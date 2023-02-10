import { Card,Text,Container,Grid, Row,Col,Button } from "@nextui-org/react"
import Footer from "../Footer";

const RegisterLayout = ({ children }:any) => {
    console.log({ children })
    return (
      <>
            {children[0]}
            <Container css={{
                marginTop:'52px',marginBottom:'52px',
                '@xs': {
                    marginTop:'52px',marginBottom:'52px'
                  },
                  '@sm': {
                    marginTop:'144px',marginBottom:'144px'
                  },
                  '@md': {
                    marginTop:'144px',marginBottom:'144px'
                  },
                  '@lg': {
                    marginTop:'144px',marginBottom:'144px'
                  },
                  p:0
            }}>
            
            <Grid.Container justify="center" alignItems="center">
                <Grid xs={12} md={12} css={{padding:'$0'}}>
                </Grid>
                <Grid xs={12} md={12} css={{padding:'$0'}}>
                {children[1]}
                </Grid>
            </Grid.Container>
            </Container>
            <Footer />
      </>
    )
}

export default RegisterLayout;
