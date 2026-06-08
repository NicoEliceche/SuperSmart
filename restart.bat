@echo off
setlocal
cd /d "%~dp0"

set "PORT=5173"
set "APP_TITLE=SuperSmart - Frontend"

echo ==========================================
echo REINICIANDO SUPER SMART
echo ==========================================

:: Paso 1: Cerrar solo la ventana conocida de este proyecto.
echo [1/4] Cerrando ventana existente del proyecto...
taskkill /FI "WINDOWTITLE eq %APP_TITLE%" /T /F >nul 2>&1

:: Paso 2: Liberar solo el puerto configurado.
:: No se mata node.exe de forma global para no afectar otras sesiones.
echo [2/4] Liberando puerto %PORT%...
set "FOUND_PORT=0"

for /f "tokens=5" %%p in ('netstat -ano -p TCP ^| findstr /R /C:":%PORT% .*LISTENING"') do (
    set "FOUND_PORT=1"
    echo Cerrando PID %%p que escucha en puerto %PORT%...
    taskkill /F /PID %%p >nul 2>&1
)

if "%FOUND_PORT%"=="0" (
    echo No habia procesos escuchando en el puerto %PORT%.
)

echo [3/4] Esperando 2 segundos para liberar recursos...
timeout /t 2 >nul

echo [4/4] Lanzando aplicacion...
if exist package.json (
    start "%APP_TITLE%" cmd /k "npm run dev -- --host 127.0.0.1 --port %PORT%"
    echo Todo listo. URL: http://127.0.0.1:%PORT%/
) else (
    echo ERROR: No se encontro package.json
    pause
)

exit
