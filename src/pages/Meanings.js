import { useEffect, useState } from "react";
import transtaleWord from "../services/translateWord";
import loadingComponent from "../components/LoadingComponent";
import MeaningComponent from "../components/MeaningComponent";
import History from "../services/localService/history_service";
import { FavoriteStorage } from "../services/localService/favorites_service";
import SoundPlayer from "react-native-sound-player";
import { resolve } from "inversify-react";
import { container } from "../injectDependency/inversify_config";


const  Meanings = ({ navigation, route }) => {
  

    const [meanings, setMeanings] = useState("");
    const [wordTranslateFonetic, setWordTranslateFonetic] = useState("");
    const [urlAudio, setUrlAudio] = useState("");
    const [loading, setLoading] = useState(true);
    const [fav, setFavorite] = useState(false);
     let _favoriteStorage = container.get(FavoriteStorage);
    
    useEffect(() => {
        (
          async () => {
             console.log("favoritesList", await _favoriteStorage.getFavorites())
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

            const fav = await _favoriteStorage.isWordFavorite(route.params.word);
            setFavorite(fav);
          }
        )()
      
    }, []);

    const setFav = async () =>{
        if(await _favoriteStorage.isWordFavorite(route.params.word)){
            await _favoriteStorage.deleteFavorites(route.params.word);
            setFavorite(false)
        }else{
            await _favoriteStorage.saveFavorites(route.params.word);
            setFavorite(true)
        }
        
    }

    playPronunce = (url) => {
       try {
            
            SoundPlayer.playUrl(url)
       } catch (e) {
           console.log(`cannot play the sound file`, e)
       }
    }

    return (
        loading ? loadingComponent() : MeaningComponent(meanings,wordTranslateFonetic,urlAudio, setFav,fav, playPronunce)
    );
}

export default Meanings;

