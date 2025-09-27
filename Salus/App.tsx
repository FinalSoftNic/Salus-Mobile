import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Welcome from './Screens/Welcome';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Authentication from './Screens/Authentication';
import Home from './Screens/Home';

const App = () => {
  const [screen, setScreen] = useState('welcome');

  return (
    <View style={styles.container}>
      {screen === 'welcome' && <Welcome onNavigate={setScreen} />}
      {screen === 'login' && <Login onNavigate={setScreen} />}
      {screen === 'register' && <Register onNavigate={setScreen} />}
      {screen === 'Authentication' && <Authentication onNavigate={setScreen} />}
      {screen === 'Home' && <Home/>}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});