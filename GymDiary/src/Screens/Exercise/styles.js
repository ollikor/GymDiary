import { StyleSheet } from 'react-native';
import { colors, margin, paddings, fonts, buttons,elevation, buttonRadius } from '../../styles/theme';


export default StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',

        padding: 10,
    },
    containerButtons: {
        padding: 10,
        backgroundColor: colors.secondaryBackground
    }
});