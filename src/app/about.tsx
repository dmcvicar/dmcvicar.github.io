import { Box, Image, Center, VStack } from '@chakra-ui/react'
import type { COMPANY_INFO_TYPE } from './page'

interface AboutProps {
    company_info: COMPANY_INFO_TYPE
}

export default function About({ company_info }: AboutProps) {
    return (
        <Center>
            <Box width="500px">
                <VStack>
                    <Image src="/images/dave.png" objectFit="contain" alt="Dave" boxSize="500px" padding="10px"/>
                        <Box p='6'>
                            <Box display='flex' alignItems='baseline'>
                                <p>David McVicar is the founder and sole proprieter of {company_info.company_name}.</p>
                            </Box>
                        </Box>
                </VStack>
            </Box>
        </Center>
    )
}