import { Tabs } from "expo-router";
import React from "react";
import { SalarioProvider } from "../src/context/CalcsProvider";

export default function Layout() {
  return (
    <SalarioProvider>
      <Tabs>
        <Tabs.Screen name="index" options={{ title: "Cálculo" }} />
        <Tabs.Screen name="explicacoes" options={{ title: "Explicações" }} />
      </Tabs>
    </SalarioProvider>
  );
}
