import { Button, Grid  } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function NFCPanel() {
    const [log,setLog] = useState<String>('');
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
                setLog(`> Records: (${message.records.length})`)
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
                <Button bordered color="secondary" auto onPress={scan}>
                    Scan
                </Button>
            </Grid>
            <Grid>
                <Button bordered color="error" auto onPress={writeMessage}>
                    Write Message
                </Button>
            </Grid>
            <Grid>
                <Button bordered color="success" auto onPress={writeURL}>
                    Write URL
                </Button>
            </Grid>
            <Grid>
                <p id="log">{log}</p>
            </Grid>
        </Grid.Container>
        </>
    )
}