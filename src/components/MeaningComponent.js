import { Badge, Box, Center, Divider, Flex, IconButton,Stack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import Favorites from "../services/localService/favorites_service";
import SoundPlayer from 'react-native-sound-player'
import {Text} from 'react-native'
const MeaningComponent = (meanings, wordTranslateFonetic, urlAudio, setFav, isfav, playPronunce) => {


    return <Flex bg="blue.500" flex={1}>
        <IconButton colorScheme="white" alignSelf={'flex-end'} _icon={{
            as: AntDesign,
            name: "heart",
            color: isfav ? 'success.300' : 'white',

        }} onPress={setFav} />
        <Box margin={2} p={12} rounded="lg">
            <Box marginBottom={5} padding={5} rounded={'2xl'} shadow={'1'} bg={'primary.100'}>{meanings} </Box>
            <Divider></Divider>
            <Box marginTop={5} padding={5} rounded={'2xl'} shadow={'1'} bg={'success.100'} alignItems={'center'}>{wordTranslateFonetic}</Box>
            
                <Stack marginTop={5} padding={2} mb="1.5" mt="1.5" justifyContent={'center'} alignContent={'center'} alignItems={'center'} bg={'success.100'} rounded={'2xl'} shadow={'1'} direction={{
                    base: "row",
                    md: "row"
                }} space={2} mx={{
                    base: "auto",
                    md: "0"
                }}>
                    <IconButton colorScheme="white" _icon={{
                        as: AntDesign,
                        name: "play",
                        color: 'secondary.400',

                    }} onPress={() => playPronunce(urlAudio)} />
                    <Text style={{marginTop:0}}>Play Pronunce</Text>
                </Stack>
        </Box>;
    </Flex>;
}


export default MeaningComponent;