import ResultLayout from "@/components/Layouts/ResultLayout";
import Navbar from '@/components/Nav';
import { Layout } from "@/components/Layouts/Layout";
import { Container,Row,Col,Text,Card,Button } from "@nextui-org/react";
import {text} from '@/components/common'


export default function Failed() {
    return (
      <>
        <main>
          <Layout>
            <ResultLayout>
                <Container css={{
                  margin:'46px 0px 40px 0px',
                  '@xs':{margin:'46px 0px 21px 0px'},
                  '@sm':{margin:'238px 0px 21px 0px'},
                  '@md':{margin:'238px 0px 21px 0px'},
                  '@lg':{margin:'238px 0px 21px 0px'},
                  p:'0px'}}>
                    <Row justify="center">
                        <Text span style={{
                          textAlign:'center',color:'#006A42',fontWeight:600
                      }} css={text} >ขอบพระคุณที่ให้ความสนใจในกิจกรรม COVERMARK <br></br>ระยะเวลาการร่วมกิจกรรมสิ้นสุดลงแล้วค่ะ</Text>
                    </Row>
                </Container>

                <Container css={{p:'0px'}}>
                    <Row justify="center" css={{textAlign:'center',margin:'0px 0px 8px 0px',p:'0px'}}>
                        <Text span style={{textAlign:'center',fontWeight:500,margin:'0'}} css={{text}}>โปรดติดตามเพจ</Text>
                    </Row>
                    <Row justify="center" css={{textAlign:'center'}}>
                        <Button css={{bg:"#006A42",margin:'0px'}}><Text h3 color="white" style={{margin:'0px'}} css={text}>COVERMARK Thailand</Text></Button>
                    </Row>
                    <Row justify="center" css={{textAlign:'center',
                    margin:'12px 0px 48px 0px',
                    '@xs':{margin:'12px 0px 48px 0px'},
                    '@sm':{margin:'12px 0px 286px 0px'},
                    '@md':{margin:'12px 0px 286px 0px'},
                    '@lg':{margin:'12px 0px 286px 0px'},
                    p:'0px'}}>
                        <Text span style={{textAlign:'center',fontWeight:500}} css={{text}}>เพื่อไม่พลาดกิจกรรมดีๆ ในโอกาสหน้าค่ะ </Text>
                    </Row>
                </Container>

                <></>
            </ResultLayout>
          </Layout>
        </main>
      </>
    )
}