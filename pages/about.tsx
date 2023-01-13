import { Catalog } from '../components/catalog/catalog'
import { SimpleLayout } from '../components/layout/simpleLayout'
import { Container } from "@nextui-org/react"

export default function About() {

    return (
        <>
            <main>
                <SimpleLayout>
                <Container lg>
                    <h1>About</h1>
                </Container>
                </SimpleLayout>
            </main>
        </>
    )
  }