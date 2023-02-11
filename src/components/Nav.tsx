import React from "react";
import {Container ,Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import Image from "next/image";
import coverMark from "@/assets/Logo-covermark 1.png"

export default function Nav() {
  return (
    <>
    <div className="Navbar">
      <Image
          className="ImageNavber"
          src={coverMark}
          alt="Default Image"
      />
    </div>
  </>
  )
}