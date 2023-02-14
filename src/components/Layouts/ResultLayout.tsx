import { Card,Text,Container,Grid, Row,Col,Button } from "@nextui-org/react"
import Footer from "../Footer";

const RegisterResult = ({ children }:any) => {
    return (
      <>
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
        }}>
            <Grid.Container justify="center" alignItems="center">
            
                <Card css={{ mw: "590px",bg:'#FFFFFF',borderRadius: 0,boxShadow:'0px 0px 10px #FDF5E2'}} variant="flat">
                    <Card.Body>
                        <Grid xs={12} sm={12} md={12} justify="center">
                            {children[0]}
                        </Grid>

                        <Grid xs={12} sm={12} md={12} justify="center">
                            {children[1]}
                        </Grid>
                        
                        <Grid xs={12} sm={12} md={12} justify='center'>
                            {children[2]}
                        </Grid>
                    </Card.Body>
                </Card>
            </Grid.Container>
        </Container>
        <Footer />
      </>
    )
}

export default RegisterResult;