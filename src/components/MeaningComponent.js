import { Badge, Box, Center, Divider, Flex, IconButton, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import Favorites from "../services/localService/favorites_service";

const MeaningComponent = (meanings, wordTranslateFonetic, urlAudio, setFav, isfav) => {
    return <Flex bg="blue.500" flex={1}>
        <IconButton colorScheme="white" alignSelf={'flex-end'} _icon={{
                as: AntDesign,
                name: "heart",
                color: isfav ? 'success.300' : 'white' ,
            
            }} onPress={setFav}/>
        <Box margin={2} p={12} rounded="lg">
            <Box marginBottom={5} padding={5} rounded={'2xl'} shadow={'1'} bg={'primary.100'}>{meanings} </Box>
            <Divider></Divider>
            <Box marginTop={5} padding={5} rounded={'2xl'} shadow={'1'} bg={'success.100'} alignItems={'center'}>{wordTranslateFonetic}</Box>
            <Badge marginTop={5} alignContent={'center'} justifyContent={'center'} colorScheme="success">{urlAudio} </Badge>
        </Box>;
    </Flex>;
}


export default MeaningComponent;