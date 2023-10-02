import axios from "axios"

const transtaleWord = async (word) => {
   const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
   return response;
}

export default transtaleWord;