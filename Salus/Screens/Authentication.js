import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput } from 'react-native';

const Authentication = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      {/* Botón de regreso con texto */}
      <TouchableOpacity style={styles.backButton} onPress={() => onNavigate('login')}>
        <Text style={styles.backText}>← Atrás</Text>
      </TouchableOpacity>

      {/* Imagen editable */}
      <Image
        source={require('./Pictures/textoauthen.png')}
        style={styles.authImage}
        resizeMode="contain"
      />

      {/* Input sin funcionalidad */}
      <TextInput
        style={styles.input}
        placeholder="Ingresar código"
        placeholderTextColor="#354d84"
        keyboardType="numeric"
        inputMode="numeric"
        maxLength={5}
      />

      {/* Imagen inferior editable */}
      <TouchableOpacity onPress={() => onNavigate('Home')}>
  <Image
    source={require('./Pictures/Verificar2fa.png')}
    style={styles.verificarImage}
    resizeMode="contain"
  />
</TouchableOpacity>

      <Image
        source={require('./Pictures/Solicitar2fa.png')}
        style={styles.verificarImage1}
        resizeMode="contain"
      />
    </View>
  );
};

export default Authentication;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(239, 239, 239, 0)',
    borderRadius: 8,
    zIndex: 10,
  },
  backText: {
    fontSize: 18,
    color: '#354d84',
    fontFamily: 'monospace',
  },
  authImage: {
    width: 400,     
    height: 170,    
    marginTop: -150,  
  },
  input: {
    width: 280,
    height: 50,
    backgroundColor: '#e5ecf4',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ffffffff',
    top: 100,
    fontFamily: 'monospace',
  },
  verificarImage: {
    width: 300,     // 🔧 ancho editable
    height: 80,     // 🔧 alto editable
    top: 150, // 🔧 posición editable
    
  },
  verificarImage1: {
    width: 300,     // 🔧 ancho editable
    height: 80,     // 🔧 alto editable
    top: 150, // 🔧 posición editable
    
  },
  
});