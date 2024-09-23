// app/page.tsx
'use client'

import { Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react'
import About from './about'
import ContactForm from './contact'
import Home from './home'

export default function Page() {
  return (
    <Tabs size="lg">
      <TabList>
        <Tab>Home</Tab>
        <Tab>About</Tab>
        <Tab>Contact</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Home/>
        </TabPanel>
        <TabPanel>
          <About/>
        </TabPanel>
        <TabPanel>
          <ContactForm/>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}