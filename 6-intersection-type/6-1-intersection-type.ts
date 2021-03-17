// 交叉类型定义
type X = { x: number; };
type Y = { y: string; };
// Point是基于X和Y的交叉类型
type Point = X & Y;

let point: Point = {
    x: 1,
    y: '1'
};