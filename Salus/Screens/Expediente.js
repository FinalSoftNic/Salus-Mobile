import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

// CORRECCIÓN 1: Desestructura { onNavigate } de las props
const Expediente = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      {/* Texto simple centrado */}
      <Text style={styles.greetingText}>
        ¡Hola!
      </Text>
      <Text style={styles.greetingText}>
        Bienvenida
      </Text>
      
      {/* Se asume que este View tiene algún propósito de diseño */}
      <View style={styles.row1}></View>
      
      <TouchableOpacity style={styles.backButton} onPress={() => onNavigate('Home')}>
        <Text style={styles.backText}>← Atrás</Text>
      </TouchableOpacity>
      
      {/* CORRECCIÓN 2: Se eliminó <View/> mal colocado. */}
      {/* Si querías cerrar el componente <View> principal, ya está cerrado abajo. */}
      {/* Si querías un View adicional, debe estar como <View></View> o <View /> */}
      
    </View>
  );
};

export default Expediente;

const styles = StyleSheet.create({
  // El contenedor principal ocupa toda la pantalla
  container: {
    flex: 1,
    // Alinea los elementos hijos (el texto) en el centro horizontal y vertical
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#f8f8f8', // Un color de fondo suave
  },
  
  // Estilo del texto
  greetingText: {
    fontSize: 32, // Tamaño de fuente grande
    fontWeight: 'bold', // Negrita
    color: '#333', // Color de texto oscuro
    marginVertical: 5, // Espacio vertical entre los textos
  },

  // --- Estilos Añadidos (necesarios para evitar errores) ---
  row1: {
    width: '80%', 
    height: 50, 
    backgroundColor: 'transparent',
    marginVertical: 20,
  },
  backButton: {
    position: 'absolute', // Colócalo en una posición específica
    bottom: 40,
    padding: 10,
    backgroundColor: '#007AFF', // Color de botón
    borderRadius: 5,
  },
  backText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});