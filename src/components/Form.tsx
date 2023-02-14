import {Container,Row,Col,Input,Grid, Card, Text,Checkbox, Spacer, Button,Dropdown} from "@nextui-org/react";
import { stat } from "fs";
import { useState } from "react";
import { useEffect } from "react";
import { buttonStyle } from "./common";
import { LabelStyle } from "./common";
import { LabelCheckboxStyle } from "./common";
import { TopicText } from "./common";
import { SubTopicText } from "./common";

export const Form = () =>{
    const [state,setState] = useState({
        username : '',
        surname : '',
        phone : '',
        department:'',
        date:'',
        time:'',
        level:'',
        errors : {
          name : '',
          surname : '',
          phone : '',
          department:'',
          date:'',
          time:'',
          level:'',
        } 
    });

    const [samples,setSamples] = useState<String>('');

    const handleChange = (event:any) =>{
        //event.preventDefault();
        const { name, value } = event.target;
        let errors = state.errors;
        switch (name) {
            case 'name':
               errors.name = (value.length <= 0 || value == undefined || value == null) ? '*กรุณาใส่ชื่อจริง': '';
               console.log(value.length)
               setState(prevState =>({...prevState,
                    errors:{
                        ...prevState.errors,username: errors.name,
                    }})
                );
               break;
            case 'surname':
                errors.surname = (value.length <= 0 || value == undefined || value == null) ? '*กรุณาใส่นามสกุล': '';
                console.log(value.length)
                setState(prevState =>({...prevState,
                    errors:{
                        ...prevState.errors,username: errors.surname,
                    }})
                );
               break;
            case 'phone':
                errors.phone = (value.length <= 0) ? '*กรุณากรอกเบอร์โทรศัพท์มือถือทั้ง 10 หลัก': '';
                console.log(value.length)
                setState(prevState =>({...prevState,
                    errors:{
                        ...prevState.errors,username: errors.phone,
                    }})
                );
               break;
            case 'department':
                errors.phone = (value == '') ? '*กรุณาเลือกสาขาที่คุณต้องการเข้ารับบริการ': '';
                console.log(value)
                setState(prevState =>({...prevState,
                    errors:{
                        ...prevState.errors,username: errors.department,
                    }})
                );
               break;
            case 'date':
                errors.phone = (value.length <= 0) ? '*กรุณาเลือกวันที่ที่คุณต้องการเข้ารับบริการ': '';
                console.log(value.length)
                setState(prevState =>({...prevState,
                    errors:{
                        ...prevState.errors,username: errors.date,
                    }})
                );
               break;
            case 'time':
                errors.phone = (value.length <= 0) ? '*กรุณาเลือกเวลาที่คุณต้องการเข้ารับบริการ': '';
                console.log(value.length)
                setState(prevState =>({...prevState,
                    errors:{
                        ...prevState.errors,username: errors.time,
                    }})
                );
               break;
            case 'level':
                errors.phone = (value.length <= 0) ? '*กรุณาเลือกระดับการปกปิด': '';
                console.log(value.length)
                setState(prevState =>({...prevState,
                    errors:{
                        ...prevState.errors,username: errors.level,
                    }})
                );
               break;
            default:
              break;
          }
        //setState({[name]: value});
    }

    const handleSubmit = () => {
        //event.preventDefault();
        for (const [key, val] of Object.entries(state)) {
            console.log(key)
            console.log(val)
            let errors = state.errors;
            switch (key) {
                case 'name':
                errors.name = (val == undefined || val == null) ? '*กรุณาใส่ชื่อจริง': '';
                setState(prevState =>({...prevState,
                        errors:{
                            ...prevState.errors,username: errors.name,
                        }})
                    );
                break;
                    errors.phone = (value.length <= 0) ? '*กรุณาเลือกระดับการปกปิด': '';
                    console.log(value.length)
                    setState(prevState =>({...prevState,
                        errors:{
                            ...prevState.errors,username: errors.level,
                        }})
                    );
                break;
                default:
                break;
            }
        }
     }

    const sample = (event:any) =>{
        event.preventDefault();
        const { surname, value } = event.target;
        setSamples(value);
    }

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
                                <input placeholder="ชื่อ" className="InputStyle" id="mod-input" name='name' onChange={handleChange}/>
                                </Row>
                                <Row css={{position:'absolute'}}>
                                    <span style={{color: "red"}}>{state.errors.name}</span>
                                </Row>
                            </Col>
                        </Grid>
                        <Grid xs={12} sm={6} md={6}>
                            <Col>
                                <Row>
                                    <Text span css={LabelStyle}>นามสกุล</Text>
                                </Row>
                                <Row align="center" >
                                    <input placeholder="นามสกุล" className="InputStyle" required name='surname' onChange={handleChange}/>
                                </Row>
                                <Row css={{position:'absolute'}}>
                                    <span style={{color: "red"}}>{state.errors.surname}</span>
                                </Row>
                            </Col>
                        </Grid>
                        <Grid xs={12} sm={6} md={6}>
                            <Col>
                                <Row>
                                    <Text span css={LabelStyle}>เบอร์มือถือ</Text>
                                </Row>
                                <Row align="center" >
                                    <input placeholder="xxx-xxxxxxx" className="InputStyle" name='phone' onChange={handleChange} />
                                </Row>
                                <Row css={{position:'absolute'}}>
                                    <span style={{color: "red"}}>{state.errors.phone}</span>
                                </Row>
                            </Col>
                        </Grid>
                        <Grid xs={12} sm={6} md={6}>
                            <Col>
                                <Row>
                                    <Text span css={LabelStyle}>เลือกสาชาที่สะดวกเข้ารับบริการ</Text>
                                </Row>
                                <Row>
                                <select name="department" className="SelectStyle" onChange={handleChange}>
                                    <option value="" disabled selected></option>
                                </select>
                                </Row>
                                <Row css={{position:'absolute'}}>
                                    <span style={{color: "red"}}>{state.errors.department}</span>
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
                                <Row css={{position:'absolute'}}>
                                    <span style={{color: "red"}}>{state.errors.date}</span>
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
                                <Row css={{position:'absolute'}}>
                                    <span style={{color: "red"}}>{state.errors.time}</span>
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
                                <Row css={{position:'absolute'}}>
                                    <span style={{color: "red"}}>{state.errors.level}</span>
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
                            <Button css={buttonStyle} onPress={handleSubmit} >ลงทะเบียน</Button>
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