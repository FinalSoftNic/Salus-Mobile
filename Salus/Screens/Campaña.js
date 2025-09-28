import React from 'react';
// Se agrega 'Linking' para abrir URLs externas.
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image, Linking } from 'react-native';

// El componente debe recibir { onNavigate }
const SimpleScreen = ({ onNavigate }) => {
    // Función para abrir el enlace externo
    const openLink = () => {
        const url = 'https://www.minsa.gob.ni/centro-de-medios/noticias/campana-nacional-de-vacunacion-2025#:~:text=El%20Gobierno%20Sandinista%20desarrollar%C3%A1%20la,mayores%20y%20poblaci%C3%B3n%20en%20general';
        Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
    };
    
    return (
        <View style={styles.container}>
            {/* 1. Botón de Regreso Fijo (Header) */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => onNavigate('Home')}>
                    <Text style={styles.backButtonText}>{'< Atrás'}</Text>
                </TouchableOpacity>
            </View>

            {/* 2. Contenido Principal con Scroll para la imagen larga */}
            <ScrollView contentContainerStyle={styles.scrollContent}>
                
                {/* Texto "¡Hola!" */}
              
                {/* Imagen larga de la Jornada */}
                <Image 
                    source={require('./Pictures/Jornada.png')} 
                    style={styles.fullScreenImage} 
                    resizeMode="cover" 
                />
                
                {/* 3. ¡NUEVO! Botón "Más información" con enlace */}
                <TouchableOpacity style={styles.infoButton} onPress={openLink}>
                    {/* Icono de enlace (🔗) agregado antes del texto */}
                    <Text style={styles.infoButtonText}>
                        🔗 Más información
                    </Text>
                </TouchableOpacity>
                
            </ScrollView>
        </View>
    );
};

export default SimpleScreen;

// --- Estilos ---
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    // Estilos del Encabezado Fijo
    header: {
        paddingTop: 50,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        height: 90, 
        justifyContent: 'center',
    },
    backButton: {
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    backButtonText: {
        fontSize: 16,
        color: '#202225ff', // Corregido a un color estándar para enlaces
        fontWeight: '600',
        fontFamily : 'monospace',
    },

    // Estilos del Contenido con Scroll
 

    // Estilo del texto "Hola" (Añadido)
   
    
    fullScreenImage: {
        width: '100%',
        height: 850, 
        resizeMode: 'cover',
        top:150,
    },
    
    // ¡NUEVOS ESTILOS! Para el botón de información
    infoButton: {
        marginTop: 30, // Espacio para separarlo de la imagen
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        backgroundColor: '#f0f0f0', 
        borderWidth: 1,
        borderColor: '#ccc',
    },
    infoButtonText: {
        fontSize: 18,
        color: '#000000ff', 
        fontWeight: '500',
        top:-100,
        right:"-100",
    },
});