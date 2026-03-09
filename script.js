// Configuración de materias y talleres
const materias = [
    { nombre: "ARQUI", color: "cadp" },
    { nombre: "MAT2", color: "mat1" },
    { nombre: "TALLER", color: "taller" },
    { nombre: "FOD", color: "fod" },
    { nombre: "Semi-Python", color: "semi" },
    { nombre: "AyED", color: "ayed" }
];

// Turnos de ARQUI (no tocar, ya está bien)
const turnosArqui = [
    {
        id: "1",
        horarios: [
            // Teoría (T)
            { dia: "Miércoles", hora: "8:30 - 9:00", tipo: "T" }, { dia: "Miércoles", hora: "9:00 - 9:30", tipo: "T" }, { dia: "Miércoles", hora: "9:30 - 10:00", tipo: "T" },
            { dia: "Miércoles", hora: "10:00 - 10:30", tipo: "T" }, { dia: "Miércoles", hora: "10:30 - 11:00", tipo: "T" }, { dia: "Miércoles", hora: "11:00 - 11:30", tipo: "T" },
            // Práctica (P)
            { dia: "Martes", hora: "10:00 - 10:30", tipo: "P" }, { dia: "Martes", hora: "10:30 - 11:00", tipo: "P" }, { dia: "Martes", hora: "11:00 - 11:30", tipo: "P" },
            { dia: "Viernes", hora: "10:00 - 10:30", tipo: "P" }, { dia: "Viernes", hora: "10:30 - 11:00", tipo: "P" }, { dia: "Viernes", hora: "11:00 - 11:30", tipo: "P" }
        ]
    },
    {
        id: "2",
        horarios: [
            // Teoría (T)
            { dia: "Miércoles", hora: "11:30 - 12:00", tipo: "T" }, { dia: "Miércoles", hora: "12:00 - 12:30", tipo: "T" }, { dia: "Miércoles", hora: "12:30 - 13:00", tipo: "T" },
            { dia: "Miércoles", hora: "13:00 - 13:30", tipo: "T" }, { dia: "Miércoles", hora: "13:30 - 14:00", tipo: "T" }, { dia: "Miércoles", hora: "14:00 - 14:30", tipo: "T" },
            // Práctica (P)
            { dia: "Martes", hora: "13:30 - 14:00", tipo: "P" }, { dia: "Martes", hora: "14:00 - 14:30", tipo: "P" }, { dia: "Martes", hora: "14:30 - 15:00", tipo: "P" },
            { dia: "Viernes", hora: "13:30 - 14:00", tipo: "P" }, { dia: "Viernes", hora: "14:00 - 14:30", tipo: "P" }, { dia: "Viernes", hora: "14:30 - 15:00", tipo: "P" }
        ]
    },
    {
        id: "3",
        horarios: [
            // Teoría (T)
            { dia: "Miércoles", hora: "18:00 - 18:30", tipo: "T" }, { dia: "Miércoles", hora: "18:30 - 19:00", tipo: "T" }, { dia: "Miércoles", hora: "19:00 - 19:30", tipo: "T" },
            { dia: "Miércoles", hora: "19:30 - 20:00", tipo: "T" }, { dia: "Miércoles", hora: "20:00 - 20:30", tipo: "T" }, { dia: "Miércoles", hora: "20:30 - 21:00", tipo: "T" },
            // Práctica (P)
            { dia: "Martes", hora: "17:00 - 17:30", tipo: "P" }, { dia: "Martes", hora: "17:30 - 18:00", tipo: "P" }, { dia: "Martes", hora: "18:00 - 18:30", tipo: "P" },
            { dia: "Viernes", hora: "17:00 - 17:30", tipo: "P" }, { dia: "Viernes", hora: "17:30 - 18:00", tipo: "P" }, { dia: "Viernes", hora: "18:00 - 18:30", tipo: "P" }
        ]
    },
    {
        id: "4",
        horarios: [
            // Teoría (T)
            { dia: "Miércoles", hora: "14:30 - 15:00", tipo: "T" }, { dia: "Miércoles", hora: "15:00 - 15:30", tipo: "T" }, { dia: "Miércoles", hora: "15:30 - 16:00", tipo: "T" },
            { dia: "Miércoles", hora: "16:00 - 16:30", tipo: "T" }, { dia: "Miércoles", hora: "16:30 - 17:00", tipo: "T" }, { dia: "Miércoles", hora: "17:00 - 17:30", tipo: "T" },
            // Práctica (P)
            { dia: "Martes", hora: "20:30 - 21:00", tipo: "P" }, { dia: "Martes", hora: "21:00 - 21:30", tipo: "P" }, { dia: "Martes", hora: "21:30 - 22:00", tipo: "P" },
            { dia: "Viernes", hora: "20:30 - 21:00", tipo: "P" }, { dia: "Viernes", hora: "21:00 - 21:30", tipo: "P" }, { dia: "Viernes", hora: "21:30 - 22:00", tipo: "P" }
        ]
    }
];

// MAT2: ahora con los horarios de la imagen, tipo T/P
const turnosMat2 = [
    {
        id: "1",
        horarios: [
            // Lunes
            { dia: "Lunes", hora: "8:30 - 9:00", tipo: "T/P" }, { dia: "Lunes", hora: "9:00 - 9:30", tipo: "T/P" }, { dia: "Lunes", hora: "9:30 - 10:00", tipo: "T/P" },
            { dia: "Lunes", hora: "10:00 - 10:30", tipo: "T/P" }, { dia: "Lunes", hora: "10:30 - 11:00", tipo: "T/P" },
            // Jueves
            { dia: "Jueves", hora: "8:30 - 9:00", tipo: "T/P" }, { dia: "Jueves", hora: "9:00 - 9:30", tipo: "T/P" }, { dia: "Jueves", hora: "9:30 - 10:00", tipo: "T/P" },
            { dia: "Jueves", hora: "10:00 - 10:30", tipo: "T/P" }, { dia: "Jueves", hora: "10:30 - 11:00", tipo: "T/P" }
        ]
    },
    {
        id: "2",
        horarios: [
            // Lunes
            { dia: "Lunes", hora: "11:00 - 11:30", tipo: "T/P" }, { dia: "Lunes", hora: "11:30 - 12:00", tipo: "T/P" }, { dia: "Lunes", hora: "12:00 - 12:30", tipo: "T/P" },
            { dia: "Lunes", hora: "12:30 - 13:00", tipo: "T/P" }, { dia: "Lunes", hora: "13:00 - 13:30", tipo: "T/P" },
            // Jueves
            { dia: "Jueves", hora: "11:00 - 11:30", tipo: "T/P" }, { dia: "Jueves", hora: "11:30 - 12:00", tipo: "T/P" }, { dia: "Jueves", hora: "12:00 - 12:30", tipo: "T/P" },
            { dia: "Jueves", hora: "12:30 - 13:00", tipo: "T/P" }, { dia: "Jueves", hora: "13:00 - 13:30", tipo: "T/P" }
        ]
    },
    {
        id: "3",
        horarios: [
            // Lunes
            { dia: "Lunes", hora: "13:30 - 14:00", tipo: "T/P" }, { dia: "Lunes", hora: "14:00 - 14:30", tipo: "T/P" }, { dia: "Lunes", hora: "14:30 - 15:00", tipo: "T/P" },
            { dia: "Lunes", hora: "15:00 - 15:30", tipo: "T/P" }, { dia: "Lunes", hora: "15:30 - 16:00", tipo: "T/P" },
            // Jueves
            { dia: "Jueves", hora: "13:30 - 14:00", tipo: "T/P" }, { dia: "Jueves", hora: "14:00 - 14:30", tipo: "T/P" }, { dia: "Jueves", hora: "14:30 - 15:00", tipo: "T/P" },
            { dia: "Jueves", hora: "15:00 - 15:30", tipo: "T/P" }, { dia: "Jueves", hora: "15:30 - 16:00", tipo: "T/P" }
        ]
    },
    {
        id: "4",
        horarios: [
            // Lunes
            { dia: "Lunes", hora: "16:00 - 16:30", tipo: "T/P" }, { dia: "Lunes", hora: "16:30 - 17:00", tipo: "T/P" }, { dia: "Lunes", hora: "17:00 - 17:30", tipo: "T/P" },
            { dia: "Lunes", hora: "17:30 - 18:00", tipo: "T/P" }, { dia: "Lunes", hora: "18:00 - 18:30", tipo: "T/P" },
            // Jueves
            { dia: "Jueves", hora: "16:00 - 16:30", tipo: "T/P" }, { dia: "Jueves", hora: "16:30 - 17:00", tipo: "T/P" }, { dia: "Jueves", hora: "17:00 - 17:30", tipo: "T/P" },
            { dia: "Jueves", hora: "17:30 - 18:00", tipo: "T/P" }, { dia: "Jueves", hora: "18:00 - 18:30", tipo: "T/P" }
        ]
    },
    {
        id: "5",
        horarios: [
            // Lunes
            { dia: "Lunes", hora: "18:30 - 19:00", tipo: "T/P" }, { dia: "Lunes", hora: "19:00 - 19:30", tipo: "T/P" }, { dia: "Lunes", hora: "19:30 - 20:00", tipo: "T/P" },
            { dia: "Lunes", hora: "20:00 - 20:30", tipo: "T/P" }, { dia: "Lunes", hora: "20:30 - 21:00", tipo: "T/P" },
            // Jueves
            { dia: "Jueves", hora: "18:30 - 19:00", tipo: "T/P" }, { dia: "Jueves", hora: "19:00 - 19:30", tipo: "T/P" }, { dia: "Jueves", hora: "19:30 - 20:00", tipo: "T/P" },
            { dia: "Jueves", hora: "20:00 - 20:30", tipo: "T/P" }, { dia: "Jueves", hora: "20:30 - 21:00", tipo: "T/P" }
        ]
    }
];

// Turnos de TALLER (unificados T/P, revisados según la imagen)
const turnosTaller = [
    {
        id: "TA",
        horarios: [
            { dia: "Lunes", hora: "8:00 - 8:30", tipo: "T/P" }, { dia: "Lunes", hora: "8:30 - 9:00", tipo: "T/P" }, { dia: "Lunes", hora: "9:00 - 9:30", tipo: "T/P" },
            { dia: "Jueves", hora: "8:00 - 8:30", tipo: "T/P" }, { dia: "Jueves", hora: "8:30 - 9:00", tipo: "T/P" }, { dia: "Jueves", hora: "9:00 - 9:30", tipo: "T/P" }
        ]
    },
    {
        id: "TB",
        horarios: [
            { dia: "Lunes", hora: "9:30 - 10:00", tipo: "T/P" }, { dia: "Lunes", hora: "10:00 - 10:30", tipo: "T/P" }, { dia: "Lunes", hora: "10:30 - 11:00", tipo: "T/P" },
            { dia: "Jueves", hora: "9:30 - 10:00", tipo: "T/P" }, { dia: "Jueves", hora: "10:00 - 10:30", tipo: "T/P" }, { dia: "Jueves", hora: "10:30 - 11:00", tipo: "T/P" }
        ]
    },
    {
        id: "TC",
        horarios: [
            { dia: "Lunes", hora: "11:00 - 11:30", tipo: "T/P" }, { dia: "Lunes", hora: "11:30 - 12:00", tipo: "T/P" }, { dia: "Lunes", hora: "12:00 - 12:30", tipo: "T/P" },
            { dia: "Miércoles", hora: "11:00 - 11:30", tipo: "T/P" }, { dia: "Miércoles", hora: "11:30 - 12:00", tipo: "T/P" }, { dia: "Miércoles", hora: "12:00 - 12:30", tipo: "T/P" }
        ]
    },
    {
        id: "TD",
        horarios: [
            { dia: "Lunes", hora: "12:30 - 13:00", tipo: "T/P" }, { dia: "Lunes", hora: "13:00 - 13:30", tipo: "T/P" }, { dia: "Lunes", hora: "13:30 - 14:00", tipo: "T/P" },
            { dia: "Miércoles", hora: "12:30 - 13:00", tipo: "T/P" }, { dia: "Miércoles", hora: "13:00 - 13:30", tipo: "T/P" }, { dia: "Miércoles", hora: "13:30 - 14:00", tipo: "T/P" }
        ]
    },
    {
        id: "TE",
        horarios: [
            { dia: "Martes", hora: "8:00 - 8:30", tipo: "T/P" }, { dia: "Martes", hora: "8:30 - 9:00", tipo: "T/P" }, { dia: "Martes", hora: "9:00 - 9:30", tipo: "T/P" },
            { dia: "Viernes", hora: "8:00 - 8:30", tipo: "T/P" }, { dia: "Viernes", hora: "8:30 - 9:00", tipo: "T/P" }, { dia: "Viernes", hora: "9:00 - 9:30", tipo: "T/P" }
        ]
    },
    {
        id: "TF",
        horarios: [
            { dia: "Martes", hora: "9:30 - 10:00", tipo: "T/P" }, { dia: "Martes", hora: "10:00 - 10:30", tipo: "T/P" }, { dia: "Martes", hora: "10:30 - 11:00", tipo: "T/P" },
            { dia: "Viernes", hora: "9:30 - 10:00", tipo: "T/P" }, { dia: "Viernes", hora: "10:00 - 10:30", tipo: "T/P" }, { dia: "Viernes", hora: "10:30 - 11:00", tipo: "T/P" }
        ]
    },
    {
        id: "TG",
        horarios: [
            { dia: "Martes", hora: "15:00 - 15:30", tipo: "T/P" }, { dia: "Martes", hora: "15:30 - 16:00", tipo: "T/P" }, { dia: "Martes", hora: "16:00 - 16:30", tipo: "T/P" },
            { dia: "Viernes", hora: "15:00 - 15:30", tipo: "T/P" }, { dia: "Viernes", hora: "15:30 - 16:00", tipo: "T/P" }, { dia: "Viernes", hora: "16:00 - 16:30", tipo: "T/P" }
        ]
    },
    {
        id: "TH",
        horarios: [
            { dia: "Martes", hora: "16:30 - 17:00", tipo: "T/P" }, { dia: "Martes", hora: "17:00 - 17:30", tipo: "T/P" }, { dia: "Martes", hora: "17:30 - 18:00", tipo: "T/P" },
            { dia: "Viernes", hora: "16:30 - 17:00", tipo: "T/P" }, { dia: "Viernes", hora: "17:00 - 17:30", tipo: "T/P" }, { dia: "Viernes", hora: "17:30 - 18:00", tipo: "T/P" }
        ]
    },
    {
        id: "TI",
        horarios: [
            { dia: "Miércoles", hora: "18:00 - 18:30", tipo: "T/P" }, { dia: "Miércoles", hora: "18:30 - 19:00", tipo: "T/P" }, { dia: "Miércoles", hora: "19:00 - 19:30", tipo: "T/P" },
            { dia: "Viernes", hora: "18:00 - 18:30", tipo: "T/P" }, { dia: "Viernes", hora: "18:30 - 19:00", tipo: "T/P" }, { dia: "Viernes", hora: "19:00 - 19:30", tipo: "T/P" }
        ]
    },
    {
        id: "TJ",
        horarios: [
            { dia: "Miércoles", hora: "19:30 - 20:00", tipo: "T/P" }, { dia: "Miércoles", hora: "20:00 - 20:30", tipo: "T/P" }, { dia: "Miércoles", hora: "20:30 - 21:00", tipo: "T/P" },
            { dia: "Viernes", hora: "19:30 - 20:00", tipo: "T/P" }, { dia: "Viernes", hora: "20:00 - 20:30", tipo: "T/P" }, { dia: "Viernes", hora: "20:30 - 21:00", tipo: "T/P" }
        ]
    },
    {
        id: "TK",
        horarios: [
            { dia: "Martes", hora: "11:00 - 11:30", tipo: "T/P" }, { dia: "Martes", hora: "11:30 - 12:00", tipo: "T/P" }, { dia: "Martes", hora: "12:00 - 12:30", tipo: "T/P" },
            { dia: "Viernes", hora: "11:00 - 11:30", tipo: "T/P" }, { dia: "Viernes", hora: "11:30 - 12:00", tipo: "T/P" }, { dia: "Viernes", hora: "12:00 - 12:30", tipo: "T/P" }
        ]
    },
    {
        id: "TL",
        horarios: [
            { dia: "Martes", hora: "12:30 - 13:00", tipo: "T/P" }, { dia: "Martes", hora: "13:00 - 13:30", tipo: "T/P" }, { dia: "Martes", hora: "13:30 - 14:00", tipo: "T/P" },
            { dia: "Viernes", hora: "12:30 - 13:00", tipo: "T/P" }, { dia: "Viernes", hora: "13:00 - 13:30", tipo: "T/P" }, { dia: "Viernes", hora: "13:30 - 14:00", tipo: "T/P" }
        ]
    },
    {
        id: "TM",
        horarios: [
            { dia: "Lunes", hora: "14:00 - 14:30", tipo: "T/P" }, { dia: "Lunes", hora: "14:30 - 15:00", tipo: "T/P" }, { dia: "Lunes", hora: "15:00 - 15:30", tipo: "T/P" },
            { dia: "Miércoles", hora: "14:00 - 14:30", tipo: "T/P" }, { dia: "Miércoles", hora: "14:30 - 15:00", tipo: "T/P" }, { dia: "Miércoles", hora: "15:00 - 15:30", tipo: "T/P" }
        ]
    },
    {
        id: "TN",
        horarios: [
            { dia: "Lunes", hora: "15:30 - 16:00", tipo: "T/P" }, { dia: "Lunes", hora: "16:00 - 16:30", tipo: "T/P" }, { dia: "Lunes", hora: "16:30 - 17:00", tipo: "T/P" },
            { dia: "Miércoles", hora: "15:30 - 16:00", tipo: "T/P" }, { dia: "Miércoles", hora: "16:00 - 16:30", tipo: "T/P" }, { dia: "Miércoles", hora: "16:30 - 17:00", tipo: "T/P" }
        ]
    },
    {
        id: "TO",
        horarios: [
            { dia: "Lunes", hora: "17:00 - 17:30", tipo: "T/P" }, { dia: "Lunes", hora: "17:30 - 18:00", tipo: "T/P" }, { dia: "Lunes", hora: "18:00 - 18:30", tipo: "T/P" },
            { dia: "Martes", hora: "17:00 - 17:30", tipo: "T/P" }, { dia: "Martes", hora: "17:30 - 18:00", tipo: "T/P" }, { dia: "Martes", hora: "18:00 - 18:30", tipo: "T/P" }
        ]
    },
    {
        id: "TP",
        horarios: [
            { dia: "Lunes", hora: "18:30 - 19:00", tipo: "T/P" }, { dia: "Lunes", hora: "19:00 - 19:30", tipo: "T/P" }, { dia: "Lunes", hora: "19:30 - 20:00", tipo: "T/P" },
            { dia: "Martes", hora: "18:30 - 19:00", tipo: "T/P" }, { dia: "Martes", hora: "19:00 - 19:30", tipo: "T/P" }, { dia: "Martes", hora: "19:30 - 20:00", tipo: "T/P" }
        ]
    }
];

// Turnos de FOD (teoría y práctica vinculadas)
const turnosFOD = [
    {
        id: "1",
        horarios: [
            // Teoría (T) - turno mañana
            { dia: "Viernes", hora: "8:30 - 9:00", tipo: "T" }, { dia: "Viernes", hora: "9:00 - 9:30", tipo: "T" }, { dia: "Viernes", hora: "9:30 - 10:00", tipo: "T" }, { dia: "Viernes", hora: "10:00 - 10:30", tipo: "T" },
            // Práctica (P) - turno mañana
            { dia: "Martes", hora: "11:00 - 11:30", tipo: "P" }, { dia: "Martes", hora: "11:30 - 12:00", tipo: "P" }, { dia: "Martes", hora: "12:00 - 12:30", tipo: "P" }, { dia: "Martes", hora: "12:30 - 13:00", tipo: "P" }
        ]
    },
    {
        id: "2",
        horarios: [
            // Teoría (T) - turno tarde
            { dia: "Jueves", hora: "14:30 - 15:00", tipo: "T" }, { dia: "Jueves", hora: "15:00 - 15:30", tipo: "T" }, { dia: "Jueves", hora: "15:30 - 16:00", tipo: "T" }, { dia: "Jueves", hora: "16:00 - 16:30", tipo: "T" },
            // Práctica (P) - turno tarde
            { dia: "Martes", hora: "18:00 - 18:30", tipo: "P" }, { dia: "Martes", hora: "18:30 - 19:00", tipo: "P" }, { dia: "Martes", hora: "19:00 - 19:30", tipo: "P" }, { dia: "Martes", hora: "19:30 - 20:00", tipo: "P" }
        ]
    }
];

// Turnos de Semi-Python (teoría y práctica vinculadas)
const turnosSemiPython = [
    {
        id: "1",
        horarios: [
            // Teoría (T) - turno mañana
            { dia: "Martes", hora: "8:30 - 9:00", tipo: "T" }, { dia: "Martes", hora: "9:00 - 9:30", tipo: "T" }, { dia: "Martes", hora: "9:30 - 10:00", tipo: "T" }, { dia: "Martes", hora: "10:00 - 10:30", tipo: "T" },
            // Práctica (P) - turno mañana
            { dia: "Jueves", hora: "8:00 - 8:30", tipo: "P" }, { dia: "Jueves", hora: "8:30 - 9:00", tipo: "P" }, { dia: "Jueves", hora: "9:00 - 9:30", tipo: "P" }, { dia: "Jueves", hora: "9:30 - 10:00", tipo: "P" }
        ]
    },
    {
        id: "2",
        horarios: [
            // Teoría (T) - turno tarde
            { dia: "Martes", hora: "15:00 - 15:30", tipo: "T" }, { dia: "Martes", hora: "15:30 - 16:00", tipo: "T" }, { dia: "Martes", hora: "16:00 - 16:30", tipo: "T" }, { dia: "Martes", hora: "16:30 - 17:00", tipo: "T" },
            // Práctica (P) - turno tarde
            { dia: "Jueves", hora: "16:00 - 16:30", tipo: "P" }, { dia: "Jueves", hora: "16:30 - 17:00", tipo: "P" }, { dia: "Jueves", hora: "17:00 - 17:30", tipo: "P" }, { dia: "Jueves", hora: "17:30 - 18:00", tipo: "P" }
        ]
    }
];

// Turnos de AyED (teoría y práctica por separado)
const turnosAyEDTeoria = [
    {
        id: "TM", // turno mañana
        horarios: [
            { dia: "Lunes", hora: "11:00 - 11:30", tipo: "T" }, { dia: "Lunes", hora: "11:30 - 12:00", tipo: "T" }, { dia: "Lunes", hora: "12:00 - 12:30", tipo: "T" }, { dia: "Lunes", hora: "12:30 - 13:00", tipo: "T" },
            { dia: "Jueves", hora: "12:30 - 13:00", tipo: "T" }, { dia: "Jueves", hora: "13:00 - 13:30", tipo: "T" }, { dia: "Jueves", hora: "13:30 - 14:00", tipo: "T" }, { dia: "Jueves", hora: "14:00 - 14:30", tipo: "T" }
        ]
    },
    {
        id: "TT", // turno tarde
        horarios: [
            { dia: "Martes", hora: "16:30 - 17:00", tipo: "T" }, { dia: "Martes", hora: "17:00 - 17:30", tipo: "T" }, { dia: "Martes", hora: "17:30 - 18:00", tipo: "T" }, { dia: "Martes", hora: "18:00 - 18:30", tipo: "T" },
            { dia: "Miércoles", hora: "17:00 - 17:30", tipo: "T" }, { dia: "Miércoles", hora: "17:30 - 18:00", tipo: "T" }, { dia: "Miércoles", hora: "18:00 - 18:30", tipo: "T" }, { dia: "Miércoles", hora: "18:30 - 19:00", tipo: "T" }
        ]
    }
];

const turnosAyEDPractica = [
    {
        id: "P1",
        horarios: [
            { dia: "Lunes", hora: "14:00 - 14:30", tipo: "P" }, { dia: "Lunes", hora: "14:30 - 15:00", tipo: "P" }, { dia: "Lunes", hora: "15:00 - 15:30", tipo: "P" }, { dia: "Lunes", hora: "15:30 - 16:00", tipo: "P" }
        ]
    },
    {
        id: "P2",
        horarios: [
            { dia: "Martes", hora: "9:00 - 9:30", tipo: "P" }, { dia: "Martes", hora: "9:30 - 10:00", tipo: "P" }, { dia: "Martes", hora: "10:00 - 10:30", tipo: "P" }, { dia: "Martes", hora: "10:30 - 11:00", tipo: "P" }
        ]
    },
    {
        id: "P3",
        horarios: [
            { dia: "Martes", hora: "14:00 - 14:30", tipo: "P" }, { dia: "Martes", hora: "14:30 - 15:00", tipo: "P" }, { dia: "Martes", hora: "15:00 - 15:30", tipo: "P" }, { dia: "Martes", hora: "15:30 - 16:00", tipo: "P" }
        ]
    },
    {
        id: "P4",
        horarios: [
            { dia: "Jueves", hora: "10:00 - 10:30", tipo: "P" }, { dia: "Jueves", hora: "10:30 - 11:00", tipo: "P" }, { dia: "Jueves", hora: "11:00 - 11:30", tipo: "P" }, { dia: "Jueves", hora: "11:30 - 12:00", tipo: "P" }
        ]
    },
    {
        id: "P5",
        horarios: [
            { dia: "Jueves", hora: "18:00 - 18:30", tipo: "P" }, { dia: "Jueves", hora: "18:30 - 19:00", tipo: "P" }, { dia: "Jueves", hora: "19:00 - 19:30", tipo: "P" }, { dia: "Jueves", hora: "19:30 - 20:00", tipo: "P" }
        ]
    },
    {
        id: "P6",
        horarios: [
            { dia: "Viernes", hora: "14:00 - 14:30", tipo: "P" }, { dia: "Viernes", hora: "14:30 - 15:00", tipo: "P" }, { dia: "Viernes", hora: "15:00 - 15:30", tipo: "P" }, { dia: "Viernes", hora: "15:30 - 16:00", tipo: "P" }
        ]
    }
];

// Horas y días base (todas las posibles)

// Horas y días base (todas las posibles)
const todasLasHoras = [
    "8:00 - 8:30", "8:30 - 9:00", "9:00 - 9:30", "9:30 - 10:00", "10:00 - 10:30",
    "10:30 - 11:00", "11:00 - 11:30", "11:30 - 12:00", "12:00 - 12:30", "12:30 - 13:00",
    "13:00 - 13:30", "13:30 - 14:00", "14:00 - 14:30", "14:30 - 15:00", "15:00 - 15:30",
    "15:30 - 16:00", "16:00 - 16:30", "16:30 - 17:00", "17:00 - 17:30", "17:30 - 18:00",
    "18:00 - 18:30", "18:30 - 19:00", "19:00 - 19:30", "19:30 - 20:00", "20:00 - 20:30",
    "20:30 - 21:00", "21:00 - 21:30", "21:30 - 22:00"
];

const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

// Estado de selección
let materiasSeleccionadas = {
    ARQUI: false,
    MAT2: false,
    TALLER: false,
    FOD: false,
    "Semi-Python": false
};
let turnosSeleccionados = {
    ARQUI: "",
    MAT2: "",
    TALLER: "",
    FOD: "",
    "Semi-Python": "",
    "AyED": {
        teoria: "",
        practica: ""
    }
};

// Función para saber si hay clase de una materia en ese día/hora
function hayMateria(materia, dia, hora) {
    if (materia === "AyED") {
        if (!materiasSeleccionadas.AyED) return null;
        const tId = turnosSeleccionados.AyED.teoria;
        const pId = turnosSeleccionados.AyED.practica;
        if (tId) {
            const turnoT = turnosAyEDTeoria.find(t => t.id === tId);
            if (turnoT && turnoT.horarios.some(h => h.dia === dia && h.hora === hora)) return "T";
        }
        if (pId) {
            const turnoP = turnosAyEDPractica.find(t => t.id === pId);
            if (turnoP && turnoP.horarios.some(h => h.dia === dia && h.hora === hora)) return "P";
        }
        return null;
    }

    let turnosArr = materia === "ARQUI" ? turnosArqui :
                    materia === "MAT2" ? turnosMat2 :
                    materia === "FOD" ? turnosFOD :
                    materia === "Semi-Python" ? turnosSemiPython :
                    turnosTaller;
    let turnoId = turnosSeleccionados[materia];
    if (!materiasSeleccionadas[materia] || !turnoId) return null;
    const turno = turnosArr.find(t => t.id === turnoId);
    if (!turno) return null;
    const bloque = turno.horarios.find(h => h.dia === dia && h.hora === hora);
    return bloque ? bloque.tipo : null;
}

// Reemplaza la variable 'horas' por una función que calcule el rango visible dinámicamente
function obtenerHorasVisibles() {
    // Busca los horarios activos según materias y turnos seleccionados
    let bloques = [];
    materias.forEach(m => {
        if (!materiasSeleccionadas[m.nombre]) return;
        if (m.nombre === "AyED") {
            if (!materiasSeleccionadas.AyED) return;
            const tId = turnosSeleccionados.AyED.teoria;
            const pId = turnosSeleccionados.AyED.practica;
            if (tId) {
                const turnoT = turnosAyEDTeoria.find(t => t.id === tId);
                if (turnoT) turnoT.horarios.forEach(h => { if (!bloques.includes(h.hora)) bloques.push(h.hora); });
            }
            if (pId) {
                const turnoP = turnosAyEDPractica.find(t => t.id === pId);
                if (turnoP) turnoP.horarios.forEach(h => { if (!bloques.includes(h.hora)) bloques.push(h.hora); });
            }
            return;
        }

        let turnosArr = m.nombre === "ARQUI" ? turnosArqui :
                        m.nombre === "MAT2" ? turnosMat2 :
                        m.nombre === "FOD" ? turnosFOD :
                        m.nombre === "Semi-Python" ? turnosSemiPython :
                        turnosTaller;
        let turnoId = turnosSeleccionados[m.nombre];
        if (!turnoId) return;
        const turno = turnosArr.find(t => t.id === turnoId);
        if (!turno) return;
        turno.horarios.forEach(h => {
            if (!bloques.includes(h.hora)) bloques.push(h.hora);
        });
    });
    if (bloques.length === 0) return todasLasHoras; // Si nada seleccionado, muestra todo

    // Ordena los bloques según el orden de todasLasHoras
    bloques = bloques.sort((a, b) => todasLasHoras.indexOf(a) - todasLasHoras.indexOf(b));
    // Encuentra el índice mínimo y máximo
    let min = todasLasHoras.indexOf(bloques[0]);
    let max = todasLasHoras.indexOf(bloques[bloques.length - 1]);
    // Muestra desde un bloque antes del primero hasta el último (o el primero si ya es el primero)
    min = Math.max(0, min - 1);
    return todasLasHoras.slice(min, max + 1);
}

// Modifica la función generarTabla para usar obtenerHorasVisibles()
function generarTabla() {
    let horas = obtenerHorasVisibles();
    let html = '<table><tr><th>Horario</th>';
    dias.forEach(dia => html += `<th>${dia}</th>`);
    html += '</tr>';

    horas.forEach(hora => {
        html += `<tr><td>${hora}</td>`;
        dias.forEach(dia => {
            let presentes = [];
            materias.forEach(m => {
                const tipo = hayMateria(m.nombre, dia, hora);
                if (tipo) presentes.push({ nombre: m.nombre, color: m.color, tipo });
            });

            let cell = "";
            if (presentes.length === 0) {
                cell = "<td></td>";
            } else if (presentes.length === 1) {
                let mat = presentes[0];
                cell = `<td class="${mat.color}">${mat.nombre} (${mat.tipo})</td>`;
            } else {
                // Superposición: rojo
                cell = `<td class="superpuesto">${presentes.map(mat =>
                    `<span class="${mat.color}">${mat.nombre} (${mat.tipo})</span>`
                ).join('<br>')}</td>`;
            }
            html += cell;
        });
        html += "</tr>";
    });

    html += "</table>";
    document.getElementById("tabla-horario").innerHTML = html;
}

// Eventos de la botonera HTML
document.addEventListener("DOMContentLoaded", function () {
    // Botones de materia
    document.getElementById("btn-arqui").addEventListener("click", function () {
        materiasSeleccionadas.ARQUI = !materiasSeleccionadas.ARQUI;
        this.classList.toggle("active", materiasSeleccionadas.ARQUI);
        document.getElementById("turnoSelect-arqui").style.display = materiasSeleccionadas.ARQUI ? "inline" : "none";
        generarTabla();
    });
    document.getElementById("btn-mat2").addEventListener("click", function () {
        materiasSeleccionadas.MAT2 = !materiasSeleccionadas.MAT2;
        this.classList.toggle("active", materiasSeleccionadas.MAT2);
        document.getElementById("turnoSelect-mat2").style.display = materiasSeleccionadas.MAT2 ? "inline" : "none";
        generarTabla();
    });
    document.getElementById("btn-taller").addEventListener("click", function () {
        materiasSeleccionadas.TALLER = !materiasSeleccionadas.TALLER;
        this.classList.toggle("active", materiasSeleccionadas.TALLER);
        document.getElementById("turnoSelect-taller").style.display = materiasSeleccionadas.TALLER ? "inline" : "none";
        generarTabla();
    });
    document.getElementById("btn-fod").addEventListener("click", function () {
        materiasSeleccionadas.FOD = !materiasSeleccionadas.FOD;
        this.classList.toggle("active", materiasSeleccionadas.FOD);
        document.getElementById("turnoSelect-fod").style.display = materiasSeleccionadas.FOD ? "inline" : "none";
        generarTabla();
    });
    document.getElementById("btn-semi").addEventListener("click", function () {
        materiasSeleccionadas["Semi-Python"] = !materiasSeleccionadas["Semi-Python"];
        this.classList.toggle("active", materiasSeleccionadas["Semi-Python"]);
        document.getElementById("turnoSelect-semi").style.display = materiasSeleccionadas["Semi-Python"] ? "inline" : "none";
        generarTabla();
    });
    document.getElementById("btn-ayed").addEventListener("click", function () {
        materiasSeleccionadas.AyED = !materiasSeleccionadas.AyED;
        this.classList.toggle("active", materiasSeleccionadas.AyED);
        let visible = materiasSeleccionadas.AyED ? "inline" : "none";
        document.getElementById("turnoSelect-ayed-teoria").style.display = visible;
        document.getElementById("turnoSelect-ayed-practica").style.display = visible;
        generarTabla();
    });

    // Select de turnos por materia
    document.getElementById("turnoSelect-arqui").addEventListener("change", function () {
        turnosSeleccionados.ARQUI = this.value;
        generarTabla();
    });
    document.getElementById("turnoSelect-mat2").addEventListener("change", function () {
        turnosSeleccionados.MAT2 = this.value;
        generarTabla();
    });
    document.getElementById("turnoSelect-taller").addEventListener("change", function () {
        turnosSeleccionados.TALLER = this.value;
        generarTabla();
    });
    document.getElementById("turnoSelect-fod").addEventListener("change", function () {
        turnosSeleccionados.FOD = this.value;
        generarTabla();
    });
    document.getElementById("turnoSelect-semi").addEventListener("change", function () {
        turnosSeleccionados["Semi-Python"] = this.value;
        generarTabla();
    });
    document.getElementById("turnoSelect-ayed-teoria").addEventListener("change", function () {
        turnosSeleccionados.AyED.teoria = this.value;
        generarTabla();
    });
    document.getElementById("turnoSelect-ayed-practica").addEventListener("change", function () {
        turnosSeleccionados.AyED.practica = this.value;
        generarTabla();
    });

    // Inicializa selects
    inicializarSelects();
    generarTabla();
});

// Inicializa los selects de turnos por materia
function inicializarSelects() {
    // ARQUI
    let selectArqui = document.getElementById("turnoSelect-arqui");
    selectArqui.innerHTML = '<option value="">Selecciona turno</option>';
    turnosArqui.forEach(t => {
        const opt = document.createElement("option");
        opt.value = t.id;
        opt.textContent = t.id;
        selectArqui.appendChild(opt);
    });
    selectArqui.style.display = "none";

    // MAT2
    let selectMat2 = document.getElementById("turnoSelect-mat2");
    selectMat2.innerHTML = '<option value="">Selecciona turno</option>';
    turnosMat2.forEach(t => {
        const opt = document.createElement("option");
        opt.value = t.id;
        opt.textContent = t.id;
        selectMat2.appendChild(opt);
    });
    selectMat2.style.display = "none";

    // TALLER
    let selectTaller = document.getElementById("turnoSelect-taller");
    selectTaller.innerHTML = '<option value="">Selecciona turno</option>';
    turnosTaller.forEach(t => {
        const opt = document.createElement("option");
        opt.value = t.id;
        opt.textContent = t.id;
        selectTaller.appendChild(opt);
    });
    selectTaller.style.display = "none";

    // FOD
    let selectFod = document.getElementById("turnoSelect-fod");
    selectFod.innerHTML = '<option value="">Selecciona turno</option>';
    turnosFOD.forEach(t => {
        const opt = document.createElement("option");
        opt.value = t.id;
        opt.textContent = t.id;
        selectFod.appendChild(opt);
    });
    selectFod.style.display = "none";

    // Semi-Python
    let selectSemi = document.getElementById("turnoSelect-semi");
    selectSemi.innerHTML = '<option value="">Selecciona turno</option>';
    turnosSemiPython.forEach(t => {
        const opt = document.createElement("option");
        opt.value = t.id;
        opt.textContent = t.id;
        selectSemi.appendChild(opt);
    });
    selectSemi.style.display = "none";

    // AyED
    let selectAyEDTeoria = document.getElementById("turnoSelect-ayed-teoria");
    selectAyEDTeoria.innerHTML = '<option value="">Selecciona teoría</option>';
    turnosAyEDTeoria.forEach(t => {
        const opt = document.createElement("option");
        opt.value = t.id;
        opt.textContent = t.id;
        selectAyEDTeoria.appendChild(opt);
    });
    selectAyEDTeoria.style.display = "none";

    let selectAyEDPractica = document.getElementById("turnoSelect-ayed-practica");
    selectAyEDPractica.innerHTML = '<option value="">Selecciona práctica</option>';
    turnosAyEDPractica.forEach(t => {
        const opt = document.createElement("option");
        opt.value = t.id;
        opt.textContent = t.id;
        selectAyEDPractica.appendChild(opt);
    });
    selectAyEDPractica.style.display = "none";
}