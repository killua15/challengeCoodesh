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
    
    const initFunction = async () => {
        console.log(option)
        const response = await allWords();
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
    
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async  () => {
            initFunction();
        });
    
        return unsubscribe;
      }, [navigation]);
    

    useEffect(() => {
       
        (
            async () => {
                initFunction();
            }
        )();

    }, [option]);

    const onChangeOptions = (option) => {
        setOptions(option);
    }

    return (
        <Flex flex={1} alignItems={'center'} bg={"blue.500"}>
            <TabsOptions onChangeOptions={onChangeOptions} option={option}></TabsOptions>
            {option == 1 ? <MainList data={data} navigation={navigation}></MainList> : <ListComponent data={option == 2 || option == 3 ? dataSave : []} navigation={navigation}></ListComponent>}
        </Flex>
    );
}

export default ListWords