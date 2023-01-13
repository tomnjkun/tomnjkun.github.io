import { Grid } from "@nextui-org/react"
import { CatalogCard } from "./catalogCard";
import React, { useState, useEffect } from 'react';
import { Props } from "../../pages/catalogs";

export const Catalog = ({datas}:any)=>{
    //const [datas, setData] = useState<Data[] | null>([]);

    //get api
    /*useEffect(() => {
      async function fetchData() {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const datas = await res.json();
        setData(datas);
      }

      fetchData();
    }, []);

    if (datas === null) {
      return <p>Loading...</p>;
    }*/
    console.log(datas)

    return(
    <>  
        <Grid.Container gap={2} justify="center">
        {datas.map((data:any) => (
            <Grid xs={4} justify="center" key={data.id}>
                <CatalogCard title={data.name} price={data.id}/>
            </Grid>
        ))}
        </Grid.Container>
    </>
    )
}