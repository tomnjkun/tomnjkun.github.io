import { SimpleLayout } from "../../components/layout/simpleLayout"
import { Button, Container } from "@nextui-org/react"
import { useEffect, useState } from "react";
import Link from "next/link";
import vCardsJS from "vcards-js";
import axios from "axios";

export default function CatalogIndex() {
    var vCard = vCardsJS();
    const getVCFFile = async() => {
      //set basic properties shown before
      vCard.firstName = "Suppachai";
      vCard.lastName = "Booncharoen";
      vCard.organization = "Digital Picnic";
  
      let image = await axios.get("https://scontent.fbkk12-4.fna.fbcdn.net/v/t39.30808-6/299509569_3258197811112956_3495300142600789949_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHMyIHb92byRjCPFVLZnWv13XeJFYDtjs_dd4kVgO2OzwR9q0enw3cTYg46DPkLsbJxUkaw4njU2FGGLefajG_H&_nc_ohc=CJLmzfPaULcAX_qo_hZ&_nc_ht=scontent.fbkk12-4.fna&oh=00_AfAwT8A4R4bUv6L36SaHlp22zNhIvSv_b-_Esx2KHTn2wA&oe=63E1BE48",{responseType: 'arraybuffer'});
      let imageBase64 = Buffer.from(image.data).toString('base64');
      vCard.photo.embedFromString(imageBase64,'image/jpeg')
  
      //or embed image
      //vCard.photo.attachFromUrl("/path/to/file.jpeg");
  
      vCard.workPhone = "0634096602";
      vCard.birthday = new Date(1999, 9, 4);
      vCard.title = "Software Developer";
      vCard.note = "Notes on Suppachai this is my bio";
  
      //set other vitals
      vCard.nickname = "Ton";
      vCard.namePrefix = "Mr.";
      vCard.gender = "M";
      vCard.role = "Software Development";
  
      // //set other phone numbers
      // vCard.homePhone = "312-555-1313";
      // vCard.cellPhone = "312-555-1414";
      // vCard.pagerPhone = "312-555-1515";
  
      // //set fax/facsimile numbers
      // vCard.homeFax = "312-555-1616";
      // vCard.workFax = "312-555-1717";
  
      // //set email addresses
      // vCard.email = "e.nesser@emailhost.tld";
      // vCard.workEmail = "e.nesser@acme-corporation.tld";
  
      // //set logo of organization or personal logo (also supports embedding, see above)
      // vCard.logo.attachFromUrl(
      //   "https://avatars2.githubusercontent.com/u/5659221?v=3&s=460",
      //   "JPEG"
      // );
  
      //set URL where the vCard can be found
      vCard.source = "http://mywebpage/myvcard.vcf";
  
      //set address information
      // vCard.homeAddress.label = "Home Address";
      // vCard.homeAddress.street = "123 Main Street";
      // vCard.homeAddress.city = "Chicago";
      // vCard.homeAddress.stateProvince = "IL";
      // vCard.homeAddress.postalCode = "12345";
      // vCard.homeAddress.countryRegion = "United States of America";
  
      // vCard.workAddress.label = "Work Address";
      // vCard.workAddress.street = "123 Corporate Loop\nSuite 500";
      // vCard.workAddress.city = "Los Angeles";
      // vCard.workAddress.stateProvince = "CA";
      // vCard.workAddress.postalCode = "54321";
      // vCard.workAddress.countryRegion = "United States of America";
  
      //set social media URLs
      // vCard.socialUrls["facebook"] = "https://...";
      // vCard.socialUrls["linkedIn"] = "https://...";
      // vCard.socialUrls["twitter"] = "https://...";
      // vCard.socialUrls["flickr"] = "https://...";
      // vCard.socialUrls["custom"] = "https://...";
  
      vCard.version = "3.0"; //can also support 2.1 and 4.0, certain versions only support certain fields
  
      //save to file
      // vCard.saveToFile("./eric-nesser.vcf");
  
      //get as formatted string
      console.log(vCard.getFormattedString());
      return vCard.getFormattedString();
    }

    const download = (vCard:any) => {
      const url = window.URL.createObjectURL(new Blob([vCard]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "blob.vcf");
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noreferrer");
      document.body.appendChild(link);
      link.click();
    }

    function downloadVcf(vCard:any) {

      // build data url
      var url = 'data:text/x-vcard;charset=utf-8,' + encodeURIComponent(vCard);
  
      // ask the browser to download it
      document.location.href = url;
  }

    return (
      <>
        <div>
            <h1>VCF download</h1>
            <Button onClick={() => downloadVcf(getVCFFile())}>OPEN</Button>
        </div>
      </>
    )
  }