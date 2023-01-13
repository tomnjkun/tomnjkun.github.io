import { Button, Grid  } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function NFCPanel() {
    const [log,setLog] = useState<string[]>([]);
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
            setLog(logs =>[...logs,"> Scan started"])

            ndef.onreadingerror = () => {
                console.log("Argh! Cannot read data from the NFC tag. Try another one?");
                setLog(logs =>[...logs,"Argh! Cannot read data from the NFC tag. Try another one?"])
            };
          
            ndef.onreading = ({ message, serialNumber }:any) => {
                console.log(`> Serial Number: ${serialNumber}`);
                console.log(`> Records: (${message.records.length})`);
                setLog(logs =>[...logs,`> Serial Number: ${serialNumber}`])
                setLog(logs =>[...logs,`> Records: (${message})`])
            };
        } catch(error){
            console.log("Argh! " + error);
            setLog(logs =>[...logs,"Argh!"+ error])
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
                <Button bordered color="error" auto >
                    Write
                </Button>
            </Grid>
            <p id="log">{log}</p>
        </Grid.Container>
        </>
    )
}