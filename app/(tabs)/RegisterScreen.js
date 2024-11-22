import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useAuth } from "./AuthContext"; // Importando o hook do contexto

const RegisterScreen = () => {
  const { register } = useAuth(); // Pegando a função de registro do contexto
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = () => {
    if (name && email) {
      register(name, email);
      alert("Cadastro realizado com sucesso!");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />

      <Button title="Cadastrar" onPress={handleRegister} />

      <Text style={styles.text}>
        {name && email
          ? `Nome: ${name} | E-mail: ${email}`
          : "Preencha os campos acima"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
  },
  text: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default RegisterScreen;
