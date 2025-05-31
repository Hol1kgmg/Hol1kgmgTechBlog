# プロフィール機能

## 概要

ユーザーのプロフィール情報を管理する機能です。ユーザーは自身のプロフィール情報を表示、編集することができます。

## 機能一覧

### プロフィール表示（優先度高）
- ユーザー名
- （メールアドレス）
- プロフィール画像
- 自己紹介文
- ソーシャルリンク（GitHub、Twitter等）
- 技術スタック
- 作成した記事一覧

### プロフィール編集（優先度低）
- プロフィール情報の更新
- プロフィール画像のアップロード
- パスワード変更
- アカウント削除

## ディレクトリ構造

```
src/
├── features/
│   └── profile/
│       ├── model/
│       │   ├── types.ts          # 型定義
│       │   └── store.ts          # 状態管理
│       ├── ui/
│       │   ├── ProfileView.tsx   # プロフィール表示コンポーネント
│       │   └── ProfileForm.tsx   # プロフィール編集フォーム
│       └── api/
│           └── profile.ts        # APIクライアント
│
├── entities/
│   └── user/
│       ├── model/
│       │   └── types.ts          # ユーザーエンティティの型定義
│       └── ui/
│           └── UserAvatar.tsx    # ユーザーアバターコンポーネント
│
└── shared/
    ├── api/
    │   └── client.ts            # APIクライアント設定
    └── ui/
        └── form/                # フォームコンポーネント
```

## コンポーネント説明

### ProfileView
プロフィール情報を表示するコンポーネントです。
- ユーザー情報の表示
- 編集ボタン
- 記事一覧の表示

### ProfileForm
プロフィール情報を編集するフォームコンポーネントです。
- 入力フォーム
- バリデーション
- 画像アップロード
- 送信ボタン

## API仕様

### プロフィール取得
```typescript
GET /api/profile
Response: {
  id: string;
  username: string;
  email: string;
  avatar: string;
  bio: string;
  socialLinks: {
    github?: string;
    twitter?: string;
  };
  techStack: string[];
}
```

### プロフィール更新
```typescript
PUT /api/profile
Request: {
  username?: string;
  email?: string;
  avatar?: File;
  bio?: string;
  socialLinks?: {
    github?: string;
    twitter?: string;
  };
  techStack?: string[];
}
```

## 状態管理

```typescript
interface ProfileState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
  bio: string;
  socialLinks: {
    github?: string;
    twitter?: string;
  };
  techStack: string[];
}
```

## エラーハンドリング

- バリデーションエラー
  - 必須項目の未入力
  - メールアドレスの形式不正
  - ユーザー名の重複

- APIエラー
  - 認証エラー
  - サーバーエラー
  - ネットワークエラー

## セキュリティ考慮事項

- パスワード変更時の認証確認
- プロフィール画像のアップロード制限
- XSS対策
- CSRF対策

## テスト項目

### 単体テスト
- プロフィール表示コンポーネント
- プロフィール編集フォーム
- バリデーション
- APIクライアント

### 統合テスト
- プロフィール表示フロー
- プロフィール編集フロー
- エラーハンドリング

### E2Eテスト
- プロフィール表示
- プロフィール編集
- 画像アップロード
- パスワード変更 