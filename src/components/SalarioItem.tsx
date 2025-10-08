import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSalarios, valoresData } from "../context/CalcsProvider";

type Props = {
  salario: valoresData;
};

export default function SalarioItem({ salario }: Props) {
  const { updateGrade } = useSalarios();
  const [inputValue, setInputValue] = useState(`R$ ${salario.salario.toFixed(2).replace(".", ",")}`);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (!isFocused) {
      setInputValue(`R$ ${salario.salario.toFixed(2).replace(".", ",")}`);
    }
  }, [salario.salario, isFocused]);

  const handleSalarioChange = (text: string) => {
    const digitsOnly = text.replace(/\D/g, "");

    if (digitsOnly === "") {
      setInputValue("");
      updateGrade(salario.id, "salario", 0);
      return;
    }

    const numericValue = parseInt(digitsOnly) / 100;

    const formatted = `R$ ${numericValue.toFixed(2).replace(".", ",")}`;
    setInputValue(formatted);
    updateGrade(salario.id, "salario", numericValue);
  };

  const handleFocus = () => {
    setIsFocused(true);
    if (salario.salario === 0) {
      setInputValue("");
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    const numericValue = parseFloat(inputValue.replace(/[^\d.,]/g, "").replace(",", "."));
    if (!isNaN(numericValue)) {
      setInputValue(`R$ ${numericValue.toFixed(2).replace(".", ",")}`);
    } else {
      setInputValue(`R$ ${salario.salario.toFixed(2).replace(".", ",")}`);
    }
  };

  const handleIncrement = () => {
    const newValue = salario.salario + 100;
    updateGrade(salario.id, "salario", newValue);
  };

  const handleDecrement = () => {
    const newValue = salario.salario - 100;
    updateGrade(salario.id, "salario", newValue);
  };

  return (
    <View style={styles.row}>
      <View style={styles.cell}>
        <Text style={styles.cellText}>Caso 0{salario.id}</Text>
      </View>
      <View style={styles.cell}>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button} onPress={handleDecrement}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={handleSalarioChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            keyboardType="numeric"
            placeholder="R$ 0,00"
          />
          <TouchableOpacity style={styles.button} onPress={handleIncrement}>
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
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    padding: 6,
    fontSize: 12,
    textAlign: "center",
    width: 80,
    backgroundColor: "#fff",
  },
});
