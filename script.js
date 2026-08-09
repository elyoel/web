// Configuración de materias y colores (agrega nuevas materias aquí)
const materias = [
    { nombre: "ARQUI - 2025", color: "cadp" },
    { nombre: "MAT2 - 2025", color: "mat1" },
    { nombre: "TALLER - 2025", color: "taller" },
    { nombre: "FOD - 2026", color: "fod" },
    { nombre: "Semi-Python - 2026", color: "semi" },
    { nombre: "AyED - 2026", color: "ayed" },
    { nombre: "Obj 1 - 2026", color: "obj1" }
];

const materiaGroups = [
    {
        titulo: "Primer Año",
        claves: ["MAT2", "ARQUI", "TALLER"]
    },
    {
        titulo: "Segundo Año",
        claves: ["FOD", "SemiPython", "AyED", "Obj1"]
    },
    {
        titulo: "Tercer Año",
        claves: []
    }
];

// Turnos de ARQUI (no tocar, ya está bien)
const turnosArqui = [
    {
        id: "1",
        horarios: [
            { dia: "Miércoles", hora: "8:30 - 11:30", tipo: "T" },
            { dia: "Martes", hora: "10:00 - 11:30", tipo: "P" },
            { dia: "Viernes", hora: "10:00 - 11:30", tipo: "P" }
        ]
    },
    {
        id: "2",
        horarios: [
            { dia: "Miércoles", hora: "11:30 - 14:30", tipo: "T" },
            { dia: "Martes", hora: "13:30 - 15:00", tipo: "P" },
            { dia: "Viernes", hora: "13:30 - 15:00", tipo: "P" }
        ]
    },
    {
        id: "3",
        horarios: [
            { dia: "Miércoles", hora: "18:00 - 21:00", tipo: "T" },
            { dia: "Martes", hora: "17:00 - 18:30", tipo: "P" },
            { dia: "Viernes", hora: "17:00 - 18:30", tipo: "P" }
        ]
    },
    {
        id: "4",
        horarios: [
            { dia: "Miércoles", hora: "14:30 - 17:30", tipo: "T" },
            { dia: "Martes", hora: "20:30 - 22:00", tipo: "P" },
            { dia: "Viernes", hora: "20:30 - 22:00", tipo: "P" }
        ]
    }
];

// MAT2: ahora con los horarios de la imagen, tipo T/P
const turnosMat2 = [
    {
        id: "1",
        horarios: [
            { dia: "Lunes", hora: "8:30 - 11:00", tipo: "T/P" },
            { dia: "Jueves", hora: "8:30 - 11:00", tipo: "T/P" }
        ]
    },
    {
        id: "2",
        horarios: [
            { dia: "Lunes", hora: "11:00 - 13:30", tipo: "T/P" },
            { dia: "Jueves", hora: "11:00 - 13:30", tipo: "T/P" }
        ]
    },
    {
        id: "3",
        horarios: [
            { dia: "Lunes", hora: "13:30 - 16:00", tipo: "T/P" },
            { dia: "Jueves", hora: "13:30 - 16:00", tipo: "T/P" }
        ]
    },
    {
        id: "4",
        horarios: [
            { dia: "Lunes", hora: "16:00 - 18:30", tipo: "T/P" },
            { dia: "Jueves", hora: "16:00 - 18:30", tipo: "T/P" }
        ]
    },
    {
        id: "5",
        horarios: [
            { dia: "Lunes", hora: "18:30 - 21:00", tipo: "T/P" },
            { dia: "Jueves", hora: "18:30 - 21:00", tipo: "T/P" }
        ]
    }
];

// Turnos de TALLER (unificados T/P, revisados según la imagen)
const turnosTaller = [
    {
        id: "TA",
        horarios: [
            { dia: "Lunes", hora: "8:00 - 9:30", tipo: "T/P" },
            { dia: "Jueves", hora: "8:00 - 9:30", tipo: "T/P" }
        ]
    },
    {
        id: "TB",
        horarios: [
            { dia: "Lunes", hora: "9:30 - 11:00", tipo: "T/P" },
            { dia: "Jueves", hora: "9:30 - 11:00", tipo: "T/P" }
        ]
    },
    {
        id: "TC",
        horarios: [
            { dia: "Lunes", hora: "11:00 - 12:30", tipo: "T/P" },
            { dia: "Miércoles", hora: "11:00 - 12:30", tipo: "T/P" }
        ]
    },
    {
        id: "TD",
        horarios: [
            { dia: "Lunes", hora: "12:30 - 14:00", tipo: "T/P" },
            { dia: "Miércoles", hora: "12:30 - 14:00", tipo: "T/P" }
        ]
    },
    {
        id: "TE",
        horarios: [
            { dia: "Martes", hora: "8:00 - 9:30", tipo: "T/P" },
            { dia: "Viernes", hora: "8:00 - 9:30", tipo: "T/P" }
        ]
    },
    {
        id: "TF",
        horarios: [
            { dia: "Martes", hora: "9:30 - 11:00", tipo: "T/P" },
            { dia: "Viernes", hora: "9:30 - 11:00", tipo: "T/P" }
        ]
    },
    {
        id: "TG",
        horarios: [
            { dia: "Martes", hora: "15:00 - 16:30", tipo: "T/P" },
            { dia: "Viernes", hora: "15:00 - 16:30", tipo: "T/P" }
        ]
    },
    {
        id: "TH",
        horarios: [
            { dia: "Martes", hora: "16:30 - 18:00", tipo: "T/P" },
            { dia: "Viernes", hora: "16:30 - 18:00", tipo: "T/P" }
        ]
    },
    {
        id: "TI",
        horarios: [
            { dia: "Miércoles", hora: "18:00 - 19:30", tipo: "T/P" },
            { dia: "Viernes", hora: "18:00 - 19:30", tipo: "T/P" }
        ]
    },
    {
        id: "TJ",
        horarios: [
            { dia: "Miércoles", hora: "19:30 - 21:00", tipo: "T/P" },
            { dia: "Viernes", hora: "19:30 - 21:00", tipo: "T/P" }
        ]
    },
    {
        id: "TK",
        horarios: [
            { dia: "Martes", hora: "11:00 - 12:30", tipo: "T/P" },
            { dia: "Viernes", hora: "11:00 - 12:30", tipo: "T/P" }
        ]
    },
    {
        id: "TL",
        horarios: [
            { dia: "Martes", hora: "12:30 - 14:00", tipo: "T/P" },
            { dia: "Viernes", hora: "12:30 - 14:00", tipo: "T/P" }
        ]
    },
    {
        id: "TM",
        horarios: [
            { dia: "Lunes", hora: "14:00 - 15:30", tipo: "T/P" },
            { dia: "Miércoles", hora: "14:00 - 15:30", tipo: "T/P" }
        ]
    },
    {
        id: "TN",
        horarios: [
            { dia: "Lunes", hora: "15:30 - 17:00", tipo: "T/P" },
            { dia: "Miércoles", hora: "15:30 - 17:00", tipo: "T/P" }
        ]
    },
    {
        id: "TO",
        horarios: [
            { dia: "Lunes", hora: "17:00 - 18:30", tipo: "T/P" },
            { dia: "Martes", hora: "17:00 - 18:30", tipo: "T/P" }
        ]
    },
    {
        id: "TP",
        horarios: [
            { dia: "Lunes", hora: "18:30 - 20:00", tipo: "T/P" },
            { dia: "Martes", hora: "18:30 - 20:00", tipo: "T/P" }
        ]
    }
];

// Turnos de FOD (teoría y práctica vinculadas)
const turnosFOD = [
    {
        id: "1",
        horarios: [
            { dia: "Viernes", hora: "8:30 - 10:30", tipo: "T" },
            { dia: "Martes", hora: "11:00 - 13:00", tipo: "P" }
        ]
    },
    {
        id: "2",
        horarios: [
            { dia: "Jueves", hora: "14:30 - 16:30", tipo: "T" },
            { dia: "Martes", hora: "18:00 - 20:00", tipo: "P" }
        ]
    }
];

// Turnos de Semi-Python (teoría y práctica vinculadas)
const turnosSemiPython = [
    {
        id: "1",
        horarios: [
            { dia: "Martes", hora: "8:30 - 10:30", tipo: "T" },
            { dia: "Jueves", hora: "8:00 - 10:00", tipo: "P" }
        ]
    },
    {
        id: "2",
        horarios: [
            { dia: "Martes", hora: "15:00 - 17:00", tipo: "T" },
            { dia: "Jueves", hora: "16:00 - 18:00", tipo: "P" }
        ]
    }
];

// Turnos de AyED (teoría y práctica por separado)
const turnosAyEDTeoria = [
    {
        id: "TM", // turno mañana
        horarios: [
            { dia: "Lunes", hora: "11:00 - 13:00", tipo: "T" },
            { dia: "Jueves", hora: "12:30 - 14:30", tipo: "T" }
        ]
    },
    {
        id: "TT", // turno tarde
        horarios: [
            { dia: "Martes", hora: "16:30 - 18:30", tipo: "T" },
            { dia: "Miércoles", hora: "17:00 - 19:00", tipo: "T" }
        ]
    }
];

const turnosAyEDPractica = [
    {
        id: "P1",
        horarios: [
            { dia: "Lunes", hora: "14:00 - 16:00", tipo: "P" }
        ]
    },
    {
        id: "P2",
        horarios: [
            { dia: "Martes", hora: "9:00 - 11:00", tipo: "P" }
        ]
    },
    {
        id: "P3",
        horarios: [
            { dia: "Martes", hora: "14:00 - 16:00", tipo: "P" }
        ]
    },
    {
        id: "P4",
        horarios: [
            { dia: "Jueves", hora: "10:00 - 12:00", tipo: "P" }
        ]
    },
    {
        id: "P5",
        horarios: [
            { dia: "Jueves", hora: "18:00 - 20:00", tipo: "P" }
        ]
    },
    {
        id: "P6",
        horarios: [
            { dia: "Viernes", hora: "14:00 - 16:00", tipo: "P" }
        ]
    }
];

const turnosObj1Teoria = [
    {
        id: "TT",
        horarios: [
            { dia: "Martes", hora: "14:00 - 17:00", tipo: "T" }
        ]
    },
    {
        id: "TM",
        horarios: [
            { dia: "Jueves", hora: "9:30 - 12:30", tipo: "T" }
        ]
    }
];

const turnosObj1Practica = [
    { id: "C1", horarios: [{ dia: "Lunes", hora: "17:30 - 19:00", tipo: "P" }] },
    { id: "C2", horarios: [{ dia: "Lunes", hora: "19:00 - 20:30", tipo: "P" }] },
    { id: "C3", horarios: [{ dia: "Lunes", hora: "19:00 - 20:30", tipo: "P" }] },
    { id: "C4", horarios: [{ dia: "Martes", hora: "11:00 - 12:30", tipo: "P" }] },
    { id: "C5", horarios: [{ dia: "Martes", hora: "12:30 - 14:00", tipo: "P" }] },
    { id: "C6", horarios: [{ dia: "Jueves", hora: "11:00 - 12:30", tipo: "P" }] },
    { id: "C7", horarios: [{ dia: "Jueves", hora: "11:00 - 12:30", tipo: "P" }] },
    { id: "C8", horarios: [{ dia: "Jueves", hora: "12:30 - 14:00", tipo: "P" }] },
    { id: "C9", horarios: [{ dia: "Jueves", hora: "12:30 - 14:00", tipo: "P" }] },
    { id: "C10", horarios: [{ dia: "Jueves", hora: "14:00 - 15:30", tipo: "P" }] },
    { id: "C11", horarios: [{ dia: "Miércoles", hora: "17:30 - 19:00", tipo: "P" }] },
    { id: "C12", horarios: [{ dia: "Jueves", hora: "19:00 - 20:30", tipo: "P" }] },
    { id: "C13", horarios: [{ dia: "Jueves", hora: "19:00 - 20:30", tipo: "P" }] }
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

const compressedTurnosCache = {};
let materiasSeleccionadas = {};
let turnosSeleccionados = {};

// --- Compactar globales `turnos*` transformando bloques en rangos
function compressTurnoHorariosArray(horarios) {
    // Construye mapa por dia+tipo -> array de índices de `todasLasHoras`
    const map = new Map();

    function addSlot(dia, tipo, index) {
        const key = `${dia}||${tipo}`;
        if (!map.has(key)) map.set(key, new Set());
        map.get(key).add(index);
    }

    horarios.forEach(h => {
        // Si es rango, expandirlo a índices
        if (!todasLasHoras.includes(h.hora)) {
            const parts = h.hora.split('-').map(s => s.trim());
            if (parts.length === 2) {
                const start = parseTimeToMinutes(parts[0]);
                const end = parseTimeToMinutes(parts[1]);
                todasLasHoras.forEach((slot, idx) => {
                    const p = parseSlot(slot);
                    if (p.start >= start && p.end <= end) addSlot(h.dia, h.tipo, idx);
                });
                return;
            }
        }
        // Si es bloque conocido
        const idx = todasLasHoras.indexOf(h.hora);
        if (idx !== -1) addSlot(h.dia, h.tipo, idx);
    });

    // Convertir sets de índices a rangos
    const result = [];
    for (const [key, setIdx] of map.entries()) {
        const [dia, tipo] = key.split('||');
        const indices = Array.from(setIdx).sort((a, b) => a - b);
        let i = 0;
        while (i < indices.length) {
            let start = indices[i];
            let end = start;
            while (i + 1 < indices.length && indices[i + 1] === end + 1) {
                end = indices[++i];
            }
            const startStr = todasLasHoras[start].split('-')[0].trim();
            const endStr = todasLasHoras[end].split('-')[1].trim();
            result.push({ dia, hora: `${startStr} - ${endStr}`, tipo });
            i++;
        }
    }
    return result;
}

function compressTurnosGlobales() {
    // Construir cache a partir del listado `materias` para evitar depender de window
    try {
        materias.forEach(m => {
            const materiaName = getMateriaBaseName(m.nombre);
            const cacheKey = materiaName.toLowerCase();
            const norm = cacheKey;

            // Buscar en propiedades globales `window` si existe
            if (typeof window !== 'undefined') {
                Object.keys(window).forEach(key => {
                    if (!key.toLowerCase().startsWith('turnos')) return;
                    const keyTail = key.substring(6).toLowerCase(); // after 'turnos'
                    if (!keyTail.includes(norm)) return;
                    const val = window[key];
                    if (!val) return;
                    if (Array.isArray(val)) {
                        const compressed = val.map(turno => ({ ...turno, horarios: compressTurnoHorariosArray(turno.horarios || []) }));
                        compressedTurnosCache[cacheKey] = compressed;
                        compressedTurnosCache[materiaName] = compressed;
                    } else if (typeof val === 'object') {
                        const obj = {};
                        if (Array.isArray(val.teoria)) obj.teoria = val.teoria.map(t => ({ ...t, horarios: compressTurnoHorariosArray(t.horarios || []) }));
                        if (Array.isArray(val.practica)) obj.practica = val.practica.map(t => ({ ...t, horarios: compressTurnoHorariosArray(t.horarios || []) }));
                        if (Object.keys(obj).length) {
                            compressedTurnosCache[cacheKey] = obj;
                            compressedTurnosCache[materiaName] = obj;
                        }
                    }
                });
            }

            // Fallback: intentar variaciones por evaluación
            const rawMateria = materiaName;
            const normalized = rawMateria.toLowerCase();
            const candidates = [rawMateria, normalized, rawMateria.toUpperCase(), rawMateria.charAt(0).toUpperCase() + normalized.slice(1)];
            candidates.forEach(suffix => {
                try {
                    const maybe = eval('turnos' + suffix);
                    if (maybe !== undefined) {
                        if (Array.isArray(maybe)) {
                            const compressed = maybe.map(turno => ({ ...turno, horarios: compressTurnoHorariosArray(turno.horarios || []) }));
                            compressedTurnosCache[cacheKey] = compressed;
                            compressedTurnosCache[rawMateria] = compressed;
                        }
                    }
                } catch (e) {}
                try {
                    const teoria = eval('turnos' + suffix + 'Teoria');
                    const practica = eval('turnos' + suffix + 'Practica');
                    if (Array.isArray(teoria) || Array.isArray(practica)) {
                        const compressedObj = {
                            teoria: Array.isArray(teoria) ? teoria.map(t => ({ ...t, horarios: compressTurnoHorariosArray(t.horarios || []) })) : [],
                            practica: Array.isArray(practica) ? practica.map(t => ({ ...t, horarios: compressTurnoHorariosArray(t.horarios || []) })) : []
                        };
                        compressedTurnosCache[cacheKey] = compressedObj;
                        compressedTurnosCache[rawMateria] = compressedObj;
                    }
                } catch (e) {}
            });
        });
    } catch (e) {
        // ignorar errores de entorno
    }
}

compressTurnosGlobales();

materias.forEach(m => {
    materiasSeleccionadas[m.nombre] = false;
    const lookup = lookupTurnosByName(m.nombre);
    turnosSeleccionados[m.nombre] = isTeoriaPracticaTurnos(lookup) ? { teoria: '', practica: '' } : '';
});

// Helpers globales: parseo y normalización de rangos a bloques de 30min
function parseTimeToMinutes(t) {
    const [h, m] = t.split(':').map(s => parseInt(s, 10));
    return h * 60 + m;
}

function parseSlot(slot) {
    const parts = slot.split('-').map(s => s.trim());
    return {
        start: parseTimeToMinutes(parts[0]),
        end: parseTimeToMinutes(parts[1])
    };
}

function getMateriaBaseName(name) {
    const withoutYear = name.replace(/\s*-\s*\d{4}$/, '');
    return withoutYear.replace(/[^a-zA-Z0-9]/g, '');
}

function isTeoriaPracticaTurnos(turnos) {
    return turnos && typeof turnos === 'object' && !Array.isArray(turnos) && ('teoria' in turnos || 'practica' in turnos);
}

function expandHorarioEntry(entry) {
    if (todasLasHoras.includes(entry.hora)) return [entry];
    const parts = entry.hora.split('-').map(s => s.trim());
    if (parts.length !== 2) return [entry];
    const start = parseTimeToMinutes(parts[0]);
    const end = parseTimeToMinutes(parts[1]);
    return todasLasHoras.map(slot => ({ slot, parsed: parseSlot(slot) }))
        .filter(s => s.parsed.start >= start && s.parsed.end <= end)
        .map(s => ({ dia: entry.dia, hora: s.slot, tipo: entry.tipo }));
}

function normalizeTurnoArray(arr) {
    if (!Array.isArray(arr)) return arr;
    return arr.map(turno => {
        const horarios = (turno.horarios || []).flatMap(h => expandHorarioEntry(h));
        return { ...turno, horarios };
    });
}

function lookupTurnosByName(name) {
    const normalized = getMateriaBaseName(name);
    const normalizedLower = normalized.toLowerCase();
    // Si existe cache, devolverlo
    if (normalizedLower in compressedTurnosCache) return compressedTurnosCache[normalizedLower];
    if (normalized in compressedTurnosCache) return compressedTurnosCache[normalized];

    if (typeof window !== 'undefined') {
        for (const key of Object.keys(window)) {
            if (!key.toLowerCase().startsWith('turnos')) continue;
            const tail = key.substring(6).toLowerCase();
            if (tail.includes(normLower)) {
                return window[key];
            }
        }
    }

    const candidates = [normalized, normalized.toLowerCase(), normalized.charAt(0).toUpperCase() + normalized.slice(1).toLowerCase()];
    for (const suffix of candidates) {
        try {
            const maybe = eval('turnos' + suffix);
            if (maybe !== undefined) return maybe;
        } catch (e) {}
        try {
            const teoria = eval('turnos' + suffix + 'Teoria');
            const practica = eval('turnos' + suffix + 'Practica');
            if (theoria !== undefined || practica !== undefined) return { teoria: teoria || [], practica: practica || [] };
        } catch (e) {}
    }

    return [];
}

// Comprueba si una entrada horario (posible rango) contiene el bloque `slotHora` (p.ej. "8:00 - 8:30")
function horarioMatchesSlot(entry, dia, slotHora) {
    if (!entry || entry.dia !== dia) return false;
    if (entry.hora === slotHora) return true;
    // si entry.hora es rango, comprobar inclusión
    if (!todasLasHoras.includes(entry.hora)) {
        const slotParsed = parseSlot(slotHora);
        const rangeParts = entry.hora.split('-').map(s => s.trim());
        if (rangeParts.length !== 2) return false;
        const start = parseTimeToMinutes(rangeParts[0]);
        const end = parseTimeToMinutes(rangeParts[1]);
        return slotParsed.start >= start && slotParsed.end <= end;
    }
    return false;
}

// Función para saber si hay clase de una materia en ese día/hora
function hayMateria(materia, dia, hora) {
    if (!materiasSeleccionadas[materia]) return null;
    const lookup = lookupTurnosByName(materia);
    if (isTeoriaPracticaTurnos(lookup)) {
        const selected = turnosSeleccionados[materia] || { teoria: '', practica: '' };
        if (selected.teoria) {
            const turnoT = (lookup.teoria || []).find(t => t.id === selected.teoria);
            if (turnoT && turnoT.horarios.some(h => horarioMatchesSlot(h, dia, hora))) return 'T';
        }
        if (selected.practica) {
            const turnoP = (lookup.practica || []).find(t => t.id === selected.practica);
            if (turnoP && turnoP.horarios.some(h => horarioMatchesSlot(h, dia, hora))) return 'P';
        }
        return null;
    }

    const turnosArr = lookup || [];
    const turnoId = turnosSeleccionados[materia];
    if (!turnoId) return null;
    const turno = turnosArr.find(t => t.id === turnoId);
    if (!turno) return null;
    const bloque = turno.horarios.find(h => horarioMatchesSlot(h, dia, hora));
    return bloque ? bloque.tipo : null;
}

// Reemplaza la variable 'horas' por una función que calcule el rango visible dinámicamente
function obtenerHorasVisibles() {
    // Busca los horarios activos según materias y turnos seleccionados
    let bloques = [];
    materias.forEach(m => {
        if (!materiasSeleccionadas[m.nombre]) return;
        // usar lookup dinámico y normalizado
        const lookup = lookupTurnosByName(m.nombre);
        if (isTeoriaPracticaTurnos(lookup)) {
            const selected = turnosSeleccionados[m.nombre] || { teoria: '', practica: '' };
            if (selected.teoria) {
                const turnoT = (lookup.teoria || []).find(t => t.id === selected.teoria);
                if (turnoT) {
                    turnoT.horarios.forEach(h => {
                        if (todasLasHoras.includes(h.hora)) {
                            if (!bloques.includes(h.hora)) bloques.push(h.hora);
                        } else {
                            expandHorarioEntry(h).forEach(e => { if (!bloques.includes(e.hora)) bloques.push(e.hora); });
                        }
                    });
                }
            }
            if (selected.practica) {
                const turnoP = (lookup.practica || []).find(t => t.id === selected.practica);
                if (turnoP) {
                    turnoP.horarios.forEach(h => {
                        if (todasLasHoras.includes(h.hora)) {
                            if (!bloques.includes(h.hora)) bloques.push(h.hora);
                        } else {
                            expandHorarioEntry(h).forEach(e => { if (!bloques.includes(e.hora)) bloques.push(e.hora); });
                        }
                    });
                }
            }
            return;
        }

        const turnosArr = lookup || [];
        const turnoId = turnosSeleccionados[m.nombre];
        if (!turnoId) return;
        const turno = turnosArr.find(t => t.id === turnoId);
        if (!turno) return;
        turno.horarios.forEach(h => {
            if (todasLasHoras.includes(h.hora)) {
                if (!bloques.includes(h.hora)) bloques.push(h.hora);
            } else {
                expandHorarioEntry(h).forEach(e => { if (!bloques.includes(e.hora)) bloques.push(e.hora); });
            }
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

    // Construir cuadrícula: grid[dia][hora] = array de {nombre,color,tipo}
    const grid = {};
    dias.forEach(d => grid[d] = {});
    horas.forEach(hora => {
        dias.forEach(dia => {
            const presentes = [];
            materias.forEach(m => {
                if (!materiasSeleccionadas[m.nombre]) return;

                const lookup = lookupTurnosByName(m.nombre);
                if (isTeoriaPracticaTurnos(lookup)) {
                    const selected = turnosSeleccionados[m.nombre] || { teoria: '', practica: '' };
                    if (selected.teoria) {
                        const turnoT = (lookup.teoria || []).find(t => t.id === selected.teoria);
                        if (turnoT && turnoT.horarios.some(h => horarioMatchesSlot(h, dia, hora))) presentes.push({ nombre: m.nombre, color: m.color, tipo: 'T' });
                    }
                    if (selected.practica) {
                        const turnoP = (lookup.practica || []).find(t => t.id === selected.practica);
                        if (turnoP && turnoP.horarios.some(h => horarioMatchesSlot(h, dia, hora))) presentes.push({ nombre: m.nombre, color: m.color, tipo: 'P' });
                    }
                    return;
                }

                const turnosArr = lookup || [];
                const turnoId = turnosSeleccionados[m.nombre];
                if (!turnoId) return;
                const turno = turnosArr.find(t => t.id === turnoId);
                if (!turno) return;
                if (turno.horarios.some(h => horarioMatchesSlot(h, dia, hora))) {
                    // Puede haber solo un tipo por entrada, pero mantener tipo original
                    // Encontrar la entrada que cubre (prefer first match)
                    const entry = turno.horarios.find(h => horarioMatchesSlot(h, dia, hora));
                    presentes.push({ nombre: m.nombre, color: m.color, tipo: entry ? entry.tipo : '' });
                }
            });
            grid[dia][hora] = presentes;
        });
    });

    // helper: comparar arrays de presentes (orden insensible)
    function samePresentSet(a, b) {
        if (!a && !b) return true;
        if (!a || !b) return false;
        if (a.length !== b.length) return false;
        const ka = a.map(x => `${x.nombre}||${x.tipo}`).sort();
        const kb = b.map(x => `${x.nombre}||${x.tipo}`).sort();
        for (let i = 0; i < ka.length; i++) if (ka[i] !== kb[i]) return false;
        return true;
    }

    // No fusionar filas: render por cada bloque de 30 minutos para mostrar colisiones por slot
    for (let i = 0; i < horas.length; i++) {
        const hora = horas[i];
        html += `<tr><td>${hora}</td>`;

        for (const dia of dias) {
            const presentes = grid[dia][hora] || [];
            let cell = '';
            if (presentes.length === 0) {
                cell = '<td></td>';
            } else if (presentes.length === 1) {
                const p = presentes[0];
                cell = `<td class="${p.color}">${p.nombre} (${p.tipo})</td>`;
            } else {
                const content = presentes.map(p => `<span class="${p.color}">${p.nombre} (${p.tipo})</span>`).join('<br>');
                cell = `<td class="superpuesto">${content}</td>`;
            }
            html += cell;
        }

        html += '</tr>';
    }

    html += "</table>";
    document.getElementById("tabla-horario").innerHTML = html;
}

// Eventos de la botonera HTML
document.addEventListener("DOMContentLoaded", function () {
    // Generar la botonera y binds dinámicos
    construirBotoneraDinamica();
    generarTabla();
});

// Inicializa los selects de turnos por materia
// Construye la botonera de forma dinámica según la configuración `materias`
function construirBotoneraDinamica() {
    const cont = document.getElementById('botonera');
    cont.innerHTML = '';

    function cleanId(name) {
        return name.replace(/[^a-zA-Z0-9]/g, '_');
    }

    function formatTurnoLabel(turno) {
        const summary = (turno.horarios || []).map(h => `${h.dia} ${h.hora}`).join(' / ');
        return summary ? `${turno.id} — ${summary}` : turno.id;
    }

    // lookupTurnosByName y helpers están en ámbito global arriba
    function crearBotonMateria(m) {
        const box = document.createElement('div');
        box.className = 'boton-materia';

        const btn = document.createElement('button');
        btn.className = 'btn-grande';
        btn.textContent = m.nombre;
        btn.dataset.materia = m.nombre;

        const key = cleanId(m.nombre);
        const selects = document.createElement('div');
        selects.style.marginTop = '8px';

        const turnos = lookupTurnosByName(m.nombre);
        if (isTeoriaPracticaTurnos(turnos)) {
            const selT = document.createElement('select');
            selT.id = `turnoSelect-${key}-teoria`;
            selT.style.display = 'none';
            selT.innerHTML = '<option value="">Selecciona teoría</option>';
            (turnos.teoria || []).forEach(t => {
                const opt = document.createElement('option');
                opt.value = t.id;
                opt.textContent = formatTurnoLabel(t);
                selT.appendChild(opt);
            });
            selT.addEventListener('change', () => { turnosSeleccionados[m.nombre].teoria = selT.value; generarTabla(); });
            selects.appendChild(selT);

            const selP = document.createElement('select');
            selP.id = `turnoSelect-${key}-practica`;
            selP.style.display = 'none';
            selP.innerHTML = '<option value="">Selecciona práctica</option>';
            (turnos.practica || []).forEach(t => {
                const opt = document.createElement('option');
                opt.value = t.id;
                opt.textContent = formatTurnoLabel(t);
                selP.appendChild(opt);
            });
            selP.addEventListener('change', () => { turnosSeleccionados[m.nombre].practica = selP.value; generarTabla(); });
            selects.appendChild(selP);
        } else {
            const sel = document.createElement('select');
            sel.id = `turnoSelect-${key}`;
            sel.style.display = 'none';
            sel.innerHTML = '<option value="">Selecciona turno</option>';
            (turnos || []).forEach(t => {
                const opt = document.createElement('option');
                opt.value = t.id;
                opt.textContent = formatTurnoLabel(t);
                sel.appendChild(opt);
            });
            sel.addEventListener('change', () => { turnosSeleccionados[m.nombre] = sel.value; generarTabla(); });
            selects.appendChild(sel);
        }

        btn.addEventListener('click', function () {
            materiasSeleccionadas[m.nombre] = !materiasSeleccionadas[m.nombre];
            this.classList.toggle('active', materiasSeleccionadas[m.nombre]);
            if (isTeoriaPracticaTurnos(lookupTurnosByName(m.nombre))) {
                const t = document.getElementById(`turnoSelect-${key}-teoria`);
                const p = document.getElementById(`turnoSelect-${key}-practica`);
                if (t) t.style.display = materiasSeleccionadas[m.nombre] ? 'inline' : 'none';
                if (p) p.style.display = materiasSeleccionadas[m.nombre] ? 'inline' : 'none';
            } else {
                const s = document.getElementById(`turnoSelect-${key}`);
                if (s) s.style.display = materiasSeleccionadas[m.nombre] ? 'inline' : 'none';
            }
            generarTabla();
        });

        box.appendChild(btn);
        box.appendChild(selects);
        return box;
    }

    materiaGroups.forEach(group => {
        const section = document.createElement('section');
        section.className = 'grupo-materias';

        const title = document.createElement('h2');
        title.className = 'grupo-titulo';
        title.textContent = group.titulo;
        section.appendChild(title);

        const groupBox = document.createElement('div');
        groupBox.className = 'grupo-botones';

        const groupMaterias = materias.filter(m => group.claves.includes(getMateriaBaseName(m.nombre)));
        groupMaterias.forEach(m => groupBox.appendChild(crearBotonMateria(m)));

        if (groupMaterias.length === 0) {
            const note = document.createElement('div');
            note.className = 'grupo-vacio';
            note.textContent = 'Próximamente';
            groupBox.appendChild(note);
        }

        section.appendChild(groupBox);
        cont.appendChild(section);
    });
}