import { Center, FlatList } from "native-base";
import { TouchableOpacity,Text } from "react-native";

const ListComponent = (props) =>{
   return <FlatList numColumns={3} data={props.data} renderItem={(item, index, separators) => {
        return <TouchableOpacity key={item} onPress={() => {
            props.navigation.navigate('Meanings', {
                word: item.item,
            });
        }}>
            <Center margin={2} padding={2} size="100" bg="teal.100" rounded="2xl" _text={{
                color: "teal.50",
                fontWeight: "medium"
            }} shadow={"3"}>
                <Text>{item.item}</Text>
            </Center>
        </TouchableOpacity>
    }} />
}

export default ListComponent;