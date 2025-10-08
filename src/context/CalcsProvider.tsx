import React, { createContext, ReactNode, useContext, useState } from "react";

export type valoresData = {
  id: number;
  salario: number;
  irpfVigente: number;
  irpfProposta: number;
};

type DataContextType = {
  salario: valoresData[];
  updateGrade: (id: number, field: "salario", valor: number) => void;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

const initialData: valoresData[] = [
  { id: 1, salario: 0, irpfVigente: 0, irpfProposta: 0 },
  { id: 2, salario: 0, irpfVigente: 0, irpfProposta: 0 },
  { id: 3, salario: 0, irpfVigente: 0, irpfProposta: 0 },
  { id: 4, salario: 0, irpfVigente: 0, irpfProposta: 0 },
  { id: 5, salario: 0, irpfVigente: 0, irpfProposta: 0 },
];

export const SalarioProvider = ({ children }: { children: ReactNode }) => {
  const [salario, setSalario] = useState<valoresData[]>(initialData);

    const calcDescontoPorposta = (salario: number) => {
    const descontinho = (7350 - salario) / (7350 - 5000)
    const descontoProposta = (salario * (27.5 / 100) - 869.36) * (1 - descontinho)
    return Math.max(0, descontoProposta)
  }

  const calcImpostoVigenteIndividual = (salario: number) => {
    if (salario <= 2428.80) return 0;
    if (salario <= 2826.65) return ((salario * (7.5 / 100)) - 142.80);
    if (salario <= 3751.05) return ((salario * (15 / 100)) - 354.80);
    if (salario <= 4664.68) return ((salario * (22.5 / 100)) - 636.13);
    return ((salario * (27.5 / 100)) - 869.36);
  };

  const calcImpostoPropostaIndividual = (salario: number) => {
    if (salario <= 5000) return 0;
    if (salario <= 7350) return calcDescontoPorposta(salario);
    return ((salario * (27.5 / 100)) - 869.36);
  };

  const updateGrade = (id: number, field: "salario", valor: number) => {
    setSalario((prev) =>
      prev.map((novoSalario) => {
        if (novoSalario.id === id) {
          const salario = Math.max(0, valor);
          return {
            ...novoSalario,
            salario: salario,
            irpfVigente: calcImpostoVigenteIndividual(salario),
            irpfProposta: calcImpostoPropostaIndividual(salario)
          };
        }
        return novoSalario;
      })
    );
  };

  return (
    <DataContext.Provider
      value={{ salario, updateGrade }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useSalarios = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("Erro");
  }
  return context;
};
