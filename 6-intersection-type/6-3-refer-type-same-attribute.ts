// 同名引用类型属性的合并
type X_Y = { x: { y: number } };
type X_Z = { x: { z: number } };
type X_YZ = X_Y & X_Z;

let x_yz: X_YZ = {
    x: {
        y: 1,
        z: 1
    }
};
console.log(x_yz); // { x: { y: 1, z: 1 } }