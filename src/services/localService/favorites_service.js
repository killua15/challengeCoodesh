import AsyncStorage from "@react-native-async-storage/async-storage";

const saveFavorites = async (word) => {

    let favArray = Array();
    favArray = await getFavorites();

    if (favArray != null) {
        const el = favArray.find(el => el === word);

        if (!el) {
            favArray.push(word);
        }

    } else {
        favArray = Array();
        favArray.push(word);
    }
    await AsyncStorage.setItem('favorite', JSON.stringify(favArray));
}

const deleteFavorites = async (word) => {

    let favArray = Array();
    favArray = await getFavorites();

    if (favArray != null) {
        const index = favArray.indexOf(word);
        if (index > -1) { 
            favArray.splice(index, 1); 
        }

    } 
   
    await AsyncStorage.setItem('favorite', JSON.stringify(favArray));
}

const getFavorites = async () => {
    const result = await AsyncStorage.getItem('favorite');
    return JSON.parse(result);
}

const clear = async () => {
    await AsyncStorage.clear();

}

const isWordFavorite = async (word) => {
    let favArray = Array();
    favArray = await getFavorites();
    
    if (favArray != null) {
        const el = favArray.find(el => el === word);
       
        if (el != undefined && el != null) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

const Favorites = { getFavorites, saveFavorites, clear, isWordFavorite,deleteFavorites };

export default Favorites;
