import {Container,Row,Col,Input,Grid, Card, Text,Checkbox, Spacer, Button,Dropdown} from "@nextui-org/react";
import { buttonStyle } from "./common";
import { LabelStyle } from "./common";
import { LabelCheckboxStyle } from "./common";
import { TopicText } from "./common";
import { SubTopicText } from "./common";

export const Form = () =>{
    return(
        <Container md >
            <Card css={{ $$cardColor: 'white',borderRadius:'$0'}}>
                <Card.Body>
                <Row justify="center" align="center">
                    <Card css={{ mw: "677px", bg: '#9B6F42',borderRadius:'$0'}} variant="flat">
                        <Grid.Container justify="center" alignItems="center">
                            <Card.Body >
                                <Text span style={{marginBottom:0,fontWeight:400,color:'White'}} css={TopicText}>ลงทะเบียน รับฟรี</Text>
                                <Text span style={{color:'white',fontWeight:500,fontStyle:'italic'}} css={SubTopicText}>free mini private makeup service (30 นาที)</Text>
                            </Card.Body>
                        </Grid.Container>
                    </Card>
                </Row>
                <Row justify="center" align="center" css={{
                    padding:'2rem 0rem',
                    '@xs':{
                        padding:'2rem 5rem'
                      },
                      '@sm':{
                        padding:'2rem 5rem'
                      },
                      '@md': {
                        padding:'2rem 15rem'
                      },
                }}>
                    <Grid.Container  gap={2} justify="center">
                        <Grid xs={12} sm={6} md={6}>
                            <Col>
                                <Row align="center" >
                                <Text span css={LabelStyle}>ชื่อ</Text>
                                </Row>
                                <Row align="center" >
                                <select name="cars" className="SelectStyle" id="mod-select">
                                    <option value="volvo">นาย</option>
                                </select>
                                <input placeholder="ชื่อ" className="InputStyle" id="mod-input"/>
                                </Row>
                            </Col>
                        </Grid>
                        <Grid xs={12} sm={6} md={6}>
                            <Col>
                                <Row>
                                    <Text span css={LabelStyle}>นามสกุล</Text>
                                </Row>
                                <Row align="center" >
                                    <input placeholder="นามสกุล" className="InputStyle"/>
                                </Row>
                            </Col>
                        </Grid>
                        <Grid xs={12} sm={6} md={6}>
                            <Col>
                                <Row>
                                    <Text span css={LabelStyle}>เบอร์มือถือ</Text>
                                </Row>
                                <Row align="center" >
                                    <input placeholder="xxx-xxxxxxx" className="InputStyle"/>
                                </Row>
                            </Col>
                        </Grid>
                        <Grid xs={12} sm={6} md={6}>
                            <Col>
                                <Row>
                                    <Text span css={LabelStyle}>เลือกสาชาที่สะดวกเข้ารับบริการ</Text>
                                </Row>
                                <Row>
                                <select name="cars" className="SelectStyle" >
                                    <option value="volvo">สาขา</option>
                                </select>
                                </Row>
                            </Col>
                        </Grid>
                        <Grid xs={12} sm={6} md={6}>
                            <Col>
                                <Row>
                                    <Text span css={LabelStyle}>เลือกวันที่สะดวกเข้ารับบริการ</Text>
                                </Row>
                                <Row>
                                <select name="cars" className="SelectStyle" >
                                    <option value="volvo"></option>
                                </select>
                                </Row>
                            </Col>
                        </Grid>
                        <Grid xs={12} sm={6} md={6}>
                            <Col>
                                <Row>
                                    <Text span css={LabelStyle}>เลือกเวลาเพื่อเข้ารับบริการ</Text>
                                </Row>
                                <Row>
                                    <select name="cars" className="SelectStyle" >
                                        <option value="volvo"></option>
                                    </select>
                                </Row>
                            </Col>
                        </Grid>
                        <Grid xs={12} sm={6} md={6}>
                            <Col>
                                <Row>
                                    <Text span css={LabelStyle}>เลือกระดับการปกปิดของรองพื้นที่ต้องการ</Text>
                                </Row>
                                <Row>
                                <select name="cars" className="SelectStyle" >
                                        <option value="volvo"></option>
                                </select>
                                </Row>
                            </Col>
                        </Grid>
                        <Grid xs={12} sm={6} md={6}>
                        </Grid>
                    </Grid.Container>
                </Row>
                <Row justify="center" css={{
                        textAlign:"center",
                        '@sm':{
                            margin:'$10 $0'
                        },
                        '@md': {
                            margin:'$20 $0'
                        }
                    }}>
                    <Grid.Container gap={2}>
                        <Grid xs={12} sm={12} md={12} justify='center'>
                            <Checkbox color='default' css={{display:'flex',alignItems:'flex-start','@sm':{margin:'3px 10px'},'@md': {margin:'5px 10px'}}}></Checkbox>
                            <Text span css={LabelCheckboxStyle}>กรุณายอมรับเงื่อนไขของนโยบายความเป็นส่วนตัว <a style={LabelCheckboxStyle}><u>ศึกษาเพิ่มเติมได้ที่นี่</u></a></Text>
                        </Grid>
                        <Grid xs={12} sm={12} md={12} justify='center'>
                            <Button css={buttonStyle}>ลงทะเบียน</Button>
                        </Grid>
                        <Grid xs={12} sm={12} md={12} justify='center'>
                            <Text span css={LabelStyle}>ทางบริษัทขอสงวนลิขสิทธิ์ในการเปลี่ยนแปลงเงื่อนไข โดยไม่ต้องแจ้งให้ทราบล่วงหน้า</Text>
                        </Grid>
                    </Grid.Container>
                </Row>
                </Card.Body>
            </Card>
            
        </Container>
    );
}