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

    async function write (){
        try {
            const ndef = new NDEFReader();
            await ndef.write({
                records: [{ recordType: "url", data: "https://developer.mozilla.org/en-US/docs/Web/API/NDEFReader/write" }],
            });
            setLog("https://developer.mozilla.org/en-US/docs/Web/API/NDEFReader/write")
        }catch {
            console.log("Write failed :-( try again.");
            setLog("Write failed :-( try again.")
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
                <Button bordered color="error" auto onPress={write}>
                    Write
                </Button>
            </Grid>
            <Grid>
                <p id="log">{log}</p>
            </Grid>
        </Grid.Container>
        </>
    )
}