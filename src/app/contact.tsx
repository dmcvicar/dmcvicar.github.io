import { Flex, Link, Heading, Button } from '@chakra-ui/react'
import { EmailIcon, PhoneIcon, Icon } from '@chakra-ui/icons'
import { Content, ContactSite } from './types';
import { ReactNode } from 'react';

const GITHUB_SVG = "M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"

interface ContactProps {
    content: Content
}

interface ContactIconProps {
    icon?: ReactNode,
    icon_svg?: string,
    marginRight?: string,
    marginLeft?: string,
    color?: string,
}

interface ContactInfoProps {
    site_info: ContactSite
}

function ContactInfo({ site_info }: ContactInfoProps) {
    return (
        <Link display="flex" alignItems="center" href={site_info.uri}>
            {site_info.icon ? site_info.icon : <ContactIcon marginRight="8px" icon_svg={site_info.icon_svg} color={site_info.icon_color} />}
            {site_info.text}
        </Link>
    )
}

const ContactIcon = ({ icon_svg, marginRight, marginLeft, color }: ContactIconProps) => {
    return (
        <Icon marginRight={marginRight} marginLeft={marginLeft}>
            <path fill={color ? "props.color" : "white"} d={icon_svg} />
        </Icon>
    )
}

export default function Contact({ content }: ContactProps) {
    return (
        <Flex wrap="wrap" gap="20px" justifyContent="space-between" alignItems="center" backgroundColor="gray.600" color="white" paddingRight="100px" paddingLeft="100px" paddingTop="50px" paddingBottom="50px">
            <Link href="https://github.com/dmcvicar/dmcvicar.github.io">
                <Button colorScheme="gray" color="Black">
                    {content.button_text}<ContactIcon icon_svg={GITHUB_SVG} marginLeft="5px" color="black"/>
                </Button>
            </Link>
            <Flex direction="column" paddingRight="100px">
                <Heading as="h3" size="md">Contact</Heading>
                <ContactInfo site_info={{ "icon": <EmailIcon marginRight = "8px" />, "uri": "mailto:" + content.email, "text": content.email } } />
                <ContactInfo site_info={{ "icon": <PhoneIcon marginRight = "8px" />, "text": content.phone } } />
                {content.contact_sites.map((site_info: ContactSite) => { return ContactInfo({site_info}) })}
            </Flex>
        </Flex>
    )
}