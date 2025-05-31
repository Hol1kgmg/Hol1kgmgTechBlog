# UIデザインガイドライン

## 概要
本ガイドラインは、ブログアプリケーション全体のUIデザインの一貫性を保つために作成されました。ダッシュボードのデザインをベースに、全ページで統一感のあるユーザー体験を提供します。

## カラーパレット

### メインカラー
- 背景色: `bg-black` (#000000)
- テキスト: `text-white` (#FFFFFF)
- アクセント: `bg-purple-600` (#9333EA)
  - ホバー時: `bg-purple-700` (#7E22CE)

### セカンダリーカラー
- カード背景: `bg-gray-800` (#1F2937)
- ボーダー: `border-gray-700` (#374151)
- テキスト（セカンダリー）: `text-gray-400` (#9CA3AF)

## レイアウト

### 共通レイアウト構造
```
+------------------------+
|        ヘッダー        |
+------------------------+
|                        |
|      メインコンテンツ   |
|                        |
+------------------------+
|      Dockナビゲーション |
+------------------------+
```

### ヘッダー
- 高さ: 固定（`h-16`）
- 背景: `bg-black`
- ボーダー: `border-b border-gray-800`
- 内部パディング: `p-4`
- 最大幅: `max-w-7xl`
- 中央寄せ: `mx-auto`

### メインコンテンツ
- 最大幅: `max-w-7xl`
- パディング: `p-4`
- 背景: `bg-black`
- グリッドレイアウト: `grid grid-cols-12 gap-6`

### Dockナビゲーション
- 位置: 固定（`fixed bottom-0`）
- 背景: `bg-gray-800`
- ボーダー: `border-t border-gray-700`
- 高さ: `h-16`
- アイコン: `w-6 h-6`
- テキスト: `text-xs`

## コンポーネント

### カード
- 背景: `bg-gray-800`
- 角丸: `rounded-lg`
- パディング: `p-4`
- マージン: `space-y-4`

### ボタン
#### プライマリーボタン
```tsx
<button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
  ボタンテキスト
</button>
```

#### セカンダリーボタン
```tsx
<button className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
  ボタンテキスト
</button>
```

### 入力フィールド
```tsx
<input
  type="text"
  className="bg-gray-800 text-white px-4 py-2 rounded-full"
  placeholder="プレースホルダー"
/>
```

## タイポグラフィ

### 見出し
- 大見出し: `text-2xl font-bold`
- 中見出し: `text-xl font-semibold`
- 小見出し: `text-lg font-medium`

### 本文
- 通常テキスト: `text-base`
- 小さいテキスト: `text-sm text-gray-400`

## アニメーション

### トランジション
- カラー変更: `transition-colors`
- ホバー効果: `hover:bg-{color}-{shade}`

## レスポンシブデザイン

### ブレークポイント
- モバイル: < 640px
- タブレット: 640px - 1024px
- デスクトップ: > 1024px

### グリッドシステム
- モバイル: 1カラム
- タブレット: 2カラム
- デスクトップ: 12カラム

## アイコン
- サイズ: `w-6 h-6`
- 色: `text-gray-400`
- ホバー時: `hover:text-white`

## アクセシビリティ
- コントラスト比: 4.5:1以上
- フォーカス表示: 明確なアウトライン
- キーボードナビゲーション: 完全対応

## 実装例

### ページレイアウト
```tsx
<div className="min-h-screen bg-black text-white">
  <header className="border-b border-gray-800 p-4">
    {/* ヘッダーコンテンツ */}
  </header>

  <main className="max-w-7xl mx-auto p-4">
    {/* メインコンテンツ */}
  </main>

  <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700">
    {/* Dockナビゲーション */}
  </nav>
</div>
```

### カードコンポーネント
```tsx
<div className="bg-gray-800 rounded-lg p-4">
  <h2 className="text-xl font-semibold mb-4">カードタイトル</h2>
  <div className="space-y-4">
    {/* カードコンテンツ */}
  </div>
</div>
```

## 参考資料
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Material Design Guidelines](https://material.io/design)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) 