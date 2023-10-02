import { useEffect, useState } from "react";
import transtaleWord from "../services/translateWord";
import loadingComponent from "../components/LoadingComponent";
import MeaningComponent from "../components/MeaningComponent";
import History from "../services/localService/history_service";
import Favorites from "../services/localService/favorites_service";

function Meanings({ navigation, route }) {
    const [meanings, setMeanings] = useState("");
    const [wordTranslateFonetic, setWordTranslateFonetic] = useState("");
    const [urlAudio, setUrlAudio] = useState("");
    const [loading, setLoading] = useState(true);
    const [fav, setFavorite] = useState(false);

    useEffect(() => {
       
        (
          async () => {
            console.log("favoritesList", await Favorites.getFavorites())
            console.log("HistoryList", await History.getHistories())

            const response = await transtaleWord(`${route.params.word}`);
            setMeanings(response.data[0].meanings[0].definitions[0].definition);
            const phonetics = response.data[0].phonetics.find(p =>{
                return p.text != "" &&  p.text != null;
             });
            setWordTranslateFonetic(phonetics.text);
            const url = response.data[0].phonetics.find(p =>{
               return p.audio != "";
            });
            setUrlAudio(url.audio);
            History.saveHistory(route.params.word)
            setLoading(false);

            const fav = await Favorites.isWordFavorite(route.params.word);
            setFavorite(fav);
          }
        )()
      
    }, []);

    const setFav = async () =>{
        if(await Favorites.isWordFavorite(route.params.word)){
            await Favorites.deleteFavorites(route.params.word);
            setFavorite(false)
        }else{
            await Favorites.saveFavorites(route.params.word);
            setFavorite(true)
        }
        
    }
    return (
        loading ? loadingComponent() : MeaningComponent(meanings,wordTranslateFonetic,urlAudio, setFav,fav)
    );
}

export default Meanings;

