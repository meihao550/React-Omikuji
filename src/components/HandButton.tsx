import type { Hand } from '../types'
import { HAND_LABEL } from '../types'

// 【イベント処理】
// onClick を受け取り、押されたときに親へ「選ばれた手」を伝える。
// ボタン自身は状態を持たない（=「子は受け取って表示するだけ」というReactの考え方）。
type Props = {
  hand: Hand
  onSelect: (hand: Hand) => void
}

function HandButton({ hand, onSelect }: Props) {
  return (
    <button type="button" className="hand-button" onClick={() => onSelect(hand)}>
      {HAND_LABEL[hand]}
    </button>
  )
}

export default HandButton
