import {StyleSheet} from 'react-native';

const MAINCOLOR = {
  MAINCOLOR: '#D6EFF0',
  GREEN: '#00A0A4',
  BACKGROUND: '#F2FAFA',
  WHITE: '#FFF',
  SECONDARY: '#215973',
  BLACK: '#000',
  CYAN: '#cdfffc',
};

const headerText = StyleSheet.create({
  text_bar: {
    fontSize: 19,
    color: MAINCOLOR.WHITE,
    marginTop: 5,
  }
});
const labelInput = StyleSheet.create({
  text_label: {
    fontSize: 16,
    color: MAINCOLOR.GREEN,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight:24
  }
});

const TextStyle = {labelInput,headerText};

export default TextStyle;
