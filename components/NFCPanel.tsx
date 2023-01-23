import { Button, Grid  } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import VCard from "vcard-creator";

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
        try {
            const ndef = new NDEFReader();
            const vcard = 
            `BEGIN:VCARD\n
            VERSION:3.0\n
            N:Sripairojthikoon;Nutisa;;;\n
            FN:Nutisa Sripairojthikoon\n
            ORG:Digital Picnic Co., Ltd.\n
            COMPANY:Digital Picnic Co., Ltd.\n
            TITLE:Co-Founder & Head of Software Engineer\n
            TEL;TYPE=work,pref:\n
            TEL;CELL;TYPE=mobile,VOICE:+66846557894\n
            TEL;CELL;TYPE=Office,VOICE:\n
            TEL;TYPE=HOME,VOICE:\n
            TEL;TYPE=SMS:\n
            TEL;TYPE=SIGNAL:\n
            EMAIL;TYPE=Email:nutisa@digitalpicnic.co.th\n
            URL;TYPE=Digital Business Card:https://businesscard.digitalpicnic.co.th/n7s89p4\n
            
            URL;TYPE=Location:\n
            KEY:OPENPGP4FPR:\n
            UID:SMART vCARD-846557894\n
            URL;TYPE=Website:https://www.digitalpicnic.co.th\n
            
            URL;TYPE=Line:https://line.me/ti/p/XSTvZVwFDa\n
            URL;TYPE=Facebook:https://facebook.com/digitalpicnic.th\n
            URL;TYPE=Youtube:https://youtube.com/channel/UCCStnGYYkq0zY8kYuW3opQg\n
            NOTE;CHARSET=UTF-8:Digital Picnic is a group of “Creative Technologists,” specializing in transforming space into interactive digital art. We use the combination of art and technology to create the novel experience of playing. We spread the enjoyment into the museum, event, and learning center with projector mapping, mixed reality, and immersive experience.\n
            END:VCARD`
            const vcardAsArrayBuffer = new TextEncoder().encode(vcard);
            
            await ndef.write({records: [{recordType:"mime", mediaType:"text/vcard", data:vcardAsArrayBuffer}]});
            setLog("vcard set")
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