import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';
import CustomButton from '@/components/common/CustomButton';

export default function ResidentDashboard() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.name}>Resident</Text>
      </View>

      {/* Main Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Maintenance Services</Text>
        <Text style={styles.cardSubtitle}>
          Raise and track your apartment maintenance requests
        </Text>

        <CustomButton
          title="Raise Complaint"
          onPress={() => router.push('/(resident)/raise-complaint')}
        />

        <CustomButton
          title="View Complaint Status"
          onPress={() => router.push('/(resident)/complaint-status')}
        />
      </View>

      {/* Info Section */}
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Need Help?</Text>
        <Text style={styles.infoText}>
          Contact the apartment management if the issue is urgent.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.background,
    padding: 24,
     paddingTop: 40,  
  },
  header: {
    marginBottom: 30,
     alignItems: 'center',  
  },
  welcome: {
    fontSize: 16,
    color: Colors.subtitle,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.primary,
  },
  card: {
    backgroundColor: Colors.card,
    borderRadius: 14,
    padding: 20,
    elevation: 3,
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 6,
  },
  cardSubtitle: {
    fontSize: 14,
    color: Colors.subtitle,
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: Colors.background,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    padding: 16,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.primary,
    marginBottom: 4,
  },
  infoText: {
    fontSize: 14,
    color: Colors.subtitle,
  },
});
