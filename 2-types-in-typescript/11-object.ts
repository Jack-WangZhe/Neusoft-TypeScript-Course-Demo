// node_modules/typescript/lib/lib.es5.d.ts
interface Object {
    constructor: Function;
    toString(): string;
    toLocaleString(): string;
    valueOf(): Object;
    hasOwnProperty(v: PropertyKey): boolean;
    isPrototypeOf(v: Object): boolean;
    propertyIsEnumerable(v: PropertyKey): boolean;
  }

  // node_modules/typescript/lib/lib.es5.d.ts
interface ObjectConstructor {
    /** Invocation via `new` */
    new(value?: any): Object;
    /** Invocation via function calls */
    (value?: any): any;
    readonly prototype: Object;
    getPrototypeOf(o: any): any;
    // ···
  }
  
  declare var Object: ObjectConstructor;

// Type {}
const obj = {};
// Property 'name' does not exist on type '{}'.
obj.name = "Jack";
// execute successfully
obj.toString();