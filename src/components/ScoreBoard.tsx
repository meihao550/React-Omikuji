// 【再レンダリング】
// 親が持つ score の state が変わるたび、このコンポーネントに渡される props も変わるので
// 自動的に再レンダリングされ、画面の数字が更新される。
// 自分で「描き直す」処理を書かなくていいのが React の大きな特徴。
type Props = {
  win: number
  lose: number
  draw: number
}

function ScoreBoard({ win, lose, draw }: Props) {
  return (
    <div className="score-board">
      <div className="score-item">
        <span>勝ち</span>
        <strong>{win}</strong>
      </div>
      <div className="score-item">
        <span>負け</span>
        <strong>{lose}</strong>
      </div>
      <div className="score-item">
        <span>あいこ</span>
        <strong>{draw}</strong>
      </div>
    </div>
  )
}

export default ScoreBoard
