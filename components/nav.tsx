import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { Layout } from "./layout";
import { AcmeLogo } from "./AcmeLogo";

export default function Nav() {
    return (
      <Layout>
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="highlight-rounded">
          <Navbar.Link href="/catalogs">Features</Navbar.Link>
          <Navbar.Link isActive href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Layout>
    )
}