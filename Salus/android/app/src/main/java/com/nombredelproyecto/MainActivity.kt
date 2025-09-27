package com.nombredelproyecto

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

  /**
   * Añade este método onCreate
   */
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null) // ← Esto es importante para react-native-screens
  }

  override fun getMainComponentName(): String = "NombreDelProyecto"

  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}