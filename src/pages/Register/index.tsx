import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Layout } from "@/components/Layouts/Layout";
import RegisterLayout from "@/components/Layouts/RegisterLayout";
import Navbar from '@/components/Nav';
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import { Banner } from '@/components/Banner';
import { Form } from '@/components/Form';
import { Box } from '@/components/Layouts/Box';

export default function Home() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <>
      <main>
          <Layout>
            <Navbar />
            <RegisterLayout>
              <Banner />
              <Form />
            </RegisterLayout>
          </Layout>
      </main>
    </>
  )
}

/*<div>
            The current theme is: {type}
            <Switch
              checked={isDark}
              onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
            />
          </div>*/
