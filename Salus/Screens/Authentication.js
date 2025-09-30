import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput, ActivityIndicator, Alert } from 'react-native';

const Authentication = ({ onNavigate }) => {
  // Estado para manejar el mensaje de carga o éxito
  const [loading, setLoading] = useState(false);
  // Estado para el código de entrada (aunque no lo uses para la verificación real, es buena práctica)
  const [code, setCode] = useState('');

  const handleVerification = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      Alert.alert(
        "Éxito",
        "Inicio de sesión exitoso.",
        [
          {
            text: "OK",
            onPress: () => {
              onNavigate('Home');
            }
          }
        ]
      );
    }, 2000);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#354d84" />
        <Text style={styles.loadingText}>Verificando código...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Botón de regreso con texto */}
      <TouchableOpacity style={styles.backButton} onPress={() => onNavigate('login')}>
        <Text style={styles.backText}>← Atrás</Text>
      </TouchableOpacity>

      {/* Imagen editable (z-index por defecto es más bajo) */}
      <Image
        source={require('./Pictures/textoauthen.png')}
        style={styles.authImage}
        resizeMode="contain"
      />

      {/* INPUT (AHORA CON Z-INDEX ALTO) */}
      <TextInput
        style={styles.input}
        placeholder="Ingresar código"
        placeholderTextColor="#354d84"
        keyboardType="numeric" 
        onChangeText={setCode}
        value={code}
      />

      {/* Imagen inferior editable para VERIFICAR */}
      <TouchableOpacity onPress={handleVerification}>
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

// ---

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  // ... (otros estilos)
  
  // ESTILOS EXISTENTES
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(239, 239, 239, 0)',
    borderRadius: 8,
    zIndex: 10, // Un zIndex alto para el botón de regreso
  },
  // ... (otros estilos)

  input: {
    width: 280,
    height: 50,
    backgroundColor: '#e5ecf4',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ffffffff',
    top: 80,
    fontFamily: 'monospace',
    // 🔑 CLAVE PARA SOLUCIONAR: Asegura que el input esté "encima" de otros elementos
    zIndex: 5, 
  },
  
  // ... (el resto de tus estilos)
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    color: '#354d84',
    fontFamily: 'monospace',
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
  verificarImage: {
    width: 300,
    height: 80,
    top: 150,
  },
  verificarImage1: {
    width: 300,
    height: 80,
    top: 150,
  },
});