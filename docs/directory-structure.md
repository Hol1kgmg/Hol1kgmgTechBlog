# ディレクトリ構成

## 概要

このプロジェクトは、Feature-Sliced Design (FSD) と Boundary-Driven Design (BDD) を組み合わせたアーキテクチャを採用しています。
フロントエンドはFSDに基づいて機能単位でモジュール化し、バックエンドはBDDに基づいてレイヤー分離を行っています。

## ルートディレクトリ構成

```
.
├── frontend/                    # Next.jsプロジェクト
├── backend/                    # Goプロジェクト
├── docs/                      # ドキュメント
└── docker/                    # Docker関連ファイル
```

## フロントエンド構成（FSD）

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # 認証関連ページ
│   │   │   ├── login/        # ログインページ
│   │   │   └── register/     # 登録ページ
│   │   ├── (dashboard)/      # ダッシュボード
│   │   │   ├── profile/      # プロフィール管理
│   │   │   ├── articles/     # 記事管理
│   │   │   └── projects/     # プロジェクト管理
│   │   └── page.tsx          # トップページ
│   │
│   ├── features/              # 機能単位のモジュール
│   │   ├── auth/             # 認証機能
│   │   │   ├── model/       # 認証の状態管理
│   │   │   ├── ui/          # 認証関連のUI
│   │   │   └── api/         # 認証APIクライアント
│   │   │
│   │   ├── profile/          # プロフィール機能
│   │   │   ├── model/       # プロフィールの状態管理
│   │   │   ├── ui/          # プロフィール関連のUI
│   │   │   └── api/         # プロフィールAPIクライアント
│   │   │
│   │   ├── articles/         # 記事管理機能
│   │   │   ├── model/       # 記事の状態管理
│   │   │   ├── ui/          # 記事関連のUI
│   │   │   └── api/         # 記事APIクライアント
│   │   │
│   │   └── projects/         # プロジェクト管理機能
│   │       ├── model/       # プロジェクトの状態管理
│   │       ├── ui/          # プロジェクト関連のUI
│   │       └── api/         # プロジェクトAPIクライアント
│   │
│   ├── entities/              # ビジネスエンティティ
│   │   ├── user/             # ユーザー関連
│   │   │   ├── model/       # ユーザーモデル
│   │   │   └── ui/          # ユーザー関連のUI
│   │   │
│   │   ├── article/          # 記事関連
│   │   │   ├── model/       # 記事モデル
│   │   │   └── ui/          # 記事関連のUI
│   │   │
│   │   └── project/          # プロジェクト関連
│   │       ├── model/       # プロジェクトモデル
│   │       └── ui/          # プロジェクト関連のUI
│   │
│   ├── shared/                # 共有リソース
│   │   ├── api/              # APIクライアント
│   │   │   ├── client.ts    # APIクライアント設定
│   │   │   └── types.ts     # API型定義
│   │   │
│   │   ├── config/           # 設定
│   │   │   ├── constants.ts # 定数
│   │   │   └── env.ts       # 環境変数
│   │   │
│   │   ├── lib/              # ユーティリティ
│   │   │   ├── hooks/       # カスタムフック
│   │   │   ├── utils/       # ユーティリティ関数
│   │   │   └── validation/  # バリデーション
│   │   │
│   │   ├── ui/               # UIコンポーネント
│   │   │   ├── button/      # ボタン
│   │   │   ├── input/       # 入力フィールド
│   │   │   └── card/        # カード
│   │   │
│   │   └── types/            # 型定義
│   │       ├── common.ts    # 共通型
│   │       └── api.ts       # API型
│   │
│   └── widgets/               # 複合コンポーネント
│       ├── header/           # ヘッダー
│       │   ├── index.tsx    # エントリーポイント
│       │   └── styles.ts    # スタイル
│       │
│       ├── footer/           # フッター
│       │   ├── index.tsx    # エントリーポイント
│       │   └── styles.ts    # スタイル
│       │
│       └── sidebar/          # サイドバー
│           ├── index.tsx    # エントリーポイント
│           └── styles.ts    # スタイル
│
├── public/                    # 静的ファイル
│   ├── images/               # 画像
│   └── fonts/                # フォント
│
└── styles/                    # グローバルスタイル
    ├── globals.css           # グローバルCSS
    └── theme.ts              # テーマ設定
```

## バックエンド構成（BDD）

```
backend/
├── cmd/                       # エントリーポイント
│   └── api/                  # APIサーバー
│       └── main.go           # メインエントリーポイント
│
├── internal/                  # 内部パッケージ
│   ├── domain/               # ドメインモデル
│   │   ├── user/            # ユーザードメイン
│   │   │   ├── entity.go    # エンティティ
│   │   │   └── service.go   # ドメインサービス
│   │   │
│   │   ├── article/         # 記事ドメイン
│   │   │   ├── entity.go    # エンティティ
│   │   │   └── service.go   # ドメインサービス
│   │   │
│   │   └── project/         # プロジェクトドメイン
│   │       ├── entity.go    # エンティティ
│   │       └── service.go   # ドメインサービス
│   │
│   ├── application/          # アプリケーションサービス
│   │   ├── user/            # ユーザーサービス
│   │   │   ├── service.go   # サービス実装
│   │   │   └── dto.go       # データ転送オブジェクト
│   │   │
│   │   ├── article/         # 記事サービス
│   │   │   ├── service.go   # サービス実装
│   │   │   └── dto.go       # データ転送オブジェクト
│   │   │
│   │   └── project/         # プロジェクトサービス
│   │       ├── service.go   # サービス実装
│   │       └── dto.go       # データ転送オブジェクト
│   │
│   ├── infrastructure/       # インフラ層
│   │   ├── database/        # データベース
│   │   │   ├── postgres/    # PostgreSQL
│   │   │   └── migrations/  # マイグレーション
│   │   │
│   │   ├── cache/           # キャッシュ
│   │   │   └── redis/       # Redis
│   │   │
│   │   └── external/        # 外部サービス
│   │       ├── github/      # GitHub API
│   │       ├── zenn/        # Zenn API
│   │       └── qiita/       # Qiita API
│   │
│   └── interfaces/           # インターフェース層
│       ├── http/            # HTTPハンドラー
│       │   ├── handler/     # ハンドラー
│       │   ├── middleware/  # ミドルウェア
│       │   └── router/      # ルーター
│       │
│       └── grpc/            # gRPCハンドラー
│           ├── handler/     # ハンドラー
│           └── proto/       # Protocol Buffers
│
├── pkg/                      # 公開パッケージ
│   ├── logger/              # ロガー
│   ├── validator/           # バリデーター
│   └── errors/              # エラー定義
│
└── api/                      # API定義
    ├── proto/               # Protocol Buffers
    │   ├── user.proto      # ユーザーAPI
    │   ├── article.proto   # 記事API
    │   └── project.proto   # プロジェクトAPI
    │
    └── openapi/            # OpenAPI仕様
        └── swagger.yaml    # Swagger定義
```

## Docker構成

```
docker/
├── frontend/                 # フロントエンド用
│   ├── Dockerfile          # ビルド設定
│   └── nginx.conf          # Nginx設定
│
├── backend/                 # バックエンド用
│   ├── Dockerfile          # ビルド設定
│   └── wait-for-it.sh      # 起動待機スクリプト
│
└── db/                     # データベース用
    └── init.sql            # 初期化SQL
```

## アーキテクチャの特徴

### フロントエンド（FSD）

#### レイヤー構造
- **features/** - 機能単位のモジュール
  - 各機能のロジック、UI、状態管理をカプセル化
  - 機能間の依存関係を最小限に抑制
  - 独立した機能としての再利用性
  - テストの容易性

- **entities/** - ビジネスエンティティ
  - 再利用可能なビジネスロジック
  - ドメインモデルの表現
  - データ構造の定義
  - バリデーションルール

- **shared/** - 共有リソース
  - アプリケーション全体で使用する共通コンポーネント
  - ユーティリティ関数や型定義
  - 定数や設定値
  - グローバルなスタイル定義

- **widgets/** - 複合コンポーネント
  - 複数のエンティティや機能を組み合わせたUI
  - ページレイアウトの構成要素
  - 再利用可能な複合UI
  - 状態管理の統合

#### 依存関係の方向
- features → entities → shared
- widgets → features/entities
- 循環依存の防止
- 明確な責務の分離

### バックエンド（BDD）

#### レイヤー構造
- **domain/** - ドメインレイヤー
  - ビジネスロジックの中核
  - エンティティとドメインサービス
  - ドメインルールの実装
  - ビジネスロジックの集約

- **application/** - アプリケーションレイヤー
  - ユースケースの実装
  - ドメインオブジェクトの操作
  - トランザクション管理
  - ドメインイベントの処理

- **infrastructure/** - インフラストラクチャレイヤー
  - 外部サービスとの連携
  - データベースアクセス
  - キャッシュ管理
  - 外部APIクライアント

- **interfaces/** - インターフェースレイヤー
  - 外部との通信インターフェース
  - APIエンドポイントの実装
  - リクエスト/レスポンスの変換
  - エラーハンドリング

#### 依存関係の方向
- interfaces → application → domain
- infrastructure → domain
- ドメインの独立性確保
- 外部依存の分離

### 統合ポイント

#### フロントエンドとバックエンドの連携
- フロントエンドの`entities`とバックエンドの`domain`の対応
  - データモデルの一貫性
  - 型定義の共有
  - バリデーションルールの統一

- APIインターフェースの一貫性
  - RESTful APIの設計
  - エラーレスポンスの統一
  - 認証・認可の統合

- データモデルの共有
  - 共通の型定義
  - データ変換の一元管理
  - バージョン管理の統一

#### 開発フロー
1. ドメインモデルの定義（バックエンド）
2. APIインターフェースの設計
3. フロントエンドのエンティティ実装
4. 機能モジュールの開発
5. UIの実装

#### 品質管理
- 型安全性の確保
- テストの自動化
- コードレビューの効率化
- ドキュメントの整備 