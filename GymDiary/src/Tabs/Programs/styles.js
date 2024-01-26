import { StyleSheet } from 'react-native';
import { colors, margin, paddings, fonts, buttons,elevation, buttonRadius } from '../../styles/theme';


export default StyleSheet.create({
    ProgramsScrollView: {
        height: '100%'
    },
    AddProgramButton: {
        position: 'absolute',
        right: paddings.sm,
        bottom: paddings.sm,

        justifyContent: 'center',
        alignItems: 'center',

        width: 60,
        height: 60,

        borderRadius: 30,
        elevation: elevation.sm,
        backgroundColor: colors.primaryBackground,
    },
    AddProgramButtonText: {
        lineHeight: fonts.plusButton + 5,
        fontSize: fonts.plusButton,
        color: colors.tertiaryBackground
    }
});