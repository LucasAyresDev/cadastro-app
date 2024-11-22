import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { AuthProvider } from "./AuthContext";
import RegisterScreen from "./RegisterScreen";

const App = () => {
  return (
    <AuthProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <RegisterScreen />
      </SafeAreaView>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
});

export default App;
