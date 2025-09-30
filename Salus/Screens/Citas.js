import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  TextInput, 
  Modal, 
  Alert 
} from 'react-native';

// Color verde oscuro deseado (Para títulos, texto principal, botones de acción)
const DARK_GREEN = '#001e11'; 

// Color Menta/Casi Blanco (Fondo de los botones de Doctor)
const MINT_WHITE = '#f0fff0'; 
// Color negro para el borde y las letras de los botones de Doctor
const BLACK = '#000000'; 

// Opciones de citas específicas (Doctor y Horario)
const DOCTOR_OPTIONS = {
  ARLEN: { doctor: 'Dr. Arlen Rodríguez', time: '8:00 AM - 12:00 PM' },
  FERNANDO: { doctor: 'Dr. Fernando Arévalo', time: '2:00 PM - 5:00 PM' },
};

// Función utilitaria para generar un ID único
const generateId = () => Math.random().toString(36).substring(2, 9);

const Citas = ({ onNavigate }) => {
  // Estado principal: Almacena el array de citas (datos temporales, SIMULACIÓN)
  const [appointments, setAppointments] = useState([
    { id: 'a1', doctor: 'Dr. Fernado Arevalo (Internista)', date: '2025-10-10', time: '10:00 AM' },
    { id: 'b2', doctor: 'Dra. Arlen Rodriguez (Ginecóloga)', date: '2025-10-15', time: '03:30 PM' },
  ]);
  
  // Estado para controlar la visibilidad del Modal de Crear/Modificar
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  // Estado para el formulario (guarda los datos de la cita nueva o editada)
  const [formData, setFormData] = useState({ id: null, doctor: '', date: '', time: '' });

  // --- Lógica de Apertura de Modal con Selección Previa ---
  const openCreateModal = (doctorKey) => {
    if (doctorKey) {
        // Pre-selecciona Doctor y Hora
        const selectedDoctor = DOCTOR_OPTIONS[doctorKey];
        setFormData({ 
            id: null, 
            doctor: selectedDoctor.doctor, 
            date: '', 
            time: selectedDoctor.time 
        });
    } else {
        // Para el caso de Modificar
        setFormData({ id: null, doctor: '', date: '', time: '' });
    }
    setIsModalVisible(true);
  };

  // --- Lógica de Guardado (SIMULACIÓN DE SOLICITUD) ---
  const handleSaveAppointment = () => {
    if (!formData.doctor || !formData.date || !formData.time) {
      Alert.alert("Error", "Por favor, complete todos los campos (Doctor, Día y Hora).");
      return;
    }

    if (formData.id) {
      // Modificar (Update)
      setAppointments(appointments.map(app => 
        app.id === formData.id ? formData : app
      ));
    } else {
      // Crear (Create)
      const newApp = { ...formData, id: generateId() };
      setAppointments([...appointments, newApp]);
    }
    
    setIsModalVisible(false);
    Alert.alert("Éxito", `Cita ${formData.id ? 'modificada' : 'solicitada'} correctamente.`);
  };

  const handleEdit = (appointment) => {
    setFormData(appointment);
    setIsModalVisible(true);
  };

  const handleDelete = (id) => {
    Alert.alert(
      "Confirmar Cancelación",
      "¿Está seguro de que desea cancelar esta cita?",
      [
        { text: "No", style: "cancel" },
        { 
          text: "Sí, Cancelar", 
          style: "destructive", 
          onPress: () => {
            // Eliminar (Delete)
            setAppointments(appointments.filter(app => app.id !== id));
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      
      {/* Botón de regreso (Flecha, Superior Izquierda) */}
      <TouchableOpacity style={styles.backButton} onPress={() => onNavigate('Home')}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>
      
      <Text style={styles.title}>Mis Citas Médicas</Text>
      
      {/* 1. Botones para Solicitar Cita (Dos botones) */}
      <View style={styles.doctorButtonsRow}>
        <TouchableOpacity 
            style={styles.doctorButton} // Aplicamos los nuevos estilos aquí
            onPress={() => openCreateModal('ARLEN')}
        >
          <Text style={styles.doctorButtonText}>Dr. Arlen R.</Text>
          <Text style={styles.doctorButtonSubtitle}>8:00 AM - 12:00 PM</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.doctorButton} // Aplicamos los nuevos estilos aquí
            onPress={() => openCreateModal('FERNANDO')}
        >
          <Text style={styles.doctorButtonText}>Dr. Fernando A.</Text>
          <Text style={styles.doctorButtonSubtitle}>2:00 PM - 5:00 PM</Text>
        </TouchableOpacity>
      </View>
      {/* FIN DE BOTONES DE SOLICITUD */}
      
      {/* Contenido Principal: Lista de Citas (READ) */}
      <ScrollView style={styles.listContainer}>
        {appointments.length === 0 ? (
          <Text style={styles.emptyText}>No tienes citas agendadas.</Text>
        ) : (
          appointments
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map((app) => (
              <View key={app.id} style={styles.appointmentCard}>
                <Text style={styles.cardDoctor}>{app.doctor}</Text>
                <Text style={styles.cardDetail}>Fecha: {app.date}</Text>
                <Text style={styles.cardDetail}>Hora: {app.time}</Text>
                <View style={styles.cardActions}>
                  {/* Botón Modificar (Update) */}
                  <TouchableOpacity style={[styles.actionButton, styles.editButton]} onPress={() => handleEdit(app)}>
                    <Text style={styles.actionButtonText}>Modificar</Text>
                  </TouchableOpacity>
                  {/* Botón Eliminar (Delete) */}
                  <TouchableOpacity style={[styles.actionButton, styles.deleteButton]} onPress={() => handleDelete(app.id)}>
                    <Text style={styles.actionButtonText}>Eliminar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
        )}
      </ScrollView>
      
      {/* Modal para Crear/Modificar Citas */}
      <Modal
        visible={isModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            
            {/* Cruz para regresar al estado normal */}
            <TouchableOpacity style={styles.modalCloseButton} onPress={() => setIsModalVisible(false)}>
              <Text style={styles.modalCloseText}>X</Text>
            </TouchableOpacity>

            <Text style={styles.modalTitle}>
              {formData.id ? 'Modificar Cita' : 'Solicitar Cita'}
            </Text>

            {/* Formulario */}
            
            {/* Campo de Doctor (Fijo/Deshabilitado) */}
            <TextInput
                style={[styles.modalInput, styles.disabledInput]}
                placeholder="Doctor seleccionado"
                value={formData.doctor}
                editable={false}
            />
            
            {/* Campo de Hora (Fijo/Deshabilitado) */}
            <TextInput
                style={[styles.modalInput, styles.disabledInput]}
                placeholder="Horario seleccionado"
                value={formData.time}
                editable={false}
            />

            {/* INPUT PARA DÍA (manual) */}
            <TextInput
              style={styles.modalInput}
              placeholder="Día de la cita (YYYY-MM-DD)"
              value={formData.date}
              onChangeText={(text) => setFormData({...formData, date: text})}
              keyboardType="numbers-and-punctuation"
              placeholderTextColor="#999"
            />

            {/* Botón Solicitar Cita / Guardar Cambios */}
            <TouchableOpacity style={styles.modalActionButton} onPress={handleSaveAppointment}>
              <Text style={styles.modalActionButtonText}>
                {formData.id ? 'Guardar Cambios' : 'Solicitar Cita'}
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>
      
    </View>
  );
};

export default Citas;

const styles = StyleSheet.create({
  // Color verde oscuro constante
  DARK_GREEN: DARK_GREEN,
  BLACK: '#000000',
  MINT_WHITE: '#f0fff0',
  
  // Contenedor principal
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 60, 
    alignItems: 'center',
  },
  
  // Botón de regreso (Flecha)
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
    zIndex: 10,
  },
  backText: {
    fontSize: 30,
    color: DARK_GREEN, 
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: DARK_GREEN,
    marginBottom: 20,
    marginTop: 0,
    fontFamily: 'monospace',
  },
  
  // Fila para los dos botones de Doctor
  doctorButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
  },

  // Botón de Doctor individual (ESTILOS MODIFICADOS)
  doctorButton: {
    backgroundColor: 'white', // Fondo menta casi blanco
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: '48%', 
    alignItems: 'center',
    // Borde negro
    borderColor: '#000000', 
    borderWidth: 2,
    borderRadius: 8,
  },
  doctorButtonText: {
    color: '#000000', // Letras negras
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    textAlign: 'center',
  },
  doctorButtonSubtitle: {
    color: '#000000', // Letras negras
    fontSize: 12,
    fontFamily: 'monospace',
    textAlign: 'center',
  },

  // Lista de citas
  listContainer: {
    width: '90%',
    flex: 1,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16,
    color: DARK_GREEN,
    fontFamily: 'monospace',
  },
  appointmentCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderLeftWidth: 5,
    borderLeftColor: DARK_GREEN,
    elevation: 3,
  },
  cardDoctor: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: DARK_GREEN,
    fontFamily: 'monospace',
  },
  cardDetail: {
    fontSize: 16,
    color: DARK_GREEN,
    fontFamily: 'monospace',
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  actionButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    marginLeft: 10,
  },
  editButton: {
    backgroundColor: DARK_GREEN,
  },
  deleteButton: {
    backgroundColor: '#8dabffff',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },

  // ===================================
  // Estilos del Modal
  // ===================================
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    width: '85%',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: DARK_GREEN,
    fontFamily: 'monospace',
  },
  
  modalInput: {
    width: '100%',
    height: 50,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    fontFamily: 'monospace',
    color: DARK_GREEN,
  },
  disabledInput: {
    backgroundColor: '#e5e5e5', // Fondo gris para inputs no editables
    fontWeight: 'bold',
    color: DARK_GREEN,
  },
  
  modalActionButton: {
    backgroundColor: DARK_GREEN,
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalActionButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  // Cruz para cerrar
  modalCloseButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    padding: 8,
  },
  modalCloseText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: DARK_GREEN,
    fontFamily: 'monospace',
  },
});