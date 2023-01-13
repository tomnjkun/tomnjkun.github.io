import { SimpleLayout } from '../components/layout/simpleLayout'
import { Container } from "@nextui-org/react"
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Notfound() {

    const router  = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        },3000)
    },[])

    return (
        <>
            <main>
                <SimpleLayout>
                <Container lg>
                    <h1>Not Found</h1>
                    <h2>That page cannot be found</h2>
                    <p> go back to <Link href='/'>Here</Link></p>
                </Container>
                </SimpleLayout>
            </main>
        </>
    )
  }