import React, { Component } from "react";

interface Iprops {
  logo?: string;
  className?: string;
  alt?: string;
}
export const Logo = (props: any) => {
  const { logo, className, alt } = props;
  return <img src={logo} className={className} alt={alt} />;
};

interface Props {
  handleSubmit: (value: string) => void;
}
interface State {
  itemText: string;
}

export class todoInput extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      itemText: "",
    };
  }

  private updateValue(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ itemText: e.target.value });
  }

  private inputRef = React.createRef<HTMLInputElement>();

  render() {
    return (
      <input
        onChange={this.updateValue}
        ref={this.inputRef}
        type="text"
        value={this.state.itemText}
      />
    );
  }
}
// ts高级类型
// 1.record
// 1.1 demo1
type petsGroup = "dog" | "cat" | "fish";

interface IPetInfo {
  name: string;
  age: number;
}

type IPets = Record<petsGroup | "otherAnimal", IPetInfo>;

const animalsInfo: IPets = {
  dog: {
    name: "dogName",
    age: 2,
  },
  cat: {
    name: "catName",
    age: 3,
  },
  fish: {
    name: "fishName",
    age: 4,
  },
  otherAnimal: {
    name: "other",
    age: 5,
  },
};

// 1.2 demo2
// enum IHttpMethods {
//   GET = "get",
//   POST = "post",
//   DELETE = "delete",
//   PUT = "put",
// }

// const methods = ["get", "post", "delete", "put"];

// interface IHttpFn {
//     <T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
// }

// type IHttp = Record<IHttpMethods, IHttpFn>;

// const httpMethods: IHttp = methods.reduce((map: any, method: string) => {
//     map[method] = (url: string, options: AxiosRequestConfig = {}) => {
//         const { data, ...config } = options;
//         return (axios as any)[method](url, data, config)
//             .then((res: AxiosResponse) => {
//                 if (res.data.errCode) {
//                     //todo somethins
//                 } else {
//                     //todo somethins
//                 }
//             });
//     }
//     return map
// }, {})
interface Person {
  name: string;
  age: number;
}

// 2.partial
type Person2 = Partial<Person>;
// person2 === {name?:string, age?:string}

// 3.required
type Person3 = Required<Person>;
// person3 === {name:string, age:string}

// 4.pick
type Person4 = Pick<Person, "name">;
// person4 === {name:string}

// 5.readonly
type Person5 = Readonly<Person>;
// person4 === {
//        readonly name: string;
//        readonly age?: number;
//  }

// 6.record

type Person6 = Record<"name" | "age", string>;

export interface SetLanguage {
  type: string;
  language: string;
}

// 函数定义的几种方式
// 1.函数声明定义
function sum(x:number, y:number):number{
    return  x + y
}
// 2.函数表达式定义

const mySum = function (x:number, y:number):number{
    return x+y
}
// 3.用接口定义函数
interface ISearchFunc {
(source : string, substring : string):boolean;
};

 let  searchfunc : ISearchFunc;
 searchfunc = function (source : string, substring : string) {
 return source.search(substring) !== -1;
 };
 console.log(searchfunc("2334455",'45'));

//  2.4、函数参数：可选参数 和默认值参数
 // 可选参数后面不允许再出现必须参数了
 // 默认参数：默认值的参数识别为可选参数
 // ...rest 的方式获取函数中的剩余参数 字符串数组
 function buildName( firstName:string, lastName?:string, age : number = 10,...items:string[]) {

  console.log(items);

  if(lastName){
      return firstName + '加上' + lastName + '数字' + age.toString();
  }else {
      return firstName + age.toString();
  }
}
 console.log((buildName("tom","455",23,'5',"45","法国队和规范")));

//  箭头函数
const testFunc = (x:number):string => {
    return ''
}

type aa = {
  name:string;
  [prop:string]:any
}

let bb:aa = {
  name:'xx',
  'xx':'xx',
  age:2
}