import { Box, Link, Heading, Button } from '@chakra-ui/react'
import { EmailIcon, PhoneIcon, Icon } from '@chakra-ui/icons'
import { ElementType } from 'react'

const EMAIL = "mlops.solutions@gmail.com"
const PHONE = "+1 (703) 881-8757"
const LINKEDIN_SVG = "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
const GITHUB_SVG = "M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"

function ContactInfo (props: {_Icon: ElementType; href: string | undefined; _text: string}) {
    return (
        <Box>
            <Link href={props.href}>
                <props._Icon marginRight="8px"/>
                {props._text}
            </Link>
        </Box>
    )
}

function LinkedInIcon(props: { marginRight: string; color: string }) {
    return (
        <Icon marginRight={props.marginRight}>
            <path fill={props.color ? "props.color" : "white"} d={LINKEDIN_SVG} />
        </Icon>
    )
}

function GitHubIcon(props: { marginRight: string; marginLeft: string; color: string}) {
    return (
        <Icon marginRight={props.marginRight} marginLeft={props.marginLeft}>
            <path fill={props.color ? props.color : "white"} d={GITHUB_SVG} />
        </Icon>
    )
}

export default function Contact() {
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" backgroundColor="gray.600" color="white" paddingRight="200px" paddingLeft="100px" paddingTop="50px" paddingBottom="50px">
            <Link href="https://github.com/dmcvicar/mlops-website"><Button colorScheme="gray" color="Black">View Website on GitHub<GitHubIcon marginRight="undefined" marginLeft="5px" color="black"/></Button></Link>
            <Box>
                <Heading as="h3" size="md">Contact</Heading>
                <ContactInfo _Icon={EmailIcon} href={"mailto:" + EMAIL} _text={EMAIL} />
                <ContactInfo _Icon={PhoneIcon} href={undefined} _text={PHONE}  />
                <ContactInfo _Icon={LinkedInIcon} href="https://www.linkedin.com/in/dwmcvicar" _text="linkedin.com/in/dwmcvicar"  />
                <ContactInfo _Icon={GitHubIcon} href="https://github.com/dmcvicar" _text="github.com/dmcvicar"  />
            </Box>
        </Box>
    )
}