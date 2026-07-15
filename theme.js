// theme.js - Control Global del Modo Oscuro
function aplicarTema() {
    const temaGuardado = localStorage.getItem('theme');
    if (temaGuardado === 'dark') {
        document.body.classList.add('dark-mode');
        actualizarBotonesTema('☀️ Claro');
    } else {
        document.body.classList.remove('dark-mode');
        actualizarBotonesTema('🌙 Oscuro');
    }
}

function toggleTema() {
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
    aplicarTema();
}

function actualizarBotonesTema(texto) {
    const btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = texto;
}

// Ejecutar inmediatamente al cargar la página
document.addEventListener('DOMContentLoaded', aplicarTema);