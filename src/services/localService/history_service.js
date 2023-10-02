import AsyncStorage from "@react-native-async-storage/async-storage";

const saveHistory = async (word) => {
    
    let historyArray = Array();
    historyArray = await getHistories();
    
    if (historyArray != null) {
        const el =  historyArray.find(el => el === word);
       
        if(!el){
            historyArray.push(word);
        }
       
    } else {
        historyArray = Array();
        historyArray.push(word);
    }
    await AsyncStorage.setItem('history', JSON.stringify(historyArray));
}

const getHistories = async () => {
    const result = await AsyncStorage.getItem('history');
    return JSON.parse(result);
}

const clear = async () => {
     await AsyncStorage.clear();
   
}

const History = {getHistories,saveHistory, clear};

export default History;
