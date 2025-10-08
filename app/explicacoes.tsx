import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ExplicacaoScreen() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Tabela Vigente (Atual)</Text>
        <View style={styles.table}>
          <View style={styles.headerRow}>
            <Text style={[styles.headerCell, styles.faixaColumn]}>Faixa Salarial</Text>
            <Text style={[styles.headerCell, styles.aliquotaColumn]}>Alíquota</Text>
            <Text style={[styles.headerCell, styles.deducaoColumn]}>Dedução</Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.cell, styles.faixaColumn]}>Até R$ 2.428,80</Text>
            <Text style={[styles.cell, styles.aliquotaColumn]}>Isento</Text>
            <Text style={[styles.cell, styles.deducaoColumn]}>R$ 0,00</Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.cell, styles.faixaColumn]}>R$ 2.428,81 a R$ 2.826,65</Text>
            <Text style={[styles.cell, styles.aliquotaColumn]}>7,5%</Text>
            <Text style={[styles.cell, styles.deducaoColumn]}>R$ 142,80</Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.cell, styles.faixaColumn]}>R$ 2.826,66 a R$ 3.751,05</Text>
            <Text style={[styles.cell, styles.aliquotaColumn]}>15%</Text>
            <Text style={[styles.cell, styles.deducaoColumn]}>R$ 354,80</Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.cell, styles.faixaColumn]}>R$ 3.751,06 a R$ 4.664,68</Text>
            <Text style={[styles.cell, styles.aliquotaColumn]}>22,5%</Text>
            <Text style={[styles.cell, styles.deducaoColumn]}>R$ 636,13</Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.cell, styles.faixaColumn]}>Acima de R$ 4.664,68</Text>
            <Text style={[styles.cell, styles.aliquotaColumn]}>27,5%</Text>
            <Text style={[styles.cell, styles.deducaoColumn]}>R$ 869,36</Text>
          </View>
        </View>

        <Text style={styles.formula}>Fórmula: IRPF = (Salário × Alíquota) - Dedução</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Tabela Proposta (Reforma Tributária)</Text>
        <View style={styles.table}>
          <View style={styles.headerRow}>
            <Text style={[styles.headerCell, styles.faixaColumn]}>Faixa Salarial</Text>
            <Text style={[styles.headerCell, styles.aliquotaColumn]}>Alíquota</Text>
            <Text style={[styles.headerCell, styles.deducaoColumn]}>Observação</Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.cell, styles.faixaColumn]}>Até R$ 5.000,00</Text>
            <Text style={[styles.cell, styles.aliquotaColumn]}>Isento</Text>
            <Text style={[styles.cell, styles.deducaoColumn]}>Sem desconto</Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.cell, styles.faixaColumn]}>R$ 5.000,01 a R$ 7.350,00</Text>
            <Text style={[styles.cell, styles.aliquotaColumn]}>27,5%</Text>
            <Text style={[styles.cell, styles.deducaoColumn]}>Com desconto progressivo</Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.cell, styles.faixaColumn]}>Acima de R$ 7.350,00</Text>
            <Text style={[styles.cell, styles.aliquotaColumn]}>27,5%</Text>
            <Text style={[styles.cell, styles.deducaoColumn]}>R$ 869,36</Text>
          </View>
        </View>

        <Text style={styles.formula}>Fórmula (R$ 5.000 - R$ 7.350):</Text>
        <Text style={styles.formulaDetail}>
          Desconto Progressivo = (7.350 - Salário) / 2.350{"\n"}
          IRPF = [(Salário × 27,5%) - 869,36] × (1 - Desconto Progressivo)
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Como usar a calculadora</Text>
        <Text style={styles.text}>
          • Use os botões <Text style={styles.bold}>+</Text> e <Text style={styles.bold}>-</Text> para ajustar o salário em incrementos de R$ 100
        </Text>
        <Text style={styles.text}>
          • O IRPF Vigente e IRPF Proposta são calculados automaticamente em tempo real
        </Text>
        <Text style={styles.text}>
          • Compare as duas tabelas para ver o impacto da reforma tributária
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  section: {
    marginBottom: 24,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#007AFF",
  },
  table: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    overflow: "hidden",
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#007AFF",
    padding: 12,
  },
  headerCell: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  cell: {
    fontSize: 13,
    color: "#333",
  },
  faixaColumn: {
    flex: 2,
  },
  aliquotaColumn: {
    flex: 1,
    textAlign: "center",
  },
  deducaoColumn: {
    flex: 1.5,
    textAlign: "right",
  },
  formula: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: "600",
    color: "#555",
    fontStyle: "italic",
  },
  formulaDetail: {
    marginTop: 8,
    fontSize: 13,
    color: "#666",
    fontStyle: "italic",
    lineHeight: 20,
  },
  text: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
    lineHeight: 20,
  },
  bold: {
    fontWeight: "bold",
    color: "#007AFF",
  },
});
