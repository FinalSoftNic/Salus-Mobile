import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const md = ({onNavigate}) => {
  return (
    <View style={styles.container}>
      
      {/* --- BOTÓN DE REGRESO (FLECHA) --- */}
      <TouchableOpacity 
        style={styles.backButton} 
        // Asumiendo que onNavigate te lleva a la pantalla anterior
        onPress={() => onNavigate('Login')} 
      >
        {/* Usamos un caracter Unicode para la flecha izquierda */}
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>
      {/* ---------------------------------- */}

      {/* Texto centrado: ahora solo dice "MiDiario" */}
      <Text style={styles.titleText}>
        MiDiario
      </Text>
    </View>
  );
};

export default md;


const styles = StyleSheet.create({
  // El contenedor principal ocupa toda la pantalla
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  
  // --- ESTILOS DEL BOTÓN DE REGRESO ---
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
    zIndex: 10,
  },
  backText: {
    fontSize: 30,
    color: '#333',
    fontWeight: 'bold',
  },
  // ------------------------------------

  // Estilo para el título "MiDiario" (cambiado de greetingText a titleText para claridad)
  titleText: {
    fontSize: 36, // Un poco más grande para ser un título
    fontWeight: 'bold',
    color: '#333',
  },
});