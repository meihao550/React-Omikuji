import type { Hand, Result as ResultType } from '../types'
import { HAND_LABEL } from '../types'

// 【条件分岐】
// 親から受け取った result の値で、表示するメッセージや色を変える。
// JSX 内では if 文ではなく「三項演算子」「&&」「変数に格納してから埋め込む」のパターンが基本。
type Props = {
  playerHand: Hand | null
  cpuHand: Hand | null
  result: ResultType | null
}

function Result({ playerHand, cpuHand, result }: Props) {
  // まだ何も選んでいない時 → 何も表示しない（&& による条件分岐）
  if (playerHand === null || cpuHand === null || result === null) {
    return <p className="result-message">手を選んでね！</p>
  }

  // 結果に応じてメッセージを切り替える
  const message =
    result === 'win' ? '🎉 勝ち！' : result === 'lose' ? '😢 負け…' : '🤝 あいこ'

  return (
    <div className={`result result-${result}`}>
      <p>あなた: {HAND_LABEL[playerHand]}</p>
      <p>CPU　 : {HAND_LABEL[cpuHand]}</p>
      <p className="result-message">{message}</p>
    </div>
  )
}

export default Result
