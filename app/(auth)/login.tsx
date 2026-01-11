import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import Colors from '@/constants/Colors';
import CustomButton from '@/components/common/CustomButton';
export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    router.replace('/(resident)');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Apartment Maintenance</Text>
      <Text style={styles.subtitle}>Login to continue</Text>

      <View style={styles.card}>
        <TextInput
          placeholder="Email"
          placeholderTextColor={Colors.placeholder}
          style={styles.input}
          value={email}
          onChangeText={setEmail}
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
  title="Login"
  onPress={handleLogin}
/>
      </View>

      <TouchableOpacity onPress={() => router.push('/(auth)/register')}>
        <Text style={styles.footerText}>
          Don’t have an account? <Text style={styles.link}>Register</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    paddingHorizontal: 24,
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
