
export function toggleTlDirection(tl) {
	tl.reversed() ? tl.play() : tl.reverse();
}