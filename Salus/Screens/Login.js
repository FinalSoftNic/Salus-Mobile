import React, { useState } from 'react';
import {
  View,Text,StyleSheet, TouchableOpacity, ImageBackground, TextInput,
  Image, ScrollView, Alert, ActivityIndicator 
} from 'react-native';

// Se eliminan todas las importaciones de Firebase.
// import { signInWithEmailAndPassword } from 'firebase/auth' ;
// import { auth } from "../Creden"; 

// La función 'Login' ya no usa useState, pero lo importamos por si lo necesitas más adelante.
const Login = ({ onNavigate }) => {

  // Se mantienen las variables de estado, pero puedes eliminarlas si no planeas usarlas.
  const [email, setEmail] = useState(''); // Inicializado a vacío para evitar errores de null
  const [password, setPassword] = useState('');
  
  // Función Logins simplificada: solo navega.
  const Logins = () => { 
    // Simplemente navega a la siguiente pantalla para avanzar en el desarrollo.
    onNavigate('Authentication');
  };

  // Función auxiliar para navegar a registro
  const handleRegister = () => {
    onNavigate('register');
  };
  
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
      >
        <Text style={styles.backText}>← Atrás</Text>
      </TouchableOpacity>

      {/* Contenido con scroll */}
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

        {/* Inputs (Se mantienen los inputs para el diseño) */}
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          // editable siempre true ya que no hay loading
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          // editable siempre true ya que no hay loading
        />

        {/* Texto de recuperación arriba del botón */}
        <TouchableOpacity>
          <Text style={styles.linkTextO}>¿Has olvidado tu contraseña?</Text>
        </TouchableOpacity>

        {/* Botón Iniciar Sesión (Ahora navega directamente) */}
        <TouchableOpacity 
          onPress={Logins}
          // Se quita disabled={loading}
        >
          {/* Se quita la lógica de ActivityIndicator, solo muestra el botón */}
            <Image
              source={require('./Pictures/iniciarEntrar.png')}
              style={styles.iniciarButton}
              resizeMode="contain"
            />
        </TouchableOpacity>

        {/* Texto de registro */}
        <TouchableOpacity onPress={handleRegister}>
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
