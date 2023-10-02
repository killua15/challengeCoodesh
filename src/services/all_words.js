import axios from "axios";

const allWords = async () =>{
    const response = await axios.get('https://www.randomlists.com/data/words.json');
    return response.data;
}

export default allWords;