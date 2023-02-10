import {Card, Text} from "@nextui-org/react";
export const Banner = () =>{
    return(
            <Card css={{ $$cardColor: '$colors$primary',padding:'0',borderRadius: 0,h:216,
            '@xs': {
                h:216
              },
              '@sm': {
                h:768
              },
              '@md': {
                h:768
              },
              '@lg': {
                h:768
              },}}>
                <Card.Body>
                    <Text h6 size={15} color="white" css={{ mt: 0 ,textAlign:'center'}}>
                        picture
                    </Text>
                </Card.Body>
            </Card>
    );
}