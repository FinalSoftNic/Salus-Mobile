import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
  Alert,          // Necesario para mostrar el mensaje de éxito
  ActivityIndicator // Necesario para mostrar la carga
} from 'react-native';

const Register = ({ onNavigate }) => {
  // 1. Estado para manejar el estado de carga/verificación
  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    // 2. Iniciar la carga y mostrar el mensaje "Verificando registro"
    setLoading(true);

    // 3. Simular el proceso de registro (e.g., 2 segundos)
    setTimeout(() => {
      // 4. Detener la carga
      setLoading(false);

      // 5. Mostrar el mensaje de éxito
      Alert.alert(
        "Registro Exitoso",
        "¡Tu cuenta ha sido creada con éxito!",
        [
          {
            text: "Continuar",
            onPress: () => {
              // 6. Navegar a la pantalla 'Home' después del éxito
              onNavigate('Home');
            }
          }
        ]
      );
    }, 2000); // Espera de 2 segundos
  };

  // 7. Renderizado condicional: Mostrar la pantalla de carga si 'loading' es true
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#354d84" />
        <Text style={styles.loadingText}>Verificando registro...</Text>
      </View>
    );
  }

  // 8. Renderizado normal del formulario si 'loading' es false
  return (
    <View style={styles.container}>
      {/* Fondo */}
      <ImageBackground
        source={require('./Pictures/fondoRegister.png')}
        style={styles.background}
        resizeMode="cover"
      />

      {/* Botón "Regresar" */}
      <TouchableOpacity style={styles.backButton} onPress={() => onNavigate('welcome')}>
        <Text style={styles.backText}>← Atras</Text>
      </TouchableOpacity>

      {/* Imagen centrada */}
      <Image
        source={require('./Pictures/textRegister.png')}
        style={styles.centerImage}
        resizeMode="contain"
      />

      {/* Formulario dentro de un cuadro con scroll */}
      <View style={styles.formBox}>
        <ScrollView
          showsVerticalScrollIndicator={true}
          keyboardShouldPersistTaps="handled"
        >
          {/* Inputs de registro (se omiten props de estado para simplificar) */}
          <TextInput style={styles.input} placeholder="Cédula" />
          <TextInput style={styles.input} placeholder="Nombre completo" />
          <TextInput style={styles.input} placeholder="Fecha de nacimiento" />
          <TextInput style={styles.input} placeholder="Teléfono" keyboardType="phone-pad" />
          <TextInput style={styles.input} placeholder="Dirección" />
          <TextInput style={styles.input} placeholder="Grupo sanguíneo" />
          <TextInput style={styles.input} placeholder="Alergias" />
          <TextInput style={styles.input} placeholder="Condición médica" />
          <TextInput style={styles.input} placeholder="Correo electrónico" keyboardType="email-address" />
          <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />
          <TextInput style={styles.input} placeholder="Verificar contraseña" secureTextEntry />
        </ScrollView>

        {/* Botón de guardar que ahora llama a handleRegister */}
        <TouchableOpacity style={styles.saveButton} onPress={handleRegister} disabled={loading}>
          <Image
            source={require('./Pictures/guardaRegis.png')}
            style={styles.saveImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // --- NUEVOS ESTILOS PARA LA PANTALLA DE CARGA ---
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Fondo de carga
  },
  loadingText: {
    marginTop: 15,
    fontSize: 20,
    color: '#354d84',
    fontFamily: 'monospace',
  },
  // --- ESTILOS EXISTENTES ---
  background: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(238, 238, 238, 0)',
    borderRadius: 8,
    zIndex: 10,
  },
  backText: {
    fontSize: 18,
    color: '#333',
    fontFamily: 'monospace',
  },
  centerImage: {
    position: 'absolute',
    top: '35%',
    left: '52.5%',
    transform: [{ translateX: -200 }],
    width: 375,
    height: 110,
    zIndex: 1,
  },
  formBox: {
    alignSelf: 'center',
    marginTop: 350,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 12,
    padding: 15,
    width: '90%',
    maxWidth: 450,
    height: 500,
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    fontFamily: 'monospace',
    top: 50,
  },
  saveButton: {
    alignSelf: 'center',
    marginTop: 10,
  },
  saveImage: {
    width: 350,
    height: 60,
  },
});