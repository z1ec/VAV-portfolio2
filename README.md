# VAV Portfolio

Personal portfolio of Vladimir Fomin — full-stack developer.
Built with React (Vite), Tailwind CSS 4, GSAP, Lenis and React Three Fiber.

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run lint
```

Content (RU/EN) lives in `src/i18n/translations.js`.

## 3D model

`public/models/Planet.glb` is meshopt-compressed with WebP textures and quantized
positions, so node transforms are applied in `src/components/Planet.jsx`.
Re-optimise a new model with
[gltf-transform](https://gltf-transform.dev/): `dedup`, `resize`, `webp`, `meshopt`.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`: lint, build, then upload
`dist/` to the hosting over FTP (only changed files are sent).

Set these in the repository settings (Settings → Secrets and variables → Actions):

| Name | Kind | Example |
| --- | --- | --- |
| `FTP_HOST` | secret | `ftp.example.com` |
| `FTP_USER` | secret | hosting FTP login |
| `FTP_PASSWORD` | secret | hosting FTP password |
| `FTP_DIR` | secret | `/www/fomin-vladimir.ru/` (trailing slash required) |
| `FTP_PROTOCOL` | variable, optional | `ftps` (default) or `ftp` if the host has no TLS |

`public/.htaccess` configures compression and caching on Apache hosting. On nginx
add equivalent `gzip`, `expires` and `types { model/gltf-binary glb; }` rules.
