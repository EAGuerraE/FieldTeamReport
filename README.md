# FieldTeamReport

## Estado actual de la PoC

La implementación inicial de `inarqs-fieldchat-poc` (React + TypeScript + Vite + PWA + IndexedDB/Dexie) está en la rama **`work`**.

Si en GitHub solo ves `LICENSE` y `README.md` en `main`, es porque los cambios aún no están fusionados/publicados en `main`.

### Archivos creados en `work`
- `index.html`
- `package.json`
- `tsconfig.json`
- `vite.config.ts`
- `public/icon.svg`
- `src/main.tsx`
- `src/styles.css`
- `src/app/App.tsx`
- `src/db/database.ts`
- `src/models/types.ts`
- `src/seed/seedData.ts`
- `src/stores/appStore.ts`
- `src/utils/id.ts`

### Para verlos localmente
```bash
git checkout work
git show --name-only --oneline HEAD
```

### Para llevarlos a `main`
```bash
git checkout main
git merge work
# luego push al remoto configurado
```


### Nota para Codex Cloud

El icono de PWA se mantiene como SVG de texto (`public/icon.svg`) para evitar errores de creación de PR cuando el entorno no admite archivos binarios.
