import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Welcome = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./Pictures/InicioW.png')}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => onNavigate('register')}>
          <Image
            source={require('./Pictures/botonCrearCuenta.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onNavigate('login')}>
          <Image
            source={require('./Pictures/IniciarSesion.png')}
            style={styles.iniciarButton}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  buttonsContainer: {
    position: 'absolute',
    top: '70%',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  button: {
    width: 320,
    height: 70,
    marginVertical: 10,
  },
  iniciarButton: {
    width: 320,
    height: 70,
    marginVertical: 10,
  }
});