import type { Hand, Result } from '../types'

const HANDS: Hand[] = ['rock', 'scissors', 'paper']

export function getRandomHand(): Hand {
  const index = Math.floor(Math.random() * HANDS.length)
  return HANDS[index]
}

export function judge(player: Hand, cpu: Hand): Result {
  if (player === cpu) return 'draw'
  if (
    (player === 'rock' && cpu === 'scissors') ||
    (player === 'scissors' && cpu === 'paper') ||
    (player === 'paper' && cpu === 'rock')
  ) {
    return 'win'
  }
  return 'lose'
}
