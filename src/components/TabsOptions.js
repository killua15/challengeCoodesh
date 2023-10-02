import { Stack,Button } from "native-base";

const TabsOptions = (props) => {
    return <Stack marginTop={5} mb="2.5" mt="1.5" direction={{
        base: "row",
        md: "row"
    }} space={2} mx={{
        base: "auto",
        md: "0"
    }}>
        <Button size="sm" tintColor="blue" bg={props.option == 1 ? 'secondary.100' : 'primary.100'} _text={{
            color: "#1F2937"
        }} onPress={() => props.onChangeOptions(1)} >WORDS LIST</Button>
        <Button size="sm" bg={props.option == 2 ? 'secondary.100' : 'primary.100'} _text={{
            color: "#1F2937"
        }} onPress={() => props.onChangeOptions(2)} >
            HISTORY
        </Button>
        <Button size="sm" bg={props.option == 3 ? 'secondary.100' : 'primary.100'} _text={{
            color: "#1F2937"
        }} onPress={() => props.onChangeOptions(3)} >
            FAVORITES
        </Button>
    </Stack>
}
export default TabsOptions; 