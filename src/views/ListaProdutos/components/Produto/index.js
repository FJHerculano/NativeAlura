import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {
    FONT_FAMILY_SEMI_BOLD,
    FONT_SIZE_SMALL,
    WHITE,
} from '../../../../styles/styles';
import { useNavigation } from '@react-navigation/native';

export const Item = ({imagem, titulo, estudio, itemDesc, itemName, preco, id}) => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity 
            style={styles.containerItem} 
            onPress={() => navigation.push('DetalhesProduto', {
                imagem, 
                titulo, 
                estudio, 
                itemDesc, 
                itemName, 
                preco, 
                id
        })}>
            <Image source={imagem} style={styles.imagem} resizeMode="contain"/>
            <Text style={styles.texto}>{titulo}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    containerItem:{
        height: 168,
        backgroundColor: WHITE,
        borderRadius:10,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        margin:8
    },
    texto:{
        marginTop:8,
        fontFamily: FONT_FAMILY_SEMI_BOLD,
        fontSize: FONT_SIZE_SMALL,
        color:'#848486',
    },
    imagem:{
        height:84,
    },
});