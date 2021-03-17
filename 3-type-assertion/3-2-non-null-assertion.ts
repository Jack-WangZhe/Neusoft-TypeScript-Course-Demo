// 函数中忽略undefined和null类型
function myFunc(maybeString: undefined | null | string) {
  // 注意: 需要通过tsc --init初始化tsconfig.json文件,并且将strictNullChecks设为true,默认不开启
  // Type 'string | null | undefined' is not assignable to type 'string'.
  // Type 'undefined' is not assignable to type 'string'. 
  const onlyString: string = maybeString; // Error
  const ignoreUndefinedAndNull: string = maybeString!; // Ok
}