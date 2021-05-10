import { StyleProp } from 'react-native';
import { normalize } from 'react-native-elements';

export const commonStyles: StyleProp<any> = {

    title:{
        fontSize: normalize(22),
        fontWeight: 'bold',
    },

    sectionTitleMargin:{
        marginBottom: normalize(10)
    },

    row:{
        flexDirection: 'row',
    },

    column:{
        flexDirection: 'column',
    },

}
