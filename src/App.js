import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ListaProdutos from './views/ListaProdutos';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { COR_DE_FUNDO } from './styles/styles';
import { DetalhesProduto } from './views/DetalhesProduto';
import { Checkout } from './views/Checkout';
import Provider from './provider';
import { EscolheIdioma } from './views/EscolheIdioma';

const Stack = createStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
            <Provider>    
                <SafeAreaView style={styles.container}>
                    <Stack.Navigator initialRouteName="EscolheIdioma">
                        <Stack.Screen
                            name="EscolheIdioma"
                            component={EscolheIdioma}
                            options={{headerShown: false}}
                        />
                        <Stack.Screen
                            name="ListaProdutos"
                            component={ListaProdutos}
                            options={{headerShown: false}}
                        />
                        <Stack.Screen
                            name="DetalhesProduto"
                            component={DetalhesProduto}
                            options={{headerShown: false}}
                        />
                         <Stack.Screen
                            name="Checkout"
                            component={Checkout}
                            options={{headerShown: false}}
                        />
                    </Stack.Navigator>
                </SafeAreaView>
            </Provider>    
        </NavigationContainer>
    );
};
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COR_DE_FUNDO,
    },
});

export default App;