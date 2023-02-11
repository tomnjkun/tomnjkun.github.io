import ResultLayout from "@/components/Layouts/ResultLayout";
import Navbar from '@/components/Nav';
import { Layout } from "@/components/Layouts/Layout";
import { Container,Row,Col,Text,Card,Button } from "@nextui-org/react";
import { buttonStyle } from "@/components/common";

export default function Failed() {
    return (
      <>
        <main>
          <Layout>
            <ResultLayout>
              <Container css={{
                margin:'46px 0px 21px 0px',
                '@xs':{margin:'46px 0px 21px 0px'},
                '@sm':{margin:'230px 0px 21px 0px'},
                '@md':{margin:'230px 0px 21px 0px'},
                '@lg':{margin:'230px 0px 21px 0px'},
                p:'0px'
            }}>
                <Row justify="center">
                    <Text h4 css={{textAlign:'center',color:'#E10000'}}>ขออภัยค่ะ หมายเลขเบอร์โทรศัพท์นี้<br></br>ถูกใช้ลงทะเบียนไว้เรียบร้อยแล้ว</Text>
                </Row>
              </Container>

              <Container css={{margin:'21px 0px 27px 0px',p:'0px'}}>
                <Row justify="center" >
                    <Text span css={{textAlign:'center',color:'#844A14',fontWeight:500}}>ขอสงวนสิทธิ์การเข้าร่วมกิจกรรม <br></br>Free Mini Private Makeup Service (30นาที) <br></br>1 ท่าน ต่อ 1 สิทธิ์เท่านั้นค่ะ</Text>
                </Row>
              </Container>

              <Container css={{marginTop:'28px',
                marginBottom:'36px',
                '@xs':{marginBottom:'36px'},
                '@sm':{marginBottom:'230px'},
                '@md':{marginBottom:'230px'},
                '@lg':{marginBottom:'230px'},}}>
                <Row justify="center">
                  <Button css={buttonStyle}>กลับสู่หน้าหลัก</Button>
                </Row>
              </Container>
            </ResultLayout>
          </Layout>
        </main>
      </>
    )
}