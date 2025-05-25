# ポートフォリオサイト技術仕様

## 1. システムアーキテクチャ

### 1.1 全体構成
- フロントエンド: Next.js 14
- バックエンド: Go 1.22
- データベース: PostgreSQL 15
- インフラ: Docker + Docker Compose

### 1.2 ディレクトリ構造
詳細はdocs/directory-structure.mdに記述
```
.
├── frontend/                    # Next.jsプロジェクト
├── backend/                    # Goプロジェクト
├── docs/                      # ドキュメント
└── docker/                    # Docker関連ファイル
```

## 2. フロントエンド技術スタック

### 2.1 コア技術
- **Next.js 14**
  - App Router
  - Server Components
  - API Routes
- **TypeScript**
  - 型安全性
  - 開発効率向上
- **Panda CSS**
  - 型安全なCSS-in-JS
  - ビルド時の最適化
  - テーマカスタマイズ
  - レスポンシブデザイン

### 2.2 主要ライブラリ
- **状態管理**
  - TanStack Query (データフェッチング)
    - キャッシュ管理
    - 自動再取得
    - 無限スクロール
    - 楽観的更新
  - Zustand (状態管理)
- **UIコンポーネント**
  - shadcn/ui
  - React Hook Form
- **マークダウン**
  - MDX
  - remark/rehype

## 3. バックエンド技術スタック

### 3.1 コア技術
- **Go 1.22**
  - 標準ライブラリ
  - 並行処理
- **Webフレームワーク**
  - Echo/Gin
  - ルーティング
  - ミドルウェア

### 3.2 主要ライブラリ
- **データベース**
  - GORM
  - pgx (PostgreSQLドライバ)
- **認証**
  - JWT
  - OAuth2.0
- **APIドキュメント**
  - Swagger
  - OpenAPI

## 4. データベース設計

### 4.1 主要テーブル
```sql
-- ユーザーテーブル
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- プロフィールテーブル
CREATE TABLE profiles (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    bio TEXT,
    avatar_url VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 記事テーブル
CREATE TABLE articles (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    status VARCHAR(20) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

## 5. API設計

### 5.1 エンドポイント
```go
// プロフィール関連
GET    /api/v1/profile
PUT    /api/v1/profile

// 記事関連
GET    /api/v1/articles
POST   /api/v1/articles
GET    /api/v1/articles/:id
PUT    /api/v1/articles/:id
DELETE /api/v1/articles/:id

// GitHub連携
GET    /api/v1/github/repos
GET    /api/v1/github/contributions

// 認証関連
POST   /api/v1/auth/login
POST   /api/v1/auth/refresh
```

## 6. 外部サービス連携

### 6.1 GitHub API
- リポジトリ情報取得
- コントリビューション履歴
- 認証: OAuth2.0

### 6.2 Zenn API
- 記事一覧取得
- 記事詳細取得
- 認証: API Key

### 6.3 Qiita API
- 記事一覧取得
- 記事詳細取得
- 認証: API Key

## 7. デプロイメント

### 7.1 開発環境
- Docker Compose
- ホットリロード
- デバッグツール

### 7.2 本番環境
- コンテナオーケストレーション
- CI/CD
- モニタリング

## 8. セキュリティ対策

### 8.1 認証・認可
- JWTトークン
- パスワードハッシュ化
- レート制限

### 8.2 データ保護
- HTTPS通信
- 入力値バリデーション
- SQLインジェクション対策

## 9. パフォーマンス最適化

### 9.1 フロントエンド
- コード分割
- 画像最適化
- キャッシュ戦略

### 9.2 バックエンド
- データベースインデックス
- クエリ最適化
- キャッシュ層

## 10. 監視・ロギング

### 10.1 アプリケーション監視
- エラートラッキング
- パフォーマンスメトリクス
- ユーザー行動分析

### 10.2 ログ管理
- アクセスログ
- エラーログ
- セキュリティログ 