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

Every push to `main` (a merged PR, a `git revert`, a reset + force-push) runs
`.github/workflows/deploy.yml`: lint, build, then `rsync` over SSH into a new
release directory on the VPS and an atomic switch of the `current` symlink.
The last 5 releases are kept.

```
/var/www/<site>/
  releases/20261015-123000-ab12cd3/   <- one directory per deploy
  current -> releases/...             <- nginx `root` points here
```

Repository secrets (Settings -> Secrets and variables -> Actions):

| Name | Value |
| --- | --- |
| `SSH_HOST` | VPS address |
| `SSH_USER` | the dedicated `deploy` user |
| `SSH_PRIVATE_KEY` | private key of the deploy key pair |
| `SSH_KNOWN_HOSTS` | output of `ssh-keyscan -p <port> <host>` |
| `DEPLOY_PATH` | site directory, e.g. `/var/www/portfolio` |
| `SSH_PORT` | optional, defaults to 22 |

Manual rollback on the server (instant, without waiting for CI):

```bash
cd /var/www/<site>
ls releases                          # pick a previous release
ln -sfn releases/<name> current.tmp && mv -Tf current.tmp current
```

Rolling back in git (`git revert <commit>` and push to `main`) redeploys the
older state automatically.
