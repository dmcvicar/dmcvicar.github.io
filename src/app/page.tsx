// app/page.tsx
'use client'

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import About from './about'
import Contact from './contact'
import Products from './products'
import content from '../../public/content.json'
import { ReactNode } from 'react'

interface SITE_INFO_TYPE {
  uri?: string,
  icon_svg?: string,
  icon?: ReactNode
  text: string,
  icon_color?: string,
}

interface CONTENT_TYPE {
  about: string
  button_text: string
  home_text: string
  products_text: string
  phone: string
  email: string
  sites: Array<SITE_INFO_TYPE>
}

export default function Page() {
  return (
    <div>
    {/* <Container w="100%" margin="0px" padding="0px"> */}
      <Tabs size="lg">
        <TabList>
          <Tab>{content.home_text}</Tab>
          <Tab>{content.products_text}</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <About content={content}/>
          </TabPanel>
          <TabPanel>
            <Products/>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Contact content={content}/>
    {/* </Container> */}
    </div>
  )
}

export type { CONTENT_TYPE, SITE_INFO_TYPE }