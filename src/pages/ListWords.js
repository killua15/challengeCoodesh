import { Box, CheckIcon, Text, Heading, Select, ScrollView, VStack, Center, Stack, Alert, FlatList, Flex, Button } from "native-base";
import { View, TouchableOpacity } from "react-native";
import History from "../services/localService/history_service";
import { useEffect, useState } from "react";
import MainList from "../components/MainList";
import TabsOptions from "../components/TabsOptions";
import ListComponent from "../components/ListComponent";
import Favorites from "../services/localService/favorites_service";
const data = ["hello", "sign", "common", "morning", "fire", "moon", "light", "length"]
function ListWords({ navigation }) {
    const [option, setOptions] = useState(1);
    const [dataSave, setDataSave] = useState([]);

    useEffect(() => {
        
        (
            async () => {
                console.log(option)
                if (option == 2) {
                    const save = await History.getHistories();
                    setDataSave(save);
                }
                if (option == 3) {
                    const save = await Favorites.getFavorites();
                    setDataSave(save);
                }
            }
        )();

    }, [option]);

    const onChangeOptions = (option) => {
        setOptions(option);
    }

    return (
        <Flex flex={1} alignItems={'center'} bg={"blue.500"}>
            <TabsOptions onChangeOptions={onChangeOptions} option={option}></TabsOptions>
            {option == 1 ? <MainList data={data} navigation={navigation}></MainList> : <ListComponent data={option == 2 || option == 3 ? dataSave :  []} navigation={navigation}></ListComponent>}
        </Flex>
    );
}

export default ListWords