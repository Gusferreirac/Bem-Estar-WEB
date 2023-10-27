import { format, parseISO } from 'date-fns';

export function formatDateTime(dateTimeString: string) {
    const date = parseISO(dateTimeString); // Converte a string para um objeto Date
    
    return {
        date: format(date, "dd/MM/yyyy"), // Formata a data
        time: format(date, "HH:mm")
    }
}