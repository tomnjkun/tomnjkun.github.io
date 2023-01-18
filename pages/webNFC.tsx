import { SimpleLayout } from '../components/layout/simpleLayout'
import { Container } from "@nextui-org/react"
import NFCPanel from '../components/NFCPanel'

export default function webNFC() {
  
    return(
        <>
        <SimpleLayout>
            <Container lg>
                <h1>welcome to webNFC</h1>
                <NFCPanel></NFCPanel>
            </Container>
        </SimpleLayout>
        </>
    )
  }