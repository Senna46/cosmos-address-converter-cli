/**
 * @file main.ts
 * @summary Bech32形式のアドレスのプレフィックスを変換するコマンドラインツール。
 * @description
 * このスクリプトは、コマンドライン引数としてBech32形式のアドレスと、
 * 変換先のプレフィックスを受け取り、変換後のアドレスを標準出力に表示します。
 *
 * 主な仕様:
 * - 2つのコマンドライン引数を受け取ります: address, newPrefix
 * - 指定されたアドレスが有効なBech32形式であることを検証します。
 * - アドレスをデコードし、新しいプレフィックスで再エンコードします。
 * - 変換後のアドレスを標準出力に出力します。
 *
 * 制限事項:
 * - bech32ライブラリに依存しています。
 * - エラーが発生した場合は、エラーメッセージを標準エラー出力に出力し、終了コード1で終了します。
 */

import { bech32 } from "bech32";

/**
 * @class AddressConverter
 * @description アドレス変換に関する機能を提供します。
 */
class AddressConverter {
  /**
   * @method convertPrefix
   * @summary アドレスのプレフィックスを変換します。
   * @param {string} address - 変換対象のBech32アドレス。
   * @param {string} newPrefix - 変換先のプレフィックス。
   * @returns {string} プレフィックスが変換された新しいアドレス。
   * @throws {Error} アドレスの形式が不正な場合にエラーをスローします。
   */
  public convertPrefix(address: string, newPrefix: string): string {
    try {
      const decoded = bech32.decode(address);
      return bech32.encode(newPrefix, decoded.words);
    } catch (error: unknown) {
      // エラーが Error インスタンスであるか確認し、メッセージを詳細化する
      if (error instanceof Error) {
        throw new Error(
          `Failed to convert address "${address}" to prefix "${newPrefix}": ${error.message}`
        );
      }
      // 不明なエラーの場合
      throw new Error(
        `An unknown error occurred during address conversion for "${address}".`
      );
    }
  }
}

/**
 * @function main
 * @summary スクリプトのエントリーポイント。
 * @description コマンドライン引数を解析し、アドレス変換を実行します。
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length !== 2) {
    console.error("Usage: node <script> <address> <newPrefix>");
    process.exit(1);
  }

  const [address, newPrefix] = args;

  try {
    const converter = new AddressConverter();
    const newAddress = converter.convertPrefix(address, newPrefix);
    console.log(newAddress);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error("An unknown error occurred.");
    }
    process.exit(1);
  }
}

main();
