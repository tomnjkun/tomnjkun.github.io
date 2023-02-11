import ResultLayout from "@/components/Layouts/ResultLayout";
import Navbar from '@/components/Nav';
import { Layout } from "@/components/Layouts/Layout";
import { Container,Row,Col,Text,Card,Button } from "@nextui-org/react";
import Image from 'next/image'
import coverMark from '@/assets/Logo-covermark.png'
import { buttonStyle } from "@/components/common";
import { LabelStyle } from "@/components/common";

export default function Success() {
    const h4Style= {
        margin:'0px',fontSize:'14px',color:'#006A42',
        '@xs':{fontSize:'14px'},
        '@sm':{fontSize:'20px'},
        '@md':{fontSize:'20px'},
        '@lg':{fontSize:'20px'}
    }

    return (
      <>
        <main>
          <Layout>
            <ResultLayout>
              <Container>
                <Row justify="center" css={{margin:'16px 0px 15px'}}>
                    <Image
                        width={135}
                        height={15}
                        src={coverMark}
                        alt="Default Image"
                    />
                </Row>
                <Row justify="center">
                    <Text h4 css={{textAlign:'center',color:'#5C442B',
                    fontSize:'12px',
                    '@xs':{fontSize:'12px'},
                    '@sm':{fontSize:'20px'},
                    '@md':{fontSize:'20px'},
                    '@lg':{fontSize:'20px'}
                }}><u>เงื่อนไขการเข้าร่วมกิจกรรม</u></Text>
                </Row>
                <Row justify="center">
                    <Text h4 css={{textAlign:'center',marginBottom:'14px',color:'#5C442B',
                    fontSize:'10px',
                    '@xs':{fontSize:'10px'},
                    '@sm':{fontSize:'20px'},
                    '@md':{fontSize:'20px'},
                    '@lg':{fontSize:'20px'}
                }}>
                        กรุณาบันทึกภาพหน้าจอ (แคปเจอร์) เป็นหลักฐาน<br></br>
                        เพื่อยืนยันการเข้าร่วมกิจกรรม Free Mini Private Makeup (30นาที)<br></br>
                        ที่เคาน์เตอร์ COVERMARK ในวันเวลา และสาขาที่ลงทะเบียนไว้
                    </Text>
                </Row>
              </Container>

              <Card css={{ mw: "420px" , bg:'#FAFAF1',borderRadius: 0  }} variant="flat">
                  <Card.Header>
                      <Container>
                          <Row justify="center">
                                <Text h5 css={{margin:'0px',color:'#6D6D6D',
                                fontSize:'14px',
                                '@xs':{fontSize:'14px'},
                                '@sm':{fontSize:'16px'},
                                '@md':{fontSize:'16px'},
                                '@lg':{fontSize:'16px'}}}>
                                ข้อมูลผู้ลงทะเบียน
                                </Text>
                          </Row>
                      </Container>
                  </Card.Header>
                  <Card.Body css={{padding:'0'}}>
                      <Container css={{p:'0px'}}>
                          <Row>
                              <Col css={{textAlign:'center'}}>
                              <Text h4 css={h4Style}>ชื่อคุณ กานดา มั่นคง</Text>
                              <Text h4 css={h4Style}>ระดับที่ต้องการ ปกปิดเรียบเนียนสนิท</Text>
                              <Text h4 css={h4Style}>สาขา เซ็นทรัลเวิร์ล</Text>
                              <Text h4 css={h4Style}>วันที่ 12 ม.ค. 66</Text>
                              <Text h4 css={h4Style}>เวลา 12.00-12.30</Text>
                              </Col>
                          </Row>
                      </Container>
                  </Card.Body>
                  <Card.Footer css={{padding:'0'}}>
                      <Container>
                          <Row justify="center">
                              <Text span css={{textAlign:'center',margin:'28px 0px 14px 0px',color:'#6D6D6D',
                              fontSize:'12px',
                              '@xs':{fontSize:'12px'},
                              '@sm':{fontSize:'20px'},
                              '@md':{fontSize:'20px'},
                              '@lg':{fontSize:'20px'}
                            }}>พนักงานบีเอจะติดต่อท่านตามเบอร์มือถือที่แจ้งไว้<br></br>ก่อนเข้ารับบริการ 1 วัน</Text>
                          </Row>
                          <Row justify="center">
                              <Text span css={{textAlign:'center',margin:'14px 0px 60px 0px',color:'#6D6D6D',
                              fontSize:'12px',
                              '@xs':{fontSize:'12px'},
                              '@sm':{fontSize:'20px'},
                              '@md':{fontSize:'20px'},
                              '@lg':{fontSize:'20px'}
                            }}>(สาขาเซ็นทรัลเวิล์ด ชั้น 1 เบอร์โทร 02-586-9342)</Text>
                          </Row>
                      </Container>
                  </Card.Footer>
                </Card>
                <Container css={{margin:'27px 0px'}}>
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