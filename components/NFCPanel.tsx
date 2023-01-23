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
            const vcard = `BEGIN:VCARD\n
            VERSION:3.0\n
            N:Gump;Forrest;;Mr.;\n
            FN:Forrest Gump\n
            ORG:Bubba Gump Shrimp Co.\n
            TITLE:Shrimp Man\n
            PHOTO;VALUE#URI;TYPE#GIF:http://www.example.com/dir_photos/my_photo.gif\n
            TEL;TYPE#WORK,VOICE:(111) 555-1212\n
            TEL;TYPE#HOME,VOICE:(404) 555-1212\n
            ADR;TYPE#WORK,PREF:;;100 Waters Edge;Baytown;LA;30314;United States of America\n
            LABEL;TYPE#WORK,PREF:100 Waters Edge\nBaytown\, LA 30314\nUnited States of America\n
            ADR;TYPE#HOME:;;42 Plantation St.;Baytown;LA;30314;United States of America\n
            LABEL;TYPE#HOME:42 Plantation St.\nBaytown\, LA 30314\nUnited States of America\n
            EMAIL:forrestgump@example.com\n
            REV:2008-04-24T19:52:43Z\n
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