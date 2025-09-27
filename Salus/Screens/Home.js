import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Texto superior izquierdo */}
      <Text style={styles.greetingText}>Bienvenida Aura</Text>
      <Text style={styles.greetingText1}>Lunes 25</Text>

      {/* Botón superior derecho */}
      <TouchableOpacity style={styles.topButton}>
        <Image source={require('./Pictures/3boton.png')} style={styles.topButtonImage} />
      </TouchableOpacity>

      {/* Fila superior: Imagen 1 y 2 */}
      <View style={styles.row1}>
        <TouchableOpacity style={styles.largeButton}>
          <Image source={require('./Pictures/1_cuadro.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.largeButton}>
          <Image source={require('./Pictures/2_cuadro.png')} style={styles.image} />
        </TouchableOpacity>
      </View>

      {/* Imagen 3: cuadroCarp */}
      <TouchableOpacity style={styles.singleButton}>
        <Image source={require('./Pictures/3_cuadroCarp.png')} style={styles.image} />
      </TouchableOpacity>

      {/* Imagen 3_1Texto: elemento visual no interactivo */}
      <View style={styles.textImageWrapper}>
        <Image source={require('./Pictures/3_1Texto.png')} style={styles.textImage} />
      </View>

      {/* Cuatro imágenes en dos columnas */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.largeButton}>
          <Image source={require('./Pictures/4_Cuadro.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.largeButton}>
          <Image source={require('./Pictures/5_cuadro.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.largeButton}>
          <Image source={require('./Pictures/6_cuadro.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.largeButton}>
          <Image source={require('./Pictures/7_ccuadro.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    backgroundColor: '#fff',
   
  },
  greetingText: {
    position: 'absolute',
    top: 50,
    left: 15,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: '#333',
  },
  greetingText1: {
    position: 'absolute',
    top: 90,
    left: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
     fontFamily: 'monospace',
  },
  topButton: {
    position: 'absolute',
    top: 50,
    right: 15,
    width: 50,   // editable ancho
    height: 50,  // editable alto
  },
  topButtonImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 2,
    top: 70,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: -5,
    top: 100,
  },
  largeButton: {
    marginHorizontal: 10,
    marginVertical: -10,
    width: 150,
    height: 150,
    top: 20,
  },
  singleButton: {
    marginVertical: 10,
    width: 300,
    height: 250,
    top: 100,
  },
  textImageWrapper: {
    marginVertical: 5,
    width: 320,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    top: 65,
  },
  textImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});