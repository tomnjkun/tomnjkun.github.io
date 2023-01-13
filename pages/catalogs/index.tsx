import { SimpleLayout } from "../../components/layout/simpleLayout"
import { Container } from "@nextui-org/react"
import { Catalog } from '../../components/catalog/catalog'
import { GetStaticProps } from "next";
import React from "react";

export interface Props {
  datas:[];
}

const CatalogIndex:React.FC<Props> = ({datas}) => {
    return (
        <>
        <main>
          <SimpleLayout>
            <Container lg>
              <h1>Fruit</h1>
              <Catalog datas={datas}/>
            </Container>
          </SimpleLayout>
        </main>
      </>
    )
  }

  export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    // Fetch data for the page here
    const datas = await fetchData()
  
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

export default CatalogIndex;