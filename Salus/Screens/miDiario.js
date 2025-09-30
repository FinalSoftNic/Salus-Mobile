import React, { useState } from 'react'; // Importamos useState
import { 
  View, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  ImageBackground, 
  Image,
  Modal, // Importamos el componente Modal
} from 'react-native';

const MiDiario = ({onNavigate}) => {
  // Estado para controlar la visibilidad del Modal de la imagen grande
  const [isModalImageVisible, setIsModalImageVisible] = useState(false);

  return (
    <ImageBackground
      source={require('./Pictures/midiarioSal.png')} // Imagen de fondo del diario
      style={styles.background}
      resizeMode="cover" 
    >
      
      {/* --- BOTÓN DE REGRESO (FLECHA) --- */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => onNavigate('Home')} 
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>
      
      {/* --- BOTÓN AGREGAR (btddair.png) --- */}
      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => setIsModalImageVisible(true)} // Abre el modal al tocar
      >
        <Image
          source={require('./Pictures/btdiar.png')} 
          style={styles.addButtonImage}
          resizeMode="contain"
        />
      </TouchableOpacity>

      {/* --- MODAL PARA LA IMAGEN GRANDE (agosto20.png) --- */}
      <Modal
        visible={isModalImageVisible} // Controlado por el estado
        animationType="fade" // O "slide" para un efecto diferente
        transparent={true} // Para que el fondo sea traslúcido si lo deseas
        onRequestClose={() => setIsModalImageVisible(false)} // Permite cerrar con el botón de retroceso de Android
      >
        <View style={styles.fullScreenModalContainer}>
          <ImageBackground
            source={require('./Pictures/agosto20.png')} // La imagen que cubre toda la pantalla
            style={styles.modalBackgroundImage}
            resizeMode="cover"
          >
            {/* Botón "X" para cerrar el modal */}
            <TouchableOpacity 
              style={styles.closeModalButton} 
              onPress={() => setIsModalImageVisible(false)}
            >
              <Text style={styles.closeModalText}>X</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </Modal>
      {/* ---------------------------------------------------- */}
      
    </ImageBackground>
  );
};

export default MiDiario;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
    zIndex: 10, 
  },
  backText: {
    fontSize: 30,
    color: '#333', 
    fontWeight: 'bold',
  },
  
  addButton: {
    // Ya está centrado por el justify/align en el background
    marginTop: 0, 
  },
  addButtonImage: {
    width: 370, 
    height: 150, 
    resizeMode: 'contain',
    top:-90,
  },
  
  // --- ESTILOS DEL MODAL ---
  fullScreenModalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)', // Fondo semi-transparente oscuro para el modal
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start', // Alinea el botón 'X' arriba
    alignItems: 'flex-end',   // Alinea el botón 'X' a la derecha
  },
  closeModalButton: {
    padding: 15,
    marginTop: 40, // Espacio desde la parte superior
    marginRight: 20, // Espacio desde la derecha
    backgroundColor: 'rgba(255,255,255,0.7)', // Fondo semi-transparente para la X
    borderRadius: 20, // Circular para la X
    zIndex: 11, // Asegura que la X esté por encima de la imagen
  },
  closeModalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  // -------------------------

  titleText: { // Si decides usar este, ajusta su posición si es necesario.
    fontSize: 36, 
    fontWeight: 'bold',
    color: 'white', 
  },
});