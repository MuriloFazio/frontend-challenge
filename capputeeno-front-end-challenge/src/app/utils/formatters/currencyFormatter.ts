export const currencyFormatter = (valueInCents: number) => {
    const value = valueInCents/100;
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })
};

export const categoryFormatter = (category: string): string => {
    return category === 'mugs' ? 'caneca' : 'camiseta';
};
