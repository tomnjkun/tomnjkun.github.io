import React from "react";
import {Container ,Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";

export default function Footer() {
  return (
    <>
    <Link href="/Register">
        <Button auto>Register</Button>
    </Link>
    <Link href="/Register/Success">
        <Button auto>Success</Button>
    </Link>
    <Link href="/Register/Failed">
        <Button auto>Failed</Button>
    </Link>
    <Link href="/Register/End">
        <Button auto>End</Button>
    </Link>
    <Link href="/Register/List">
        <Button auto>List</Button>
    </Link>
  </>
  )
}
