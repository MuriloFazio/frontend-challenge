import { useState } from 'react';

// Hook customizado para gerenciar localStorage
export function useLocalStorage(key: string, initialValue: number) {
  // Estado para armazenar o valor
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Tenta pegar o item do localStorage
      const item = window.localStorage.getItem(key);
      // Se existe, retorna o valor parseado, senão retorna o valor inicial
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Se der erro, retorna o valor inicial
      console.error(`Erro ao ler localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Função para atualizar o valor
  const setValue = (value: number | ((prev: number) => number)) => {
    try {
      // Permite que value seja uma função (como setState)
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Salva no estado
      setStoredValue(valueToStore);
      // Salva no localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Erro ao salvar no localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};

// Hook customizado para contador persistente
export function usePersistedCounter(key: string, initialValue = 0) {
  const [count, setCount] = useLocalStorage(key, initialValue);

  const increment = () => setCount((prev: number) => prev + 1);
  const decrement = () => setCount((prev: number) => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
};
