// app/page.tsx
'use client'

import { Tabs, TabList, TabPanels, Tab, TabPanel, Text} from '@chakra-ui/react'
import About from './about'
import Contact from './contact'
import Products from './products'

interface COMPANY_INFO_TYPE {
  company_name: string
}

const COMPANY_INFO: COMPANY_INFO_TYPE = {
  company_name: "MLOps Solutions"
}

export default function Page() {
  return (
    <div>
    {/* <Container w="100%" margin="0px" padding="0px"> */}
      <Tabs size="lg">
        <TabList>
          <Tab>{COMPANY_INFO.company_name}</Tab>
          <Tab>Products</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <About company_info={COMPANY_INFO}/>
          </TabPanel>
          <TabPanel>
            <Products/>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Contact />
    {/* </Container> */}
    </div>
  )
}

export type { COMPANY_INFO_TYPE }