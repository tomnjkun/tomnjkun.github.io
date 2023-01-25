import { Card, Row, Text,Button } from "@nextui-org/react";
import Link from "next/link";

export const CatalogCard = (props:any) =>{

  async function writeURL (){
    console.log(window.location.href +'/'+ props.title )
    try {
        const ndef = new NDEFReader();
        await ndef.write({
            records: [{ recordType: "url", data: window.location.href +'/'+ props.title }],
        });
    }catch {
        console.log("Write failed :-( try again.");
    }
  }
  console.log(props)
  //<Link href={'catalogs/' + props.title}>

  return(
    <Card isPressable>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={"https://nextui.org/images/fruit-1.jpeg"}
        objectFit="cover"
        width="100%"
        height={140}
        alt={props.title}
      />
    </Card.Body>
    <Card.Footer css={{ justifyItems: "flex-start" }}>
        <Row wrap="wrap" justify="space-between" align="center">
          <Text b>{props.title}</Text>
            <Button size="sm" shadow color="error" onPress={writeURL}>
              Learn more
            </Button>
        </Row>
    </Card.Footer>
    </Card>
  )
}