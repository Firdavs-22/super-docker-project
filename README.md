# Docker Node App
このプロジェクトはTypeScriptを使用したシンプルなExpressアプリケーションです。
PostgreSQLをデータベースとして使用し、Docker環境を動作します。

## 使用技術
- Node.js
- Express
- TypeScript
- PostgreSQL
- Jest（テスト）
- Docker
- Nodemon

## ローカル環境でセットアップ

### 1. 必要なパッケージのインストール
```sh
  npm install
```

### 2. 環境変数を設定
`.env` ファイルを作成し、必要な環境変数を設定してください。
```dotenv
NODE_ENV=development
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=db
DB_NAME=todo
DB_PORT=5432
```

### 3. ローカル開発環境の起動
```sh
  npm run dev
```
Nodemonを使用してTypeScriptのコードをホットリロードしながら開発できます。

## Docker環境でセットアップ

### 1. Dockerを使用した開発艦橋を起動
```sh
  npm run dev:docker
```

このコマンドは`docker compose up --build`を実行し、バックエンドとデータベースのコンテナを起動します。

- バックエンド: `http://localhost:5000`
- データベース: `localhost:5432`

### 2. Docker艦橋をクリーンアップ
```sh
  npm run clean:docker
```

このコマンドはコンテナとボリュームを削除します。

### 3. Dockerコンテナ内でのテスト実行
```sh
  npm run test:in-docker
```

## SSH接続
```sh
  npm run ssh:connect
```

ポット2223でroot@127.0.0.1へSSH接続します。