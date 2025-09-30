import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput,
  Image, ScrollView, Alert, ActivityIndicator
} from 'react-native';

const Login = ({ onNavigate }) => {

  // 1. NUEVO ESTADO: Para controlar si el proceso de verificación está en curso
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Logins = () => {
    // 2. INICIO DE LA CARGA: Mostrar el indicador y mensaje de "Verificando"
    setLoading(true);

    // 3. SIMULAR LA VERIFICACIÓN: Usamos setTimeout para simular la espera de una API
    // (Por ejemplo, 1.5 segundos)
    setTimeout(() => {
      // 4. FIN DE LA CARGA Y NAVEGACIÓN:
      setLoading(false);

      // Aquí puedes añadir la lógica de verificación de email/contraseña
      // Pero para este ejemplo, simplemente navegamos a la siguiente pantalla
      onNavigate('Authentication');
    }, 1500); // 1500 milisegundos = 1.5 segundos
  };

  const handleRegister = () => {
    onNavigate('register');
  };

  // 5. RENDERIZADO CONDICIONAL para mostrar la pantalla de carga
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#354d84" />
        <Text style={styles.loadingText}>Verificando...</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require('./Pictures/FondoInicio.png')}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Botón "Regresar" */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => onNavigate('welcome')}
        disabled={loading} // Deshabilita mientras carga (aunque loading tiene su propia pantalla)
      >
        <Text style={styles.backText}>← Atrás</Text>
      </TouchableOpacity>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Imagen txtsesionV como encabezado */}
        <Image
          source={require('./Pictures/txtsesionV.png')}
          style={styles.txtSesion}
          resizeMode="contain"
        />

        {/* Inputs */}
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          editable={!loading} // Se deshabilita mientras carga
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          editable={!loading} // Se deshabilita mientras carga
        />

        {/* Texto de recuperación arriba del botón */}
        <TouchableOpacity disabled={loading}>
          <Text style={styles.linkTextO}>¿Has olvidado tu contraseña?</Text>
        </TouchableOpacity>

        {/* Botón Iniciar Sesión (Ahora llama a la función con el temporizador) */}
        <TouchableOpacity
          onPress={Logins}
          disabled={loading} // Deshabilita el botón durante la carga
        >
          <Image
            source={require('./Pictures/iniciarEntrar.png')}
            style={styles.iniciarButton}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* Texto de registro */}
        <TouchableOpacity onPress={handleRegister} disabled={loading}>
          <Text style={styles.linkTextR}>
            ¿Primera vez aquí? haz clic y regístrate en segundos
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  // NUEVO ESTILO para la pantalla de carga
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // O el color que desees para el fondo de carga
  },
  loadingText: {
    marginTop: 15,
    fontSize: 20,
    color: '#354d84',
    fontFamily: 'monospace',
  },
  // --- ESTILOS EXISTENTES ---
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderRadius: 8,
    zIndex: 10,
  },
  backText: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'monospace',
  },
  content: {
    paddingTop: 120,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  txtSesion: {
    width: 300,
    height: 150,
    marginBottom: 30,
    marginTop: 100,
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 20,
    fontFamily: 'monospace',
  },
  iniciarButton: {
    width: 300,
    height: 60,
    marginVertical: 20,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkTextR: {
    fontSize: 14,
    color: 'hsla(240, 17%, 2%, 1.00)',
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginBottom: 10,
    paddingHorizontal: 75,
    marginTop: 40,
  },
  linkTextO: {
    fontSize: 14,
    color: 'hsla(240, 28%, 13%, 1.00)',
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginBottom: 10,
    marginTop: 30,
    right: -50,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'monospace',
  }
});