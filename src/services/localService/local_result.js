import AsyncStorage from "@react-native-async-storage/async-storage";

const getLocalResult = async (word) => {
    
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

const setLocalResult = async (word) => {
    
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




const LocalResult = {getLocalResult,setLocalResult};

export default LocalResult;
