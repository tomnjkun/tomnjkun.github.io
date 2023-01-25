import { SimpleLayout } from "../../components/layout/simpleLayout"
import { Button, Container } from "@nextui-org/react"
import { useEffect } from "react";
import Link from "next/link";

export default function CatalogIndex() {
    const vcardString = `BEGIN:VCARD\nVERSION:3.0\nN:Sripairojthikoon;Nutisa;;;\nFN:Nutisa Sripairojthikoon\nORG:Digital Picnic Co., Ltd.\nCOMPANY:Digital Picnic Co., Ltd.\nTITLE:Co-Founder & Head of Software Engineer\nTEL;CELL;TYPE=mobile,VOICE:+66846557894\nEND:VCARD`

    //let blob = new Blob([vcardString],{type:'text/vcard'})
    //let file = new File([blob], `test.vcf`,{type: "text/vcard"});
    //var a = document.createElement('a');
    //a.download= file;
    
    return (
      <>
        <div>
            <h1>hello</h1>
            <Link href={"data:text/x-vcard;urlencoded," + vcardString}>
              <Button>OPEN</Button>
            </Link>
        </div>
      </>
    )
  }