export type Hand = 'rock' | 'scissors' | 'paper'

export type Result = 'win' | 'lose' | 'draw'

export const HAND_LABEL: Record<Hand, string> = {
  rock: '✊ グー',
  scissors: '✌️ チョキ',
  paper: '✋ パー',
}
