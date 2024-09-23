import { Box, Image } from '@chakra-ui/react'

export default function About() {
    return (
        <Box maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src="https://media.licdn.com/dms/image/v2/D4E03AQHrePyWR1oT-w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725897956548?e=1732752000&v=beta&t=ELM0Dl0gYse6JwVXcx6TaNXL95w0gRPChUTVY4clyOs" alt="Dave" />
            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                    <p>Hire me pls.</p>
                </Box>
            </Box>
        </Box>
    )
}