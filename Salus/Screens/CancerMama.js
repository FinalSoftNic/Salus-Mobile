import React from 'react';
// ¡ERROR CORREGIDO! Faltaban ScrollView, Image, y TouchableOpacity
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

// ¡ERROR CORREGIDO! El componente debe ser nombrado 'CancerMama' o 'SimpleScreen' de forma consistente
// Se usa CancerMama para coincidir con la exportación al final del archivo.
const CancerMama = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      {/* Botón de Regreso Fijo en la parte superior */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => onNavigate('Home')}>
          <Text style={styles.backButtonText}>{'< Atrás'}</Text>
        </TouchableOpacity>
      </View>

      {/* Contenido principal con Scroll para la imagen larga */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image 
          // Asegúrate de que esta ruta sea correcta
          source={require('./Pictures/cancerDema.png')} 
          style={styles.fullScreenImage} 
          resizeMode="cover" 
        />
        {/* Aquí podrías añadir los párrafos de texto que generaste antes si quieres */}
      </ScrollView>
    </View>
  );
};

export default CancerMama;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Cambiado a blanco para mejor contraste
  },

  // --- Estilos para el Encabezado y Botón de Regreso (Añadidos) ---
  header: {
    paddingTop: 50, // Ajuste para SafeArea/notch
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    position: 'absolute', 
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    height: 90, 
  },
  backButton: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  backButtonText: {
    fontSize: 16,
    color: '#040405ff',
    fontWeight: '600',
    fontFamily: 'monospace',
  },
  
  // --- Estilos del Contenido con Scroll (Añadidos) ---
  scrollContent: {
    paddingTop: 90, // Espacio para que el contenido no se oculte bajo el header fijo
    alignItems: 'center',
    minHeight: '100%',
  },
  fullScreenImage: {
    width: '100%',
    height: 850, // Alto grande para forzar el scroll
    resizeMode: 'cover',
  },
  
  // --- Estilos Originales (Removidos o Corregidos) ---
  // Se eliminaron los estilos 'greetingText', 'justifyContent', y 'alignItems' del 'container' 
  // porque interferían con el diseño de la pantalla de scroll e imagen.
});