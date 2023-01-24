import { Button, Grid  } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";

export default function NFCPanel() {
    const [log,setLog] = useState<String>('');
    const [name,setName] = useState<String>('');
    const [title,setTitle] = useState<String>('');
    const [phone,setPhone] = useState<String>('');
    const [email,setEmail] = useState<String>('');
    const [workAddress,setWorkAddress] = useState<String>('');
    const [homeAddress,setHomeAddress] = useState<String>('');
    useEffect(()=>{
        if (/Chrome\/(\d+\.\d+.\d+.\d+)/.test(navigator.userAgent)){
            // Let's log a warning if the sample is not supposed to execute on this
            // version of Chrome.
            if (89 > parseInt(RegExp.$1)) {
                console.log('Warning! Keep in mind this sample has been tested with Chrome ' + 89 + '.');
            }else{
                console.log('ok')
            }
        }

        if (!("NDEFReader" in window)){
            console.log("Web NFC is not available. Use Chrome on Android.");
        }
    },[])

    async function writeMessage (){
        console.log('enter')
        try {
            const ndef = new NDEFReader();
            await ndef.write("ดุดันไม่เกรงใจใคร");
            setLog("ดุดันไม่เกรงใจใคร")
        }catch {
            console.log("Write failed :-( try again.");
            setLog("Write Message failed :-( try again.")
        }
    }

    async function writeURL (){
        console.log('enter2')
        try {
            const ndef = new NDEFReader();
            await ndef.write({
                records: [{ recordType: "url", data: "https://www.youtube.com/watch?v=xdwUN9PV_kc&list=PLbJD0APnaN3LE_8MRKkDqwMPxbcbw-FMh&index=19" }],
            });
            setLog("http://example.com/")
        }catch {
            console.log("Write failed :-( try again.");
            setLog("Write URL failed :-( try again.")
        }
    }

    async function writeVcard (){
        console.log('enter3')
        const vcard = `BEGIN:VCARD\nVERSION:3.0\nN:Sripairojthikoon;Nutisa;;;\nFN:Nutisa Sripairojthikoon\nORG:Digital Picnic Co., Ltd.\nCOMPANY:Digital Picnic Co., Ltd.\nTITLE:Co-Founder & Head of Software Engineer\nTEL;CELL;TYPE=mobile,VOICE:+66846557894\nEMAIL;TYPE=Email:nutisa@digitalpicnic.co.th\nURL;TYPE=Digital Business Card:https://businesscard.digitalpicnic.co.th/n7s89p4:\nURL;TYPE=Website:https://www.digitalpicnic.co.th\nURL;TYPE=Line:https://line.me/ti/p/XSTvZVwFDa\nURL;TYPE=Facebook:https://facebook.com/digitalpicnic.th\nURL;TYPE=Youtube:https://youtube.com/channel/UCCStnGYYkq0zY8kYuW3opQg\nEND:VCARD`
        //const vcardAsArrayBuffer = new TextEncoder().encode(vcard);
        let blob = new Blob([vcard],{type:'text/vcard'})
        //await ndef.write({records: [{recordType:"mime", mediaType:"text/vcard", data:vcardAsArrayBuffer}]});
        setLog("vcard set")
        let file = new File([blob], `test.vcf`,{type: "text/vcard"});
        window.open("data:text/x-vcard;urlencoded," + vcard);
        //let link =URL.createObjectURL(blob)
        //console.log(blob)

        try {
            const ndef = new NDEFReader();
            //vcard
            const vcard = `BEGIN:VCARD\nVERSION:3.0\nN:Sripairojthikoon;Nutisa;;;\nFN:Nutisa Sripairojthikoon\nORG:Digital Picnic Co., Ltd.\nCOMPANY:Digital Picnic Co., Ltd.\nTITLE:Co-Founder & Head of Software Engineer\nTEL;CELL;TYPE=mobile,VOICE:+66846557894\nEMAIL;TYPE=Email:nutisa@digitalpicnic.co.th\nURL;TYPE=Digital Business Card:https://businesscard.digitalpicnic.co.th/n7s89p4:\nURL;TYPE=Website:https://www.digitalpicnic.co.th\nURL;TYPE=Line:https://line.me/ti/p/XSTvZVwFDa\nURL;TYPE=Facebook:https://facebook.com/digitalpicnic.th\nURL;TYPE=Youtube:https://youtube.com/channel/UCCStnGYYkq0zY8kYuW3opQg\nEND:VCARD`
            //const vcardAsArrayBuffer = new TextEncoder().encode(vcard);
            let blob = new Blob([vcard],{type:'text/vcard'})
            //await ndef.write({records: [{recordType:"mime", mediaType:"text/vcard", data:vcardAsArrayBuffer}]});
            setLog("vcard set")
            let link = URL.createObjectURL(blob);
            console.log(link)
            /*await ndef.write({
                records: [{ recordType: "url", data: link }],
            });*/
        }catch {
            console.log("Write failed :-( try again.");
            setLog("Write vcard failed :-( try again.")
        }
    }


    async function scan (){
        try{
            const ndef = new NDEFReader();
            await ndef.scan();
            console.log("> Scan started");

            ndef.onreadingerror = () => {
                console.log("Argh! Cannot read data from the NFC tag. Try another one?");
            };
          
            ndef.onreading = ({ message, serialNumber }:any) => {
                console.log(`> Serial Number: ${serialNumber}`);
                console.log(`> Records: (${message.records.length})`);
                setLog(`> Serial Number: ${serialNumber}`)
                setLog(`> Records: (${message.records})`)
            };
        } catch(error){
            console.log("Argh! " + error);
            setLog("Argh!"+ error)
        }
    }

    return (
        <>
        <Grid.Container gap={2}>
            <Grid>
                <Input rounded bordered label="Name" placeholder="John Doe" color="primary" onChange={ e => setName(e.target.value)}/>
            </Grid>
            <Grid>
                <Input rounded bordered label="Title" placeholder="John" color="primary" onChange={ e => setTitle(e.target.value)}/>
            </Grid>
            <Grid>
                <Input rounded bordered label="Telephone" placeholder="000-000-0000" color="primary" onChange={ e => setPhone(e.target.value)}/>
            </Grid>
            <Grid>
                <Input rounded bordered label="Email" placeholder="Default@gmail.com" color="primary" onChange={ e => setEmail(e.target.value)}/>
            </Grid>
            <Grid>
                <Input rounded bordered label="Work address" placeholder="Default" color="primary" onChange={ e => setWorkAddress(e.target.value)}/>
            </Grid>
            <Grid>
                <Input rounded bordered label="Home address" placeholder="Default" color="primary" onChange={ e => setHomeAddress(e.target.value)}/>
            </Grid>
            <Grid>
                <Button bordered color="secondary" onPress={scan}>
                    Scan
                </Button>
            </Grid>
            <Grid>
                <Button bordered color="error" onPress={writeMessage}>
                    Write Message
                </Button>
            </Grid>
            <Grid>
                <Button bordered color="success" onPress={writeURL}>
                    Write URL
                </Button>
            </Grid>
            <Grid>
                <Button bordered color="primary" onPress={writeVcard}>
                    Write Vcard
                </Button>
            </Grid>
            <Grid>
                <p id="log">{log}</p>
            </Grid>
        </Grid.Container>
        </>
    )
}