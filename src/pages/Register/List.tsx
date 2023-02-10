import ResultLayout from "@/components/Layouts/ResultLayout";
import Navbar from '@/components/Nav';
import { Layout } from "@/components/Layouts/Layout";
import { Container,Row,Col,Text,Card,Button, Spacer } from "@nextui-org/react";
import { GetStaticProps } from "next";
import department from "@/assets/department.json"


export interface Props {
  datas: { id: number; location: string; phone: string; }[];
}

export const getStaticProps: GetStaticProps<Props> = async() => {
  // Fetch data for the page here
  const datas = await department;
  

  // Return the props for the page
  return {
    props: {
      datas
    },
  };
};

const fetchData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return data;
};

const List:React.FC<Props> = ({datas}) => {
  
    return (
      <>
        <main>
          <Layout>
            <Navbar />
            <ResultLayout>
              <Container>
                <Row justify="center">
                    <Col>
                        <Text h4 css={{textAlign:'center',margin:'0px',color:'#5C442B'}}>ข้อมูลการติดต่อสาขา</Text>
                        <Text h5 css={{textAlign:'center',color:'#5C442B'}}>สำหรับกิจกรรม Free Mini Private Makeup Service</Text>
                    </Col>
                </Row>
              </Container>

              <Container>
              {datas.map((data:any) => (
                  <Row justify="center" key={data.location}>
                    <Col>
                      <Row justify="center">
                        <Text h4 css={{textAlign:'center',marginBottom:'$0',margin:'0px 12px 0px 0px',color:'#006A42'}}>{data.id})</Text>
                        <Text h4 css={{textAlign:'center',marginBottom:'$0',color:'#006A42'}}>{data.location}</Text> 
                      </Row>
                      <Row justify="center">
                      <Text h4 css={{textAlign:'center',fontWeight:400}}>เบอร์ฯ {data.phone}</Text>
                      </Row>
                    </Col>
                  </Row>
              ))}
                
              </Container>

              <></>
            </ResultLayout>
          </Layout>
        </main>
      </>
    )
}

export default List;