// app/page.tsx
'use client'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function Page() {
  return (
    <Tabs>
      <TabList>
        <Tab>Home</Tab>
        <Tab>About</Tab>
        <Tab>Contect</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>Home.</p>
        </TabPanel>
        <TabPanel>
          <p>About!</p>
        </TabPanel>
        <TabPanel>
          <p>Contact!!!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}