import { Text } from '@chakra-ui/react'
import type { InfoTabContent } from './types'

interface InfoTabProps {
    content: InfoTabContent
}

export default function InfoTab({ content }: InfoTabProps) {
    if (content.items.length > 0) {
        return (
            <ul>
                {content.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
        )
    } else {
        return (<Text>{content.title} Page in Progress</Text>)
    }
}