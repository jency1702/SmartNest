import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import { useRouter } from 'expo-router';
import { useState } from 'react';
import Colors from '@/constants/Colors';
import CustomButton from '@/components/common/CustomButton';



export default function RegisterScreen() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [flat, setFlat] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    router.replace('/(auth)/login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Register to raise maintenance requests</Text>

      <View style={styles.card}>
        <TextInput
          placeholder="Full Name"
          placeholderTextColor={Colors.placeholder}
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <TextInput
          placeholder="Email"
          placeholderTextColor={Colors.placeholder}
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Flat Number"
          placeholderTextColor={Colors.placeholder}
          style={styles.input}
          value={flat}
          onChangeText={setFlat}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor={Colors.placeholder}
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <CustomButton
  title="Register"
  onPress={handleRegister}
/>

      </View>

      <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
        <Text style={styles.footerText}>
          Already have an account? <Text style={styles.link}>Login</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.subtitle,
    textAlign: 'center',
    marginBottom: 30,
  },
  card: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 20,
    elevation: 3,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: Colors.background,
  },
  button: {
    backgroundColor: Colors.primary,
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: Colors.background,
    fontSize: 16,
    fontWeight: '600',
  },
  footerText: {
    marginTop: 24,
    textAlign: 'center',
    color: Colors.subtitle,
  },
  link: {
    color: Colors.link,
    fontWeight: '600',
  },
});
