import {Card, Text} from "@nextui-org/react";
import Image from 'next/image'
import coverMark from '@/assets/covermark-banner.png'

export const Banner = () =>{
    return(
            <Card css={{ $$cardColor: '$colors$primary',padding:'0',borderRadius: 0,}}>
                <Card.Body css={{p:0,m:0,height:'fit-content'}}>
                <Image
                    src={coverMark}
                    alt="Picture of the author"
                    style={{height:'100%',width:'100%'}}
                />
                </Card.Body>
            </Card>
    );
}