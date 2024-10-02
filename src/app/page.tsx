// app/page.tsx
"use client";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import About from "./about";
import Contact from "./contact";
import InfoTab from "./info_tab";
import content from "../../public/content.json";

export default function Page() {
  return (
    <div>
      <Tabs size="lg">
        <TabList>
          <Tab>{content.home_text}</Tab>
          <Tab isDisabled={content.experience.items.length === 0}>
            {content.experience.title}
          </Tab>
          <Tab isDisabled={content.projects.items.length === 0}>
            {content.projects.title}
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <About content={content} />
          </TabPanel>
          <TabPanel>
            <InfoTab content={content.experience} />
          </TabPanel>
          <TabPanel>
            <InfoTab content={content.projects} />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Contact content={content} />
    </div>
  );
}
