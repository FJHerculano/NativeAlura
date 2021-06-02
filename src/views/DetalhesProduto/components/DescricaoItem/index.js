import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import { 
    FONT_FAMILY_BOLD,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_X_LARGE,
  FONT_SIZE_SMALL,
  WHITE,
  FONT_FAMILY_REGULAR,
  BLACK,
  FONT_SIZE_LARGE,
  LIGHTERGRAY,
  LIGHTGRAY,
} from '../../../../styles/styles';

export const DescricaoItem = ({
    imagem, 
    estudio,
    itemDesc,
    itemName,
    titulo,
    preco,
    id,
}) => {
    const navigation = useNavigation();
    return(
        <View style={styles.itemContainer}>
            <View style={styles.itemPosicao}>
                <View style={styles.item}>
                    <View style={styles.textoPosicao}>
                        <View>
                            <Text style={styles.textSuperior}>{estudio}</Text>
                            <Text style={styles.textMedio}>{itemName}</Text>
                            <Text style={styles.textInferior}>{titulo}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer:{
        flex:4
    },
    itemPosicao:{
        justifyContent: 'center',
        flexDirection:'row',
        alignItems:'center',
    },
    item:{
        backgroundColor:'#fff',
        borderRadius:30,
        padding:28,
        width:'80%',
        elevation:4,
    },
    textoPosicao:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    imagem:{width: 30, height:72},
    textSuperior:{
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: FONT_SIZE_MEDIUM,
        marginBottom:4
    },
    textMedio:{
        fontFamily: FONT_FAMILY_BOLD,
        fontSize:FONT_SIZE_X_LARGE,
        marginBottom:4
    },
    textInferior:{
        fontFamily:FONT_FAMILY_REGULAR,
        fontSize: FONT_SIZE_SMALL,
        color: '#CACACA',
        marginBottom:12
    }


});