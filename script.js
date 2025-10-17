// --- CONFIGURACIÓN DE NIVELES (SIN CAMBIOS) ---
// 0=Camino (Path), 1=Pared (Wall), 2=Meta (End)
const LEVELS = [
    // Nivel 1: Introducción (5x5)
    {
        size: 5, 
        map: [
            [0, 0, 0, 1, 0],
            [1, 1, 0, 1, 0],
            [0, 0, 0, 1, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 2]
        ],
        start: { r: 0, c: 0 },
        end: { r: 4, c: 4 }
    },
    // Nivel 2: Más largo (8x8)
    {
        size: 8, 
        map: [
            [0, 1, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 1, 0],
            [1, 1, 1, 1, 1, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 2]
        ],
        start: { r: 0, c: 0 },
        end: { r: 7, c: 7 }
    },
    // Nivel 3: Intermedio/Largo (10x10)
    {
        size: 10, 
        map: [
            [0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
            [0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
            [0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 2]
        ],
        start: { r: 0, c: 0 },
        end: { r: 9, c: 9 }
    },
    // Nivel 4: Difícil (12x12)
    {
        size: 12, 
        map: [
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
            [0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]
        ],
        start: { r: 0, c: 0 },
        end: { r: 11, c: 11 }
    },
    // Nivel 5: Extremo (15x15)
    {
        size: 15, 
        map: [
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
            [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
        ],
        start: { r: 0, c: 0 },
        end: { r: 14, c: 14 }
    }
];

// --- VARIABLES DE ESTADO DEL JUEGO ---
let currentLevelIndex = 0;
let playerPos = { r: 0, c: 0 };
let gameActive = false;
let playerElement = null;
let moveInterval = null; 
// *** VELOCIDAD AUMENTADA: 80ms es más rápido ***
const MOVE_SPEED = 80; 

// --- VARIABLES PARA EL CONTROL DE RATÓN/TÁCTIL ---
// Usaremos la misma lógica de eventos táctiles para ratón/trackpad
let touchStartX = 0;
let touchStartY = 0;
const SWIPE_THRESHOLD = 30; // Distancia mínima para registrar un movimiento de deslizamiento

// --- REFERENCIAS DEL DOM ---
const mazeContainer = document.getElementById('maze-container');
const levelInfo = document.getElementById('level-info');
const statusMessage = document.getElementById('status-message');
const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const nextLevelButton = document.getElementById('next-level-button');

// --- MANEJO DE EVENTOS ---
startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartLevel);
nextLevelButton.addEventListener('click', nextLevel);

// Eventos de teclado para movimiento fluido
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

// *** NUEVOS EVENTOS DE RATÓN/TÁCTIL (Trackpad) ***
// Usamos touchstart/touchend para compatibilidad con pantallas táctiles de PC
// Si se usa un ratón o trackpad que simula gestos táctiles, estos eventos funcionarán.
mazeContainer.addEventListener('touchstart', handleTouchStart);
mazeContainer.addEventListener('touchend', handleTouchEnd);
// Para trackpads/ratones más tradicionales, se podría usar un click para el movimiento,
// pero el deslizamiento es más intuitivo para el movimiento continuo.


let currentDirection = null;

// --- FUNCIONES DE CONTROL DE MOVIMIENTO FLUÍDO (TECLADO) ---

function handleKeyDown(event) {
    if (!gameActive) return;

    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        event.preventDefault();
        
        if (currentDirection !== event.key) {
            currentDirection = event.key;
            startContinuousMove(currentDirection);
        }
    }
}

function handleKeyUp(event) {
    if (!gameActive) return;

    if (event.key === currentDirection) {
        stopContinuousMove();
    }
}

// --- FUNCIONES DE CONTROL DE MOVIMIENTO (RATÓN/TRACKPAD) ---

function handleTouchStart(event) {
    if (!gameActive) return;
    // Detenemos cualquier movimiento anterior
    stopContinuousMove(); 

    // Usamos el primer punto de contacto
    const touchEvent = event.touches[0] || event.changedTouches[0];
    touchStartX = touchEvent.screenX;
    touchStartY = touchEvent.screenY;
}

function handleTouchEnd(event) {
    if (!gameActive) return;
    
    // Usamos el último punto de contacto
    const touchEvent = event.changedTouches[0];
    const touchEndX = touchEvent.screenX;
    const touchEndY = touchEvent.screenY;

    // Calcula la diferencia
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    let direction = null;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        // Movimiento horizontal dominante
        if (Math.abs(diffX) > SWIPE_THRESHOLD) {
            direction = diffX > 0 ? 'ArrowRight' : 'ArrowLeft';
        }
    } else {
        // Movimiento vertical dominante
        if (Math.abs(diffY) > SWIPE_THRESHOLD) {
            direction = diffY > 0 ? 'ArrowDown' : 'ArrowUp';
        }
    }

    // Si se detecta una dirección válida, inicia el movimiento continuo
    if (direction) {
        currentDirection = direction;
        // Iniciar movimiento continuo después de un deslizamiento
        startContinuousMove(currentDirection); 
    }
}


function startContinuousMove(direction) {
    clearInterval(moveInterval);
    currentDirection = direction;
    // Ejecutar una vez inmediatamente antes de iniciar el intervalo
    attemptMove(currentDirection); 
    moveInterval = setInterval(() => {
        attemptMove(currentDirection);
    }, MOVE_SPEED);
}

function stopContinuousMove() {
    clearInterval(moveInterval);
    moveInterval = null;
    currentDirection = null;
}


/** * Intenta mover al jugador en la dirección especificada. */
function attemptMove(direction) {
    let { r, c } = playerPos;
    let newR = r;
    let newC = c;
    const level = LEVELS[currentLevelIndex];
    const { size, map } = level;

    // 1. Determina la nueva posición
    switch (direction) {
        case 'ArrowUp': newR--; break;
        case 'ArrowDown': newR++; break;
        case 'ArrowLeft': newC--; break;
        case 'ArrowRight': newC++; break;
        default: return;
    }

    // 2. Detección de límites
    if (newR < 0 || newR >= size || newC < 0 || newC >= size) {
        return;
    }

    // 3. Detección de colisión (Tocar la pared '1')
    if (map[newR][newC] === 1) {
        stopContinuousMove();
        gameOver("¡TOCASTE LA PARED! Derrota inmediata.");
        return;
    }

    // 4. Movimiento válido
    const oldCell = document.getElementById(`cell-${r}-${c}`);
    const newCell = document.getElementById(`cell-${newR}-${newC}`);

    oldCell.removeChild(playerElement);
    newCell.appendChild(playerElement);
    
    playerPos = { r: newR, c: newC };
    
    // 5. Detección de victoria
    if (map[newR][newC] === 2) {
        stopContinuousMove();
        levelComplete();
    }
}


// --- FUNCIONES DE GESTIÓN DEL JUEGO (SIN CAMBIOS SIGNIFICATIVOS) ---

function startGame() {
    if (currentLevelIndex >= LEVELS.length) {
        statusMessage.textContent = "¡Has completado todos los niveles!";
        return;
    }
    
    stopContinuousMove();

    gameActive = true;
    renderMaze();
    levelInfo.textContent = `Nivel: ${currentLevelIndex + 1} / ${LEVELS.length}`;
    statusMessage.textContent = "Usa flechas o desliza (trackpad/táctil) para moverte RÁPIDO.";
    
    startButton.disabled = true;
    restartButton.disabled = false;
    nextLevelButton.disabled = true;
}

function restartLevel() {
    statusMessage.textContent = "Nivel Reiniciado. ¡A la carga!";
    startGame();
}

function nextLevel() {
    currentLevelIndex++;
    if (currentLevelIndex < LEVELS.length) {
        startGame();
    } else {
        gameOver("¡FELICIDADES! Has completado todos los Laberintos. 🎉");
        levelInfo.textContent = "Juego Completado";
    }
}

/** Genera el laberinto en el DOM. */
function renderMaze() {
    const level = LEVELS[currentLevelIndex];
    const { size, map, start } = level;

    mazeContainer.innerHTML = '';
    mazeContainer.style.gridTemplateColumns = `repeat(${size}, 30px)`;
    
    playerPos = { r: start.r, c: start.c };

    for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = `cell-${r}-${c}`;

            if (map[r][c] === 1) {
                cell.classList.add('wall'); 
            }

            if (r === start.r && c === start.c) {
                cell.classList.add('start');
            } else if (map[r][c] === 2) {
                cell.classList.add('end');
            }
            
            mazeContainer.appendChild(cell);
        }
    }

    const startCell = document.getElementById(`cell-${start.r}-${start.c}`);
    playerElement = document.createElement('div');
    playerElement.classList.add('player');
    startCell.appendChild(playerElement);
}

/** Maneja la derrota del juego. */
function gameOver(message) {
    gameActive = false;
    statusMessage.textContent = message;
    restartButton.disabled = false;
    startButton.disabled = true;
    nextLevelButton.disabled = true;
}

/** Maneja la finalización exitosa de un nivel. */
function levelComplete() {
    gameActive = false;
    statusMessage.textContent = "¡NIVEL COMPLETADO! Presiona Siguiente Nivel.";
    
    restartButton.disabled = true;
    startButton.disabled = true;
    if (currentLevelIndex < LEVELS.length - 1) {
        nextLevelButton.disabled = false;
    } else {
        gameOver("¡FELICIDADES! Has completado el juego.");
    }
}

// Inicializa el juego al cargar la página
window.onload = () => {
    renderMaze(); 
    levelInfo.textContent = `Nivel: ${currentLevelIndex + 1} / ${LEVELS.length}`;
};
