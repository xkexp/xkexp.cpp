---
title: xkexp.cpp C/Cpp试验场
---

C/Cpp试验场

## 目录说明
```
└─ xkexp.cpp                    组织名,总目录
   ├─ vs                        Visual Studio 试验
   ├─ test                      测试框架 试验
   │  ├─ doctest                doctest 试验
   │  └─ unity                  unity 试验
   └─ README.md                 说明文件(本文件)
```


## vs

### `props` 试验
编译临时文件统一生成到`build`目录.

## test

### `CppUnitTest` 试验
`Visual Studio`自带的单元测试框架

1. 与`Visual Studio`配合紧密
   - 参考[这里](https://docs.microsoft.com/zh-cn/visualstudio/test/writing-unit-tests-for-c-cpp)
   - 在测试资源管理器中可以直接执行
   - 在`CodeLens`中可以直接跑测试
2. 命令行
   - 参考[这里](https://docs.microsoft.com/zh-cn/visualstudio/test/vstest-console-option)
   - 运行**开发者命令提示行**
   - `VsTest.Console UnitTestCpp.dll`
3. 命令行示例
```shell
# 运行UnitTestCpp项目的所有测试用例
VsTest.Console UnitTestCpp.dll

# 运行UnitTestCpp项目的所有名为"TestMethond11"和"TestMethond12"的测试方法
# (只看`TEST_METHOD`指定的方法名,并不区分命名空间,类名等)
VsTest.Console UnitTestCpp.dll /Tests:TestMethod11,TestMethod12

# 运行UnitTestCpp项目,TestCaseFilter

VsTest.Console UnitTestCpp.dll /TestCaseFilter:"FullyQualifiedName~TestMethod11"
# 所以这是正则了个寂寞,和这条是没区别的,并不能区别命名空间和类名
VsTest.Console UnitTestCpp.dll /Tests:TestMethod11
VsTest.Console UnitTestCpp.dll /TestCaseFilter:"TestMethod11"
VsTest.Console UnitTestCpp.dll /TestCaseFilter:"Name~TestMethod11"

# 看起来指定了测试限定名,经测无效
VsTest.Console UnitTestCpp.dll /TestCaseFilter:"FullyQualifiedName=UnitTestCpp.UnitTestCpp.TestMethod11"
VsTest.Console UnitTestCpp.dll /TestCaseFilter:"ClassName=UnitTestCpp.UnitTestCpp"
```

### `doctest` 试验
- [doctest](https://github.com/doctest/doctest)

这是一个`C++`测试框架,纯`C`是用不了的,但是其不是侵入性,如果能接受测试项目是`C++`项目的话,也是不错的.

### `unity` 试验
- [unity](https://github.com/ThrowTheSwitch/Unity)

1. 参考资料少,基本上只能靠官方文档
2. 关于如何开始使用的介绍非常少,建个项目懵半天
3. 需要导入`c`文件,嗯,不是说不行,只能说用多纯头文件有点不习惯吧
4. 输出没有彩色,并且格式挺呆的

额,总体不是很推荐了
![](assets/images/2022-01-31-13-05-16.png)
