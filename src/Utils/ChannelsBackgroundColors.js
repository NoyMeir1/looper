const backgroundColors = [
    '#f088b4',
    '#f5aed5',
    '#f3dffe',
    '#c0ccf3',
    '#c0e2f3',
    '#c0f3e9',
    '#fdfcb1',
    '#f3d5c0',
    '#f6b1a0'
];

const getColor = () => {
    return backgroundColors.pop();
}
export default getColor;