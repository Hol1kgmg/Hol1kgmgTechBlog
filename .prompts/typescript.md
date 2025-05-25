# TypeScript特化プロンプト

## コーディング規約

```prompt
以下のコーディング規約に従って実装してください：

1. コード品質
- ESLintとPrettierを使用してコードの品質を維持
- コンポーネントは関数コンポーネントを使用
- TypeScriptの型定義を適切に行う

2. 命名規則
- 変数・関数名はキャメルケース
- 型・インターフェース名はパスカルケース
- 定数は大文字のスネークケース

3. ファイル構成
- 1ファイルあたりの行数は800行以内
- 関連する機能は同じディレクトリに配置
- 型定義は`types.ts`に集約

4. コメント
- 複雑なロジックには説明コメントを追加
- 公開APIにはJSDocコメントを追加
- TODOコメントには担当者と期限を明記

5. エラーハンドリング
- 例外は適切な型で定義
- エラーメッセージは具体的に記述
- エラー発生時のリカバリー処理を実装
```

## テスト駆動開発

```prompt
TDDを実施する。コードを生成するときは、それに対応するユニットテストを常に生成する。
コードを追加で修正したとき、`npm test`がパスすることを常に確認する。

出力例：
```ts
function add(a: number, b: number) { return a + b }
test("1+2=3", () => {
  expect(add(1, 2)).toBe(3);
});
```
```

## コメントによる自己記述

```prompt
各ファイルの冒頭にはコメントで仕様を記述する。

出力例：
```ts
/**
 * 2点間のユークリッド距離を計算する
**/
type Point = { x: number; y: number; };
export function distance(a: Point, b: Point): number {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}
```
```

## In Source Testing

```prompt
vitestで実装と同じファイルにユニットテストを書く。

出力例：
```ts
export function distance(a: Point, b: Point): number {...}
if (import.meta.vitest) {
  const {test, expect} = import.meta.vitest;
  test("ユークリッド距離を計算する", () => {
    const result = distance({x: 0, y: 0}, {x: 3, y: 4});
    expect(distance(result)).toBe(5)
  });
}
```
```

## ドメイン型の集約

```prompt
src/types.tsにアプリケーション内のドメインモデルを集約する。
その型がどのように使われるかをjsdocスタイルのコメントで記述

出力例：
```ts
/**
 * キャッシュのインターフェース抽象
 */
export type AsyncCache<T> = {
  get(): Promise<T | void>;
  has(): Promise<boolean>;
  set(value: T): Promise<void>;
}
```
```

## 関数型ドメインモデリング

```prompt
TypeScriptで関数型ドメインモデリングを行う。classを使わず関数による実装を優先する。
代数的データでドメインをモデリングする。

出力例：
```ts
type FetchResult<T, E> = {
  ok: true;
  data: T
} | {
  ok: false;
  error: E
}
```
```

## ファイル配置規則

```prompt
プロジェクトのディレクトリ構造は docs/directory-structure.md に定義されたFSDとBDDの原則に従ってください。
各ファイルの配置は、機能の分離とテストの管理を考慮して、定義された構造に従って実装してください。
```

## BDDテスト構造

```prompt
BDDテストは以下の構造に従う。

__tests__/
  <feature-name>.feature    # Gherkinシナリオ定義
  <feature-name>.steps.ts   # ステップ定義
  <component-name>.test.ts  # ユニットテスト
```

## Deno開発環境

```prompt
Denoのnode互換モードで単体ファイルに完結して実装する。

出力例：
```ts
/**
 * <このモジュールの仕様>
**/
import fs from "node:fs";
import { ok } from 'npm:neverthrow@8.2.0';
export function add(a: number, b: number): number {
  return a + b;
}
if (import.meta.main) {
  console.log(add(3, 4));
}
import { expect } from "@std/expect";
Deno.test("足し算の結果を返すこと", () => {
  expect(add(1, 2)).toBe(3);
})
```
```

## エラーハンドリング

```prompt
doからはじまる関数はtry-catchを必須とする。

出力例：
```ts
// doからはじまる関数はtry-catchを必須
try {
  const v = await doGetData();
} catch (_err) {}

// 例外中立: doからはじまる関数のみtry-catch免除
async function doMain() {
  await doXXX();
  await doYYY();
}
```
``` 