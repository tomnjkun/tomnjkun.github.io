import { SimpleLayout } from "../../components/layout/simpleLayout"
import { Container } from "@nextui-org/react"
import { useEffect } from "react";

export default function CatalogIndex() {
  
    useEffect(()=>{
      var vcardString = `BEGIN:VCARD\nVERSION:3.0\nN:Sripairojthikoon;Nutisa;;;\nFN:Nutisa Sripairojthikoon\nORG:Digital Picnic Co., Ltd.\nCOMPANY:Digital Picnic Co., Ltd.\nTITLE:Co-Founder & Head of Software Engineer\nTEL;CELL;TYPE=mobile,VOICE:+66846557894\nEND:VCARD`
      var element = document.createElement('a');
      element.setAttribute('href', "data:text/x-vcard;urlencoded," + vcardString);
      element.setAttribute('download', 'test.vcf');
      element.click();
    },[])

    //let blob = new Blob([vcardString],{type:'text/vcard'})
    //let file = new File([blob], `test.vcf`,{type: "text/vcard"});
    //var a = document.createElement('a');
    //a.download= file;
    
    return (
      <>
        <div>
            <h1>hello</h1>
        </div>
      </>
    )
  }