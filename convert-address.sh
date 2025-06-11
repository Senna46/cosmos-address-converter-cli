#!/bin/bash

# スクリプトの概要:
# このスクリプトは、Bech32形式のアドレスのプレフィックスを変換するためのラッパースクリプトです。
# Node.jsで作成された変換ツールを呼び出します。
#
# 主な仕様:
# - 2つの引数を受け取ります: <address> <newPrefix>
# - 引数の数が2でない場合は、使用方法を表示して終了します。
# - Node.jsスクリプト `dist/main.js` を実行し、引数をそのまま渡します。
#
# 制限事項:
# - Node.jsがインストールされている必要があります。
# - `npm install`と`npm run build`が事前に実行されている必要があります。

# 引数の数をチェック
if [ "$#" -ne 2 ]; then
    echo "使用方法: $0 <address> <newPrefix>"
    exit 1
fi

# Node.jsスクリプトを実行
node "$(dirname "$0")/dist/main.js" "$1" "$2" 