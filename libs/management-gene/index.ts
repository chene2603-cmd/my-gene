{
  "name": "@yourorg/management-gene",
  "version": "1.1.0",
  "description": "開源項目商業免疫基因核心庫",
  "main": "libs/management-gene/index.ts",
  "files": [
    "libs/**/*"
  ],
  "private": true,
  "author": "yourorg",
  "license": "MIT",
  "type": "module",
  "scripts": {
    "deploy": "wrangler deploy",
    "dev": "wrangler dev"
  },
  "devDependencies": {
    "@cloudflare/workers-types": "^4.20240117.0",
    "typescript": "^5.3.3",
    "wrangler": "^3.28.0"
  }
}
