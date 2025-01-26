# LibreChat Docs

Based on [Nextra](https://nextra.site/)

## Local Development

sudo systemctl restart nginx

sudo systemctl stop nginx

sudo nginx -t

docker-compose down

docker-compose up -d

docker logs <container_id_or_name>

D:\AI\langflow\AIApps\LibreChat

translate to vietnamese

https://github.com/TrinhNgocThanh/mylinks.com.vn

https://github.com/LibreChat-AI/librechat.ai/tree/main/pages/blog/2024-05-01_mlx.mdx
Pre-requisites: Node.js 18+, pnpm 9+

1. Optional: Create env based on [.env.template](./.env.template)
2. Run `pnpm i` to install the dependencies.
3. Run `pnpm dev` to start the development server on localhost:3333
4. Run `pnpm build` to build...
5. Run `pnpm start` to start the production server on localhost:3333

⚠️ **Note: try building prod before making a PR**

## Bundle analysis

Run `pnpm run analyze` to analyze the bundle size of the production build using `@next/bundle-analyzer`.
