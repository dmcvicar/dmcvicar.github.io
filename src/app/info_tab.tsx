import { Center, Flex, Heading, ListItem, Text, UnorderedList, Image, Card, CardBody } from '@chakra-ui/react'
import type { InfoTabContent, InfoTabItem } from './types'
import { ReactNode } from 'react'

interface InfoTabProps {
    content: InfoTabContent
}

interface InfoItemProps {
    item_content: InfoTabItem
}

function InfoItem({ item_content }: InfoItemProps) {
    const subs: Array<ReactNode> = []
    item_content.subtitles.forEach((subtitle) => {
        let _sub = <Text>{subtitle.text}</Text>
        if ( subtitle.bold ){
            _sub = <Heading as="h3" size="md">{_sub}</Heading>
        }
        subs.push(<Flex key={subtitle.text}>{_sub}</Flex>)
    })
    return (
        <Card variant='elevated'>
            <CardBody display="flex" flexWrap="wrap" boxShadow="md" gap="20px"  p="6" justifyContent="center">
                <Flex direction="column" maxWidth="250px" gap="10px" justifyContent="center">
                    {item_content.image ? <Image src={"/images/" + item_content.image} objectFit="contain" alt={item_content.title} padding="10px" background={item_content.image_color} /> : <Flex><Heading as="h3" size="md">{item_content.title}</Heading></Flex>}
                    <Flex direction="column">{subs}</Flex>
                </Flex>
                <Flex direction="column" maxWidth="672px">
                    <UnorderedList>
                        <Text fontSize="sm">{item_content.blurbs.map((blurb: string) => <ListItem key={blurb}>{blurb}</ListItem>)}</Text>
                    </UnorderedList>
                </Flex>
            </CardBody>
        </Card>
    )
}

export default function InfoTab({ content }: InfoTabProps) {
    if (content.items.length > 0) {
        return (
            <Center>
                <Flex maxWidth="1000px" direction="column" justifyContent="center" rowGap="10px">
                    {content.items.map((item) => <InfoItem key={item.title} item_content={item}/>)}
                </Flex>
            </Center>
        )
    } else {
        return (<Text>{content.title} Page in Progress</Text>)
    }
}