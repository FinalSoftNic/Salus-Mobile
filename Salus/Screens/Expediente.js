import React, { useState } from 'react';
// Importamos Modal para la ventana emergente
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, Image, Modal } from 'react-native';

const Expediente = ({ onNavigate }) => {
  // Estado para controlar la visibilidad de la ventana emergente (Modal)
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    // Usamos ImageBackground como contenedor principal
    <ImageBackground
      source={require('./Pictures/expedientees.png')} // Imagen de fondo
      style={styles.background}
      resizeMode="cover"
    >
      {/* 1. Botón de regreso (arriba a la izquierda) */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => onNavigate('Home')}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      {/* 2. La imagen central convertida en BOTÓN que abre el Modal */}
      <View style={styles.centerContainer}>
        <TouchableOpacity 
          onPress={() => setIsModalVisible(true)} // Abre el modal
        >
          <Image
            source={require('./Pictures/exp2.png')}
            style={styles.expImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      
      {/* ========================================================= */}
      {/* 3. VENTANA EMERGENTE (MODAL) */}
      {/* ========================================================= */}
      <Modal
        visible={isModalVisible}
        animationType="fade" // Efecto de aparición suave
        transparent={false} // Necesario para que el modal cubra toda la pantalla
        onRequestClose={() => setIsModalVisible(false)} // Permite cerrar con el botón de atrás de Android
      >
        <ImageBackground
          source={require('./Pictures/xExp.png')} // La imagen que cubre el modal
          style={styles.modalBackground}
          resizeMode="cover"
        >
          {/* Botón 'X' para regresar a la normalidad */}
          <TouchableOpacity 
            style={styles.closeButton} 
            onPress={() => setIsModalVisible(false)} // Cierra el modal
          >
            <Text style={styles.closeText}>X</Text>
          </TouchableOpacity>
        </ImageBackground>
      </Modal>

    </ImageBackground>
  );
};

export default Expediente;

const styles = StyleSheet.create({
  // Estilo para ImageBackground (fondo)
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Contenedor para posicionar la imagen exp2.png
  centerContainer: {
    marginTop: -50, 
    width: '80%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Estilo de la imagen que se convierte en botón (exp2.png)
  expImage: {
    width: 390, // Ajusta el ancho para mejor visualización
    height: 400,   
    top: -80,
    resizeMode: 'contain',
  },
  
  // Estilos del botón de regreso principal
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
    zIndex: 10,
  },
  backText: {
    color: '#333',
    fontSize: 30,
    fontWeight: 'bold',
  },

  // =========================================================
  // ESTILOS DEL MODAL
  // =========================================================
  modalBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    // Nota: El contenido del modal (el botón X) se alinea aquí
  },
  closeButton: {
    position: 'absolute',
    top: 40, 
    right: 20, // Colocado en la esquina superior derecha
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Fondo semitransparente para el botón
    borderRadius: 5,
    zIndex: 20,
  },
  closeText: {
    color: 'white', // La 'X' blanca
    fontSize: 24,
    fontWeight: 'bold',
  },
});