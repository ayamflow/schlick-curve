const epsilon = 0.0000001

/* 
    x [0, 1]
    slope >= 0
    threshold [0, 1]
*/
export default function biasGain(x, slope, threshold) {
    if (x < threshold) {
        return (threshold * x) / (x + slope * (threshold - x) + epsilon)
    }

    return (((1 - threshold) * (x - 1)) / (1 - x - slope * (threshold - x) + epsilon)) + 1
}