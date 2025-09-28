import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Button } from 'react-native/types_generated/index';

const Home = ( {onNavigate}) => {
 
  return (
    <View style={styles.container}>
      {/*
        === Contenido Fijo Superior (Header) ===
        Contiene elementos con position: 'absolute' (textos y botón de menú)
      */}
      <View style={styles.header}>
        {/* Texto superior izquierdo */}
        <Text style={styles.greetingText}>Bienvenida Aura</Text>
        <Text style={styles.greetingText1}>Lunes 25</Text>

        {/* Botón superior derecho */}
        <TouchableOpacity style={styles.topButton}>
          {/* Asegúrate de que la ruta de la imagen sea correcta */}
          <Image source={require('./Pictures/3boton.png')} style={styles.topButtonImage} />
        </TouchableOpacity>
      </View>

      {/*
        === Contenido Principal con Scroll ===
        El resto del contenido se envuelve en un ScrollView.
      */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Fila 1: Expediente y Próxima Cita (Dos botones grandes en fila) */}
        <View style={styles.row1}>
          <TouchableOpacity style={styles.largeButton} onPress={() => onNavigate('Expediente')}>
            <Image source={require('./Pictures/expediente.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.largeButton} onPress={() => onNavigate('Citas')}>
            <Image source={require('./Pictures/proximacita.png')} style={styles.image} />
          </TouchableOpacity>
        </View>

        {/* Botón 2: Cuadro de Carpeta (Un solo botón grande/ancho) */}
        <TouchableOpacity style={styles.singleButton}>
          <Image source={require('./Pictures/3_cuadroCarp.png')} style={styles.image} />
        </TouchableOpacity>

        {/* Elemento 3: Texto/Imagen Informativa (Elemento visual no interactivo) */}
        <View style={styles.textImageWrapper}>
          <Image source={require('./Pictures/3_1Texto.png')} style={styles.textImage} />
        </View>

        {/*
          === Sección de Últimos Botones Verticales (Con Scroll) ===
          Tres botones apilados en una columna.
        */}
        <View style={styles.lastButtonsSection}>
          
          {/* Último Botón 1: Vacunación (vac.png) */}
          <TouchableOpacity style={styles.lastButton} onPress={() => onNavigate('Campaña')}>
    <Image source={require('./Pictures/vac.png')} style={styles.lastButtonImage} />
</TouchableOpacity>

          {/* Último Botón 2: Información 1 (info.png) */}
          <TouchableOpacity style={styles.lastButton} onPress={() => onNavigate('VPH')}>
            <Image source={require('./Pictures/btnVPH.png')} style={styles.lastButtonImage} />
          </TouchableOpacity>

          {/* Último Botón 3: Información 2 (info.png) */}
          <TouchableOpacity style={styles.lastButton} onPress={() => onNavigate('CancerMama')}>
            <Image source={require('./Pictures/btcancer.png')} style={styles.lastButtonImage} />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  // Contenedor principal
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  

  header: {
    paddingTop: 40,
    height: 120, 
  },

  
  greetingText: {
    position: 'absolute',
    top: 50,
    left: 15,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: '#333',
    zIndex: 10,
  },
  greetingText1: {
    position: 'absolute',
    top: 90,
    left: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'monospace',
    zIndex: 10,
  },
  topButton: {
    position: 'absolute',
    top: 50,
    right: 15,
    width: 50,
    height: 50,
    zIndex: 10,
  },
  topButtonImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  
  // Contenido con Scroll
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 20, // Espacio al final del scroll
  },

  // Fila de dos botones (Expediente y Cita)
  row1: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -10, // Ajuste para acercar al header
  },
  largeButton: {
    marginHorizontal: 10,
    marginVertical: 10,
    width: 150,
    height: 150,
  },

  // Botón individual (Cuadro Carpeta)
  singleButton: {
    marginVertical: 10,
    width: 320,
    height: 250,
    top:-60,
  },

  // Wrapper para la imagen/texto no interactivo
  textImageWrapper: {
    marginVertical: 0,
    width: 320,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20, 
    top:-80,
  },
  textImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  
  // Estilo general para imágenes de tamaño estándar
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    top:0,
  },

  // Sección de botones verticales
  lastButtonsSection: {
    flexDirection: 'column', // Columna vertical
    alignItems: 'center',
    width: '100%',
    top:-80,
  },
  lastButton: {
    width: 350, // Ancho consistente
    height: 120, // Altura para cada botón vertical
    marginVertical: 10,
  },
  lastButtonImage: {
    width: '100%',
    height: '100%', // Usar '100%' aquí si la imagen ya tiene la proporción deseada
    resizeMode: 'contain',
  },
});