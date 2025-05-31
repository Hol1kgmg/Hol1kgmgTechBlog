# コンポーネント命名規則

このプロジェクトでは、[BCD Design](https://qiita.com/misuken/items/19f9f603ab165e228fe1)を拡張した**BCCD Design**に基づいてコンポーネントの命名を行います。

## BCCD Design の概念

コンポーネントは以下の4つの概念に分類されます：

### Base - 基礎（名詞）
- 基礎的な機能そのもの、事実上の"型"を表す単語
- 例：`Button`、`Input`、`Card`、`List`

### Case - 状況（動詞/形容詞/名詞）
- 状況や状態を表す単語
- 例：`Loading`、`Error`、`Success`、`Active`

### Common - 共通の関心（名詞）
- 複数のDomainで共通して使用できる関心事
- 例：`Category`、`Error`、`Notification`

### Domain - 関心（名詞）
- 人や物など"関心の対象"を表す単語
- 例：`User`、`Article`、`Comment`

## 命名パターン

コンポーネント名は以下のパターンに従って命名します：

1. `Domain + Base`
   - 例：`UserCard`、`ArticleList`

2. `Domain + Case + Base`
   - 例：`UserLoadingCard`、`ArticleErrorList`

3. `Common + Base`
   - 例：`CategoryList`、`ErrorMessage`

4. `Common + Case + Base`
   - 例：`CategoryLoadingList`、`ErrorDisplayMessage`

## ディレクトリ構造

このプロジェクトのディレクトリ構造は[directory-structure.md](./directory-structure.md)に定義されているFeature-Sliced Design (FSD)の原則に従います。

BCCD Designの各概念は、FSDのレイヤーに以下のように配置されます：

- **Base**コンポーネント → `shared/ui/`
- **Case**コンポーネント → `features/ui/`
- **Common**コンポーネント → `shared/common/`
- **Domain**コンポーネント → `entities/{domain}/ui/`

## 命名例

### Baseコンポーネント
- `Button`
- `Input`
- `Card`
- `List`

### Caseコンポーネント
- `LoadingButton`
- `ErrorInput`
- `SuccessCard`

### Commonコンポーネント
- `CategoryList`
- `ErrorMessage`
- `NotificationCard`

### Domainコンポーネント
- `UserProfileCard`
- `ArticleList`
- `CommentInput`

## 注意事項

1. コンポーネント名は必ずパスカルケース（PascalCase）を使用
2. ファイル名はコンポーネント名と一致させる
3. インデックスファイル（index.tsx）は必ず作成し、コンポーネントをエクスポート
4. スタイルファイルはコンポーネントと同じディレクトリに配置
5. テストファイルは`__tests__`ディレクトリに配置

## 参考

- [BCD Design によるコンポーネントの分類](https://qiita.com/misuken/items/19f9f603ab165e228fe1)
- [ディレクトリ構造](./directory-structure.md) 