// Usamos el proxy corsproxy.io delante de la URL de la facultad
const urlBase = 'https://gestiondocente.info.unlp.edu.ar/cartelera/data/0/10?idMateria=';
const url = 'https://corsproxy.io/?' + encodeURIComponent(urlBase);

const contenedor = document.getElementById('contenedor-datos');

fetch(url)
    .then(respuesta => respuesta.json())
    .then(datos => {
        contenedor.innerHTML = '';
        const mensajes = Array.isArray(datos.mensajes) ? datos.mensajes : [];
        if (mensajes.length === 0) {
            contenedor.textContent = 'No se encontraron datos en la cartelera.';
            return;
        }

        const lista = document.createElement('div');
        lista.className = 'cartelera-list';

        mensajes.forEach((item, index) => {
            const card = document.createElement('article');
            card.className = 'cartelera-card';

            const title = document.createElement('h2');
            title.textContent = item.titulo || item.materia || `Mensaje #${index + 1}`;
            card.appendChild(title);

            const meta = document.createElement('div');
            meta.className = 'cartelera-details';
            const metaItems = [
                { label: 'Materia', value: item.materia },
                { label: 'Fecha', value: item.fecha },
                { label: 'Autor', value: item.autor }
            ];
            metaItems.forEach(({ label, value }) => {
                if (!value) return;
                const row = document.createElement('div');
                row.className = 'field';
                const keyLabel = document.createElement('span');
                keyLabel.className = 'field-key';
                keyLabel.textContent = `${label}:`;
                const valueLabel = document.createElement('span');
                valueLabel.className = 'field-value';
                valueLabel.textContent = String(value);
                row.appendChild(keyLabel);
                row.appendChild(valueLabel);
                meta.appendChild(row);
            });
            card.appendChild(meta);

            if (item.cuerpo) {
                const cuerpo = document.createElement('div');
                cuerpo.className = 'cartelera-body';
                cuerpo.innerHTML = item.cuerpo;
                card.appendChild(cuerpo);
            }

            if (Array.isArray(item.adjuntos) && item.adjuntos.length > 0) {
                const attachBox = document.createElement('div');
                attachBox.className = 'cartelera-attachments';
                const attachTitle = document.createElement('div');
                attachTitle.className = 'field-key';
                attachTitle.textContent = 'Adjuntos:';
                attachBox.appendChild(attachTitle);

                const list = document.createElement('ul');
                item.adjuntos.forEach(adjunto => {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = adjunto.public_path || adjunto.url || '#';
                    a.target = '_blank';
                    a.rel = 'noopener noreferrer';
                    a.textContent = adjunto.nombre || adjunto.public_path || 'Adjunto';
                    li.appendChild(a);
                    list.appendChild(li);
                });
                attachBox.appendChild(list);
                card.appendChild(attachBox);
            }

            lista.appendChild(card);
        });

        contenedor.appendChild(lista);
    })
    .catch(error => {
        console.error('Error:', error);
        contenedor.innerHTML = 'Error al cargar los datos.';
    });