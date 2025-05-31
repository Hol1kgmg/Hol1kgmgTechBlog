# ヘッダー・ドックナビゲーションコンポーネント設計

## 概要

このドキュメントでは、アプリケーション全体で使用される共通のヘッダーとドックナビゲーションコンポーネントの設計方針と実装ガイドラインを定義します。

## ディレクトリ構造

```
frontend/src/shared/ui/
├── Header/
│   ├── Header.tsx
│   └── index.ts
└── DockNavigation/
    ├── DockNavigation.tsx
    └── index.ts
```

## コンポーネント一覧

### 1. Header

#### 概要
- アプリケーションのヘッダーコンポーネント
- すべてのページで一貫したナビゲーション体験を提供

#### 表示要素
1. **ロゴ**
   - サイト名「Hol1kgmgTechBlog」
   - クリックでホームページに遷移
   - フォントサイズ: 1.5rem
   - フォントウェイト: bold

2. **ナビゲーションリンク**
   - 記事一覧
   - カテゴリー
   - タグ
   - アーカイブ
   - 各リンクはホバー時に下線表示

3. **検索機能**
   - 検索ボックス（オプション）
   - プレースホルダー: 「記事を検索...」
   - 検索アイコン付き

4. **レスポンシブ対応**
   - モバイル表示時はハンバーガーメニュー
   - メニュー展開時は全画面オーバーレイ

#### Props
```typescript
interface HeaderProps {
  title: string;
  showSearch?: boolean;
  navigationItems?: Array<{
    label: string;
    href: string;
  }>;
}
```

#### 使用例
```tsx
<Header 
  title="Hol1kgmgTechBlog"
  showSearch={true}
  navigationItems={[
    { label: "記事一覧", href: "/articles" },
    { label: "カテゴリー", href: "/categories" },
    { label: "タグ", href: "/tags" },
    { label: "アーカイブ", href: "/archive" }
  ]}
/>
```

### 2. DockNavigation

#### 概要
- アプリケーションのドックナビゲーションコンポーネント
- 画面下部に固定表示され、主要なナビゲーション機能を提供

#### 表示要素
1. **主要ナビゲーション**
   - ホーム
   - 記事一覧
   - プロフィール
   - 使い方ガイド

2. **インタラクション**
   - ホバー時の拡大アニメーション
   - ラベル表示のアニメーション
   - スムーズな遷移効果

3. **デザイン**
   - 半透明の背景
   - ブラー効果
   - アイコンとラベルの組み合わせ

#### Props
```typescript
interface DockItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

interface DockNavigationProps {
  items?: DockItem[];
}
```

#### 使用例
```tsx
<DockNavigation 
  items={[
    {
      icon: <HomeIcon />,
      label: "ホーム",
      href: "/"
    },
    {
      icon: <ArticleListIcon />,
      label: "記事一覧",
      href: "/articles"
    },
    {
      icon: <ProfileIcon />,
      label: "プロフィール",
      href: "/profile"
    },
    {
      icon: <GuideIcon />,
      label: "使い方ガイド",
      href: "/guide"
    }
  ]}
/>
```

## 設計原則

### 1. 一貫性
- すべてのページで同じデザインと機能を提供
- ユーザーエクスペリエンスの統一性を維持

### 2. レスポンシブ対応
- モバイル、タブレット、デスクトップに対応
- 画面サイズに応じた適切なレイアウト調整

### 3. アクセシビリティ
- 適切なARIA属性の使用
- キーボードナビゲーションのサポート
- スクリーンリーダー対応

## 実装ガイドライン

### 1. コンポーネント作成手順
1. コンポーネントの役割と責務を明確に定義
2. 必要なPropsを設計
3. 基本的なスタイリングを実装
4. アクセシビリティ対応
5. レスポンシブ対応の実装

### 2. 命名規則
コンポーネントの命名規則については、[naming-convention.md](../naming-convention.md)を参照してください。

### 3. スタイリング
- Tailwind CSSを使用
- ダークテーマに最適化
- カスタマイズ可能なclassNameプロパティ

## メンテナンス

### 1. バージョン管理
- コンポーネントの変更履歴を管理
- 破壊的変更の場合は適切なバージョニング

### 2. テスト
- ユニットテストの作成
- スナップショットテストの活用
- アクセシビリティテストの実施

### 3. パフォーマンスモニタリング
- レンダリングパフォーマンスの監視
- バンドルサイズの最適化

## 今後の展開

### 1. 改善計画
- アニメーションの追加
- テーマカスタマイズ機能の強化
- 国際化対応の強化

### 2. 新機能の検討
- ヘッダー：通知機能の追加
- ドックナビゲーション：カスタマイズ機能の追加
- 両方：ダークモード切り替え機能 