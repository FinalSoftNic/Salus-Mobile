import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';

const Login = ({ onNavigate }) => (
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

      {/* Inputs */}
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
      />

      {/* Texto de recuperación arriba del botón */}
      <TouchableOpacity>
        <Text style={styles.linkTextO}>¿Has olvidado tu contraseña?</Text>
      </TouchableOpacity>

      {/* Imagen iniciarEntrar como botón */}
      {/* Imagen iniciarEntrar como botón con navegación */}
      <TouchableOpacity onPress={() => onNavigate('Authentication')}>
        <Image
          source={require('./Pictures/iniciarEntrar.png')}
          style={styles.iniciarButton}
          resizeMode="contain"
        />
      </TouchableOpacity>

      {/* Texto de registro arriba del encabezado */}
      <TouchableOpacity>
        <Text style={styles.linkTextR}>
          ¿Primera vez aquí? haz clic y regístrate en segundos
        </Text>
      </TouchableOpacity>
    </ScrollView>
  </ImageBackground>
);

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
    marginTop: 100, // reemplaza top:120
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
    marginTop: 20, // reemplaza top:185
  },
  iniciarButton: {
    width: 300,
    height: 60,
    marginVertical: 20,
    marginTop: 30, // reemplaza top:200
  },
  linkTextR: {
    fontSize: 14,
    color: 'hsla(240, 17%, 2%, 1.00)',
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginBottom: 10,
    paddingHorizontal: 75,
    
    marginTop: 40, // reemplaza top:200
  },
  linkTextO: {
    fontSize: 14,
    color: 'hsla(240, 28%, 13%, 1.00)',
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginBottom: 10,
    marginTop: 30, // reemplaza top:200
    right:-50,
  },
});