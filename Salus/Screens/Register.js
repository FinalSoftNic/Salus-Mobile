import React from 'react';
/* Register */
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

const Register = ({ onNavigate }) => (
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

      {/* Botón de guardar al final */}
      <TouchableOpacity style={styles.saveButton} onPress={() => console.log('Guardar registro')}>
        <Image
          source={require('./Pictures/guardaRegis.png')}
          style={styles.saveImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  </View>
);

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    justifyContent: 'space-between', // 👈 asegura que el botón quede al fondo
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
