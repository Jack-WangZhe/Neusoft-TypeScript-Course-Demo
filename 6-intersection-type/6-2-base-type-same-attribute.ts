// 同名基础类型属性的合并
type XZ = { x: number; z: number; };
type YZ = { y: string; z: string; };
type XYZ = XZ & YZ;

let xyz1: XYZ = {
    x: 1,
    y: '1',
    z: 1 // Type 'number' is not assignable to type 'never'.
};
let xyz2: XYZ = {
    x: 1,
    y: '1',
    z: '1' // Type 'string' is not assignable to type 'never'.
};

// 因为同名的z属性经过合并后,是string&number类型,很明显这种类型不复存在,故z的类型是never