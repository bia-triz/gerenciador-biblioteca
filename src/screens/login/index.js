//1 passo importar o react
import React from 'react';

//2 passo importar o react-native   
import  {View, 
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image} from 'react-native';

//3 passo criar a função
export default function Login() {
    return (
        <View style={styles.container}>
                <TextInput placeholder='Digite seu E-mail'/>
                
                <TextInput placeholder='Digite sua Senha'/>
                
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.texto}>Entrar</Text>
                </TouchableOpacity>
        </View>
    )}

//4 passo criando o style da tela de login
const styles = StyleSheet.create({

    container: {
        flex: 1,
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center'    

    },

    botao:{
        backgroundColor: '#fa1c0b',
        fontWeight: 'bold',
        alignItems: 'center',
        width: 150,
        height: 30
       
    },

    texto:{
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center'
    }
})