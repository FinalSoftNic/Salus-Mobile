import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, ScrollView } from 'react-native';

// El componente recibe 'onNavigate' como prop para el botón de regreso
const VPH = ({ onNavigate }) => {
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
    source={require('./Pictures/vph.png')} // Reemplaza con la ruta correcta de tu imagen
    style={styles.fullScreenImage} 
    resizeMode="cover" 
/>
        {/* Aquí podría ir contenido de texto adicional debajo de la imagen si fuera necesario */}
      </ScrollView>
    </View>
  );
};

export default VPH;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  // Contenedor para el botón de regreso fijo
  header: {
    paddingTop: 50, // Ajuste para SafeArea/notch
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    position: 'absolute', // Fija el header encima del scroll
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10, // Asegura que esté por encima de la imagen
    height: 90, // Altura suficiente para el botón
  },
  
  // Estilo del botón de regresar
  backButton: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  backButtonText: {
    fontSize: 16,
    color: '#000000ff',
    fontWeight: '600',
     fontFamily: 'monospace',
     top:-10,
  },
  
  // Contenedor del scroll
  scrollContent: {
    paddingTop: 90, // Espacio para evitar que el contenido se oculte bajo el header fijo
    alignItems: 'center',
  },

  // Estilo para la imagen larga
  fullScreenImage: {
    width: '100%',
    // La altura debe ser mayor que la pantalla para habilitar el scroll
    height: 900, 
    minHeight: '100%', // Asegura que siempre tenga al menos la altura de la pantalla
    resizeMode: 'cover',
  },
});


