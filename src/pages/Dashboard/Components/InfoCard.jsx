import { Tag, Text } from "@chakra-ui/react"
import { CustomCard } from "../../../chakra/CustomCard"

const InfoCard = ({ imgUrl, text, tagText, inverted }) => {
    return (
        <>
            <CustomCard bgImage={imgUrl} bgColor={inverted ? "p.purple" : "white"} bgSize="cover" bgRepeat="no-repeat" >
                <Tag color={inverted ? "p.purple" : "white"} bg={inverted ? "white" : "p.purple"} borderRadius="full">{tagText}</Tag>
                <Text mt="4" color={inverted ? "white" : "b.black.80"} fontWeight="medium" textStyle="h5">{text}</Text>
            </CustomCard>
        </>
    )
}

export default InfoCard
