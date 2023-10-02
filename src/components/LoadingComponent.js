import { Flex, Spinner } from "native-base";

const loadingComponent =() => {
    return  <Flex flex={1} bg="blue.500" alignContent={'center'} justifyContent={'center'}><Spinner size="lg" color={'#000'} /></Flex> 
 }

 export default loadingComponent;