// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) { }
}

// A function returning 'never' cannot have a reachable end point.
function limitLoop(): never {
    for (let i = 0; i < 5; i++) {
        // ...
    }
}