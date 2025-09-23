# Node/React básico con CI

Proyecto mínimo para demostrar un pipeline de **GitHub Actions** con:

- Lint (**ESLint**)
- Formato (**Prettier**, modo check)
- Tests unitarios (**Jest**)
- Test de integración (consulta `/health` con **supertest**)
- Build (placeholder)

## Estructura

```
.
├── .github/workflows/ci.yml
├── public/index.html            # React via CDN + Babel (solo demo)
├── src/server.js                # Express: sirve /public y /api/hello y /health
├── src/sum.js                   # utilidad con test unitario
├── src/sum.test.js
├── tests/integration.run.js     # test integración (Supertest)
├── .eslintrc.json
├── .prettierrc
├── .prettierignore
├── jest.config.cjs
└── package.json
```

## Uso local

```bash
npm install
npm run lint
npm run format:check
npm test
npm run test:integration
npm start
# abrir http://localhost:3000
```

## Pipeline (CI)

- Se ejecuta en **PR a `develop`** y en **push a `develop`**.
- Configurar en **Settings → Branches → Branch protection rules** para requerir que el check del workflow pase antes de mergear.
