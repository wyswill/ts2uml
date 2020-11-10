/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2020-11-10 18:25:03
 * @LastEditTime: 2020-11-10 18:28:59
 */
interface baeNode {
  fileName: string;
  filePath: string;
  isShowProptes: boolean;
  proptes: {
    className: string;
    functionName: string;
    variableName: string;
  };
}
