import { Flex } from "native-base";
import History from "../services/localService/history_service";
import { useEffect, useState } from "react";
import MainList from "../components/MainList";
import TabsOptions from "../components/TabsOptions";
import ListComponent from "../components/ListComponent";
import Favorites from "../services/localService/favorites_service";
import allWords from "../services/all_words";

function ListWords({ navigation }) {
    const [data, setData] = useState(1);
    const [option, setOptions] = useState(1);
    const [dataSave, setDataSave] = useState([]);

    useEffect(() => {
        
        (
            async () => {
                const response = await allWords();
                console.log(response.data);
                setData(response.data);
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