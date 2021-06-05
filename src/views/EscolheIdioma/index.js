import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Botao } from '../../components/botao';
import { COR_DE_FUNDO, FONT_FAMILY_REGULAR } from '../../styles/styles';

export const EscolheIdioma = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.containerTitulo}>
            <Text style={styles.titulo}>Lighteria</Text>
            </View>
            <View style={styles.containerSubTitulo}>
                <Text style={styles.subTitulo}>
                    Sua lingua / your linguage
                </Text>
            </View>
            <View style={styles.separador}/>
                <View style={styles.containerTexto}>
                    <Text style={styles.textoDescricao}>Idiomas</Text>
                </View>
            <View style={styles.containerBotao}>
                <Botao
                    
                    titulo={'português do Brasil'}
                    onPress={() => navigation.push('ListaProdutos')}
                />
                <Botao 
                    titulo={'English'}
                    onPress={() => navigation.push('ListaProdutos')}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    containerTitulo:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:16,
    },
    titulo:{
        fontFamily: 'OpenSans-Bold',
        fontSize: 40,
    },
    containerSubTitulo:{
        justifyContent:'center',
        alignItems:'center',
        marginVertical:40,
    },
    subTitulo:{
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
    },
    separador:{
        borderWidth: 0.5,
        borderColor:'#A1A5AA',
        margin:10,
    },
    containerTexto:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:-46,
    },
    textoDescricao:{
        padding:24,
        backgroundColor:COR_DE_FUNDO,
        fontSize:16,
        fontFamily:FONT_FAMILY_REGULAR,
        color:'#A1A5AA'
    },
    containerBotao:{
        paddingHorizontal:30,
    },
 
});