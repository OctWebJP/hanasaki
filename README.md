# 酒処 はなさき — Website

東京・西小山の小さな海鮮居酒屋「酒処 はなさき」のためのウェブサイト。

> A website concept for **Sakadokoro Hanasaki**, a small neighborhood
> izakaya in Nishi-Koyama, Meguro-ku, Tokyo (since 2014).

## ファイル

```
hanasaki/
├── index.html   ← マークアップ
├── styles.css   ← デザインシステム & 全スタイル
└── script.js    ← ナビ開閉、スクロール演出、提灯パララックス
```

依存はGoogle Fonts（Shippori Mincho B1, Noto Serif JP, Yuji Syuku, Klee One, Cormorant Garamond）のみ。ビルドステップ不要。

## ローカルでのプレビュー

```bash
cd hanasaki
python3 -m http.server 8765
# → http://localhost:8765/
```

または、任意の静的ファイルサーバー（`npx serve`、Live Server拡張など）で動作します。

## 公開

そのままの状態で、GitHub Pages / Netlify / Vercel / Cloudflare Pages 等にデプロイできます。Drag & drop でアップロードするだけ。

## 含まれている情報

このサイトは、リサーチで確認できた事実のみを掲載しています:

- **店名**: 酒処 はなさき (Sakadokoro Hanasaki) — ひらがな表記が正式
- **住所**: 〒152-0011 東京都目黒区原町1-10-9
- **最寄駅**: 東急目黒線「西小山」駅 徒歩2分
- **営業**: 17:30〜 / 定休日 火曜日
- **特徴**: 三浦三崎港直送の鮮魚 + 元イタリアン経験のあるご主人の和洋折衷メニュー
- **席数**: 約16〜20席（カウンター＋テーブル）
- **概算予算**: ¥3,000〜¥5,000

> **メニューの価格はリサーチ時点（2024年）の参考値**を掲載しています。  
> 実際にお店に確認のうえ、ご利用ください。

## カスタマイズ

- **色**: `styles.css` 冒頭の `:root` 内のCSS変数（`--aka` 朱、`--paper` 和紙、`--gold`等）を編集
- **フォント**: 同じく `:root` の `--f-display` / `--f-body` / `--f-brush` を差し替え
- **メニュー**: `index.html` の `.menu__list` 内の `<li>` を編集（実際のお品書きに）
- **電話番号**: 現在「店頭にて」と記載していますが、お店から番号の公開許可がでたら `.info-card--reserve` のセクションに追記してください
- **写真**: お店の写真があれば、ヒーローや店内セクションに追加するとさらに魅力的になります

## デザインメモ

- **アトモスフィア**: 暖簾をくぐった後の、暗い店内に灯る提灯の温かみ
- **配色**: 深い藍（夜）× 朱（暖簾・提灯の灯）× 和紙のクリーム
- **タイポグラフィ**: しっぽり明朝B1 ＋ Yuji Syuku（手書き壁メニュー） ＋ Cormorant Garamond（欧文）
- **モチーフ**: 壁書きの手書きメニュー、墨で書かれた漢数字（壱弐参四五）、朱印、魚影

---

© Concept design — 酒処 はなさき公式サイトではありません。
