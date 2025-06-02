import { PublicKey } from '@solana/web3.js'
import { sha256 } from 'js-sha256'

export const baseToValue = (base: number, decimals: number): number => {
	return base * Math.pow(10, decimals)
}

export const valueToBase = (value: number, decimals: number): number => {
	return value / Math.pow(10, decimals)
}

export function getDiscriminator(name: string) {
	return sha256.digest(name).slice(0, 8)
}

export const isValidSolanaAddress = (address: string) => {
	try {
		new PublicKey(address)
		return true
	} catch (e) {
		return false
	}
}
