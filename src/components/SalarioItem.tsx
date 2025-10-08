import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSalarios, valoresData } from "../context/CalcsProvider";

type Props = {
  salario: valoresData;
};

export default function SalarioItem({ salario }: Props) {
  const { updateGrade } = useSalarios();

  return (
    <View style={styles.row}>
      <View style={styles.cell}>
        <Text style={styles.cellText}>Caso {salario.id}</Text>
      </View>
      <View style={styles.cell}>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => updateGrade(salario.id, "salario", salario.salario - 100)}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.salarioText}>R$ {salario.salario.toFixed(2)}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => updateGrade(salario.id, "salario", salario.salario + 100)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cell}>
        <Text style={styles.cellText}>R$ {salario.irpfVigente.toFixed(2)}</Text>
      </View>
      <View style={styles.cell}>
        <Text style={styles.cellText}>R$ {salario.irpfProposta.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  cell: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "#ddd",
  },
  cellText: {
    fontSize: 14,
    textAlign: "center",
  },
  buttonGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  button: {
    backgroundColor: "#007AFF",
    width: 40,
    height: 32,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  salarioText: {
    fontSize: 14,
    fontWeight: "600",
    minWidth: 80,
    textAlign: "center",
  },
});
