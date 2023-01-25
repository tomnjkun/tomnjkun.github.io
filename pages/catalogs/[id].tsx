import { SimpleLayout } from "../../components/layout/simpleLayout"
import { Container } from "@nextui-org/react"
import { useEffect } from "react";

export default function CatalogIndex() {
    useEffect(()=>{
      const vcardString = `BEGIN:VCARD\nVERSION:3.0\nN:Sripairojthikoon;Nutisa;;;\nFN:Nutisa Sripairojthikoon\nORG:Digital Picnic Co., Ltd.\nCOMPANY:Digital Picnic Co., Ltd.\nTITLE:Co-Founder & Head of Software Engineer\nTEL;CELL;TYPE=mobile,VOICE:+66846557894\nEND:VCARD`
      window.open("data:text/x-vcard;urlencoded," + vcardString);
    },[])
    
    return (
      <>
        <div>
            <h1>hello</h1>
        </div>
      </>
    )
  }