import * as ts from "typescript";
// 单例扫描器
const scanner = ts.createScanner(ts.ScriptTarget.Latest, /* 忽略杂项 */ true);

// 此函数与初始化使用的 `initializeState` 函数相似
function initializeState(text: string) {
  scanner.setText(text);
  scanner.setOnError((message: ts.DiagnosticMessage, length: number) => {
    console.error(message);
  });
  scanner.setScriptTarget(ts.ScriptTarget.ES5);
  scanner.setLanguageVariant(ts.LanguageVariant.Standard);
}

// 使用示例
initializeState(
  `
var foo = 123;
`.trim()
);

// 开始扫描
let token: ts.SyntaxKind = scanner.scan();
while (token != ts.SyntaxKind.EndOfFileToken) {
  //@ts-ignore
  console.log(ts.formatSyntaxKind(token));
  token = scanner.scan();
}
