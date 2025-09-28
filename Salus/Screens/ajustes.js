import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
// Se eliminó la importación de Switch ya que no se usará.

// --- Definición de Colores ---
// Mantenemos solo el objeto 'dark' o lo seleccionamos directamente para simplificar.
const colors = {
  // Eliminé 'light' y forcé 'dark' para mayor claridad en el código.
  // Si usas ThemeContext, solo necesitas asegurarte de que ThemeContext.js lo fuerce.
  dark: {
    background: '#ffffffff',
    text: '#0071c1ff',
    
    sectionHeader: '#000000ff',
    itemBorder: '#121212ff',
    button: '#9fc7fbff', 
    buttonText: 'white',
    contactText: '#00470bff',
  }
};

/**
 * Componente funcional para la pantalla de Ajustes con el Modo Oscuro forzado.
 * @param {object} props - Las propiedades del componente.
 * @param {function} props.onNavigate - Función para cambiar de pantalla.
 */
const Ajustes = ({ onNavigate }) => {
  
  // 1. FORZAR MODO OSCURO: Se elimina el estado useState y se usa el esquema 'dark' directamente.
  const isDarkMode = true; // El tema es SIEMPRE oscuro.
  const currentColors = colors.dark;

  // Creamos los estilos de forma dinámica (usando el esquema 'dark' forzado)
  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: currentColors.background,
    },
    
    // Contenedor que permite hacer scroll
    scrollContainer: {
      paddingTop: 80, 
      paddingHorizontal: 20,
      paddingBottom: 100, // Espacio para el botón de regreso
    },
    
    headerText: {
      fontSize: 34,
      fontWeight: 'bold',
      color: currentColors.text,
      marginBottom: 30,
      fontFamily: 'monospace',
    },

    // Estilos de Sección
    sectionTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      color: currentColors.sectionHeader,
      marginTop: 25,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: currentColors.itemBorder,
      paddingBottom: 5,
      fontFamily: 'monospace',
    },

    settingItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: currentColors.itemBorder,
      
    },

    settingLabel: {
      fontSize: 16,
      color: currentColors.text,
      fontFamily: 'monospace',
    },

    // Estilos de Contacto
    contactText: {
      fontSize: 11,
      color: currentColors.contactText,
      paddingVertical: 10,
      fontFamily: 'monospace',
    },

    backButton: {
      position: 'absolute', 
      bottom: 40,
      alignSelf: 'center',
      padding: 12,
      backgroundColor: currentColors.button,
      borderRadius: 8,
      elevation: 3,
      shadowColor: currentColors.text,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      fontFamily: 'monospace',
    },
    backText: {
      color: currentColors.buttonText,
      fontSize: 16,
      fontWeight: '600',
      fontFamily: 'monospace',
    },
  });

  return (
    <View style={dynamicStyles.container}>
      
      <ScrollView contentContainerStyle={dynamicStyles.scrollContainer}>
        
        <Text style={dynamicStyles.headerText}>
          Ajustes
        </Text>

        {/* --- SECCIÓN USUARIO --- */}
        <Text style={dynamicStyles.sectionTitle}>Usuario</Text>

        {/* 1. Subsección: Información */}
        <View style={dynamicStyles.settingItem}>
          <Text style={dynamicStyles.settingLabel}>Mi Información Personal</Text>
          <Text style={[dynamicStyles.settingLabel, {color: '#888'}]}>></Text>
        </View>

        {/* 2. Subsección: Contacto (Correo y Contraseña) */}
        <View style={dynamicStyles.settingItem}>
          <Text style={dynamicStyles.settingLabel}>Cambiar Correo Electrónico</Text>
          <Text style={dynamicStyles.contactText}>Actualizar</Text>
        </View>
        <View style={dynamicStyles.settingItem}>
          <Text style={dynamicStyles.settingLabel}>Cambiar Contraseña</Text>
          <Text style={dynamicStyles.contactText}>Actualizar</Text>
        </View>
        
        {/* ⚠️ SE ELIMINÓ la opción del Modo Oscuro con el Switch */}

        {/* --- SECCIÓN RECUPERACIÓN --- */}
        <Text style={dynamicStyles.sectionTitle}>Recuperación</Text>
        <TouchableOpacity style={dynamicStyles.settingItem} onPress={() => alert('Abrir asistente de recuperación')}>
          <Text style={dynamicStyles.settingLabel}>Asistente de Recuperación</Text>
          <Text style={[dynamicStyles.settingLabel, {color: currentColors.contactText}]}>IR</Text>
        </TouchableOpacity>
        
        {/* --- SECCIÓN QUIÉNES SOMOS --- */}
        <Text style={dynamicStyles.sectionTitle}>Quiénes Somos</Text>
        <TouchableOpacity style={dynamicStyles.settingItem} onPress={() => alert('Mostrar versión')}>
          <Text style={dynamicStyles.settingLabel}>Versión de la Aplicación</Text>
          <Text style={[dynamicStyles.settingLabel, {color: '#888'}]}>1.0.0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={dynamicStyles.settingItem} onPress={() => alert('Abrir información legal')}>
          <Text style={dynamicStyles.settingLabel}>Términos y Condiciones</Text>
          <Text style={[dynamicStyles.settingLabel, {color: '#888'}]}>></Text>
        </TouchableOpacity>

      </ScrollView>
      
      {/* Botón para regresar */}
      <TouchableOpacity 
        style={dynamicStyles.backButton} 
        onPress={() => onNavigate('Home')}
      >
        <Text style={dynamicStyles.backText}>← Volver al Inicio</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default Ajustes;

const styles = StyleSheet.create({});