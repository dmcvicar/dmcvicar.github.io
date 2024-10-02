interface ContactSite {
  uri?: string;
  icon_svgs: Array<string>;
  text: string;
  icon_color?: string;
  viewBox?: string;
}

interface InfoTabItem {
  title: string;
  subtitles: Array<InfoSubtitle>;
  blurbs: Array<string>;
  image?: string;
  image_color?: string;
}

interface InfoTabContent {
  title: string;
  items: Array<InfoTabItem>;
}

interface InfoSubtitle {
  text: string;
  bold?: boolean;
}

interface Content {
  about: string;
  button_text: string;
  home_text: string;
  experience: InfoTabContent;
  projects: InfoTabContent;
  contact_sites: Array<ContactSite>;
}

export type { Content, InfoTabContent, InfoTabItem, ContactSite, InfoSubtitle };
