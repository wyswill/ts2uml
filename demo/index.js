/*
 * @LastEditors: wyswill
 * @Description: 文件描述
 * @Date: 2020-11-10 17:38:06
 * @LastEditTime: 2020-11-12 17:54:17
 */
import B from "./b.js";
import c from "./c";
class a {
  constructor() {
    console.log("a");
  }
  bb() {
    const _b = new B();
  }
}
const _a = new a();
_a.bb();
