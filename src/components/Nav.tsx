import React from "react";
import {Container ,Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import Image from "next/image";
import coverMark from "@/assets/Logo-covermark 1.png"

export default function Nav() {
  return (
    <>
    <div className="Navbar">
      <Image
          width={47}
          height={5}
          src={coverMark}
          alt="Default Image"
      />
    </div>
  </>
  )
}