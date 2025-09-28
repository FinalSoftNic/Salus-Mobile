import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Welcome from './Screens/Welcome';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Authentication from './Screens/Authentication';
import Home from './Screens/Home';
import VPH from './Screens/VPH';
import MiDiario from './Screens/miDiario';

import Expediente from './Screens/Expediente';
import Citas from './Screens/Citas';
import CancerMama from './Screens/CancerMama';
import Campaña from './Screens/Campaña';
import Ajustes from './Screens/ajustes';



const App = () => {
  const [screen, setScreen] = useState('welcome');

  return (
    <View style={styles.container}>
      {screen === 'welcome' && <Welcome onNavigate={setScreen} />}
      {screen === 'login' && <Login onNavigate={setScreen} />}
      {screen === 'register' && <Register onNavigate={setScreen} />}
      {screen === 'Authentication' && <Authentication onNavigate={setScreen} />}
      {screen === 'Home' && <Home onNavigate={setScreen}/>}

      {screen === 'VPH' && <VPH onNavigate={setScreen} />}
      {screen === 'MiDiario' && <MiDiario onNavigate={setScreen} />}
    
      {screen === 'Expediente' && <Expediente onNavigate={setScreen} />}
      {screen === 'Citas' && <Citas onNavigate={setScreen} />}
      {screen === 'CancerMama' && <CancerMama onNavigate={setScreen} />}
      {screen === 'Campaña' && <Campaña onNavigate={setScreen} />}
      {screen === 'ajustes' && <Ajustes onNavigate={setScreen} />}
      
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});