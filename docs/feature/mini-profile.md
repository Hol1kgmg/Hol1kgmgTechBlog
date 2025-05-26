# ミニプロフィール機能

## 概要

スマートフォン画面の1面で完結する、シンプルなプロフィール表示機能です。プロフィール画像とソーシャルリンクのみを表示し、ユーザーの基本的な情報を簡潔に伝えます。

## 機能一覧

### ミニプロフィール表示
- プロフィール画像
- ソーシャルリンク（GitHub、Twitter等）

## ディレクトリ構造

```
src/
├── features/
│   ├── profile/              # メインプロフィール機能
│   │   ├── model/
│   │   │   ├── types.ts
│   │   │   └── store.ts
│   │   ├── ui/
│   │   │   ├── ProfileView.tsx
│   │   │   └── ProfileForm.tsx
│   │   └── api/
│   │       └── profile.ts
│   │
│   └── mini-profile/        # ミニプロフィール機能
│       ├── model/
│       │   ├── types.ts
│       │   └── store.ts
│       ├── ui/
│       │   └── MiniProfile.tsx
│       └── api/
│           └── mini-profile.ts
│
├── entities/
│   └── user/                # ユーザーエンティティ
│       ├── model/
│       │   └── types.ts     # 共通のユーザー型定義
│       └── ui/
│           ├── UserAvatar.tsx    # 共通のアバターコンポーネント
│           └── SocialLinks.tsx   # 共通のソーシャルリンクコンポーネント
│
└── shared/
    ├── api/
    │   └── client.ts
    └── ui/
        └── layout/          # レイアウト関連の共通コンポーネント
            └── Card.tsx     # カードレイアウトコンポーネント
```

## コンポーネント説明

### 共通コンポーネント
- `UserAvatar`: プロフィール画像表示用の共通コンポーネント
- `SocialLinks`: ソーシャルリンク表示用の共通コンポーネント
  - アニメーション付きのソーシャルリンクボタン
  - 参考実装: [Animated Content - ReactBits](https://www.reactbits.dev/animations/animated-content)
- `Card`: レイアウト用の共通コンポーネント

### MiniProfile
シンプルなプロフィール情報を表示するコンポーネントです。
- 共通コンポーネントの利用
  - `UserAvatar`コンポーネント
  - `SocialLinks`コンポーネント
  - `Card`コンポーネント
- レスポンシブデザイン対応

```typescript
// entities/user/ui/SocialLinks.tsx
import { motion } from 'framer-motion';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </motion.a>
  );
};

const SocialLinks: React.FC<{ links: SocialLinks }> = ({ links }) => {
  return (
    <div className="social-links">
      {links.github && (
        <SocialLink
          href={links.github}
          icon={<GitHubIcon />}
          label="GitHub"
        />
      )}
      {links.twitter && (
        <SocialLink
          href={links.twitter}
          icon={<TwitterIcon />}
          label="Twitter"
        />
      )}
    </div>
  );
};
```
## API仕様

### ミニプロフィール取得
```typescript
GET /api/mini-profile
Response: {
  id: string;
  avatar: string;
  socialLinks: {
    github?: string;
    twitter?: string;
  };
}
```

## 状態管理

```typescript
// entities/user/model/types.ts
interface User {
  id: string;
  avatar: string;
  socialLinks: {
    github?: string;
    twitter?: string;
  };
}

// features/mini-profile/model/types.ts
interface MiniProfileState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}
```

## エラーハンドリング

- APIエラー
  - 認証エラー
  - サーバーエラー
  - ネットワークエラー

## セキュリティ考慮事項

- プロフィール画像の表示制限
- XSS対策

## テスト項目

### 単体テスト
- 共通コンポーネント
  - UserAvatar
  - SocialLinks
  - Card
- ミニプロフィール表示コンポーネント
- APIクライアント

### 統合テスト
- ミニプロフィール表示フロー
- エラーハンドリング

### E2Eテスト
- ミニプロフィール表示
- ソーシャルリンクの動作確認 