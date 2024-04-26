import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'; //TouchableOpacity, IMPORTA UM BOTÃO
import Slider from '@react-native-community/slider';
import { ModalPassword } from './src/components/modal'

export default function App () {

  let charset = "abcdefjhijklnopqrstuvwyzABCDEFJHIJKLNOPQRSTUVWYZ0123456789";
  
  const [size, setSize] = useState(10);
  const [passwordValue, setPasswordValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);


  function generatePassword() {

    let password = "";

    for (let i = 0; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPasswordValue(password);
    setModalVisible(true);

  }

  return (
    <View style= {styles.conteiner}>
      <Image
        source={require("./assets/logo.png")}
        style = {styles.logo}
      />

      <Text style= {styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style = {{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor='#FF0000'
          minimumTrackTintColor='#000'
          value={size}
          //atalizando valor da useState
          onValueChange={(value) => setSize(Math.round(value))}
        />
      </View>

      <TouchableOpacity style = {styles.button} onPress={generatePassword}>
        <Text style = {styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible= {modalVisible} animationType="fade" transparent = {true}>
        <ModalPassword password={passwordValue} handleClose={ () => setModalVisible(false) } />
      </Modal>

    </View>
  )
}

const styles = StyleSheet.create(
  {
    conteiner:{
      flex: 1,
      backgroundColor: '#F3F3FF',
      justifyContent: 'center',
      alignItems: 'center'
    },

    logo: {
      marginBottom: 60
    },

    area: {
      marginTop: 14,
      marginBottom: 14,
      width: "80%",
      backgroundColor: "#FFF",
      borderRadius: 8, 
      padding: 6
    },

    button: {
      backgroundColor: "#392DE9",
      width: "80%",
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
      marginBottom: 18
    },

    buttonText: {
      color: "#FFF",
      fontSize: 20
    },

    title: {
      fontSize: 30,
      fontWeight: 'bold'
    }
  }
)