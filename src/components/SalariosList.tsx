import { useRouter } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSalarios } from "../context/CalcsProvider";
import SalarioItem from "./SalarioItem";

export default function SalariosList() {
  const { salario } = useSalarios();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.explainButton}
          onPress={() => router.push("/explicacoes")}
        >
          <Text style={styles.explainButtonText}>Como os cálculos funcionam ?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.table}>
        <View style={styles.headerRow}>
          <View style={styles.headerCell}>
            <Text style={styles.headerText}>Caso</Text>
          </View>
          <View style={styles.headerCell}>
            <Text style={styles.headerText}>Salário</Text>
          </View>
          <View style={styles.headerCell}>
            <Text style={styles.headerText}>IRPF Vigente</Text>
          </View>
          <View style={styles.headerCell}>
            <Text style={styles.headerText}>IRPF Proposta</Text>
          </View>
        </View>
        <FlatList
          data={salario}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <SalarioItem salario={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
  },
  explainButton: {
    backgroundColor: "#28a745",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  explainButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  table: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#007AFF",
    borderBottomWidth: 2,
    borderBottomColor: "#0056b3",
  },
  headerCell: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "#0056b3",
  },
  headerText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});
