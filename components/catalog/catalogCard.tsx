import { Card, Row, Text,Button } from "@nextui-org/react";
import Link from "next/link";

export const CatalogCard = (props:any) =>(
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
          <Link href={'catalogs/' + props.title}>
            <Button size="sm" shadow color="error">
              Learn more
            </Button>
          </Link>
        </Row>
    </Card.Footer>
    </Card>
)