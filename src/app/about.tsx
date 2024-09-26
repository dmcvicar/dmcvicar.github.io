import { Box, Image, Center, VStack } from '@chakra-ui/react'
import type { CONTENT_TYPE } from './page'

interface AboutProps {
    content: CONTENT_TYPE
}

export default function About({ content }: AboutProps) {
    return (
        <Center>
            <Box width="500px">
                <VStack>
                    <Image src="/images/dave.png" objectFit="contain" alt="Dave" boxSize="500px" padding="10px"/>
                        <Box p='6'>
                            <Box display='flex' alignItems='baseline' textAlign="center">
                                <p>{content.about}</p>
                            </Box>
                        </Box>
                </VStack>
            </Box>
        </Center>
    )
}