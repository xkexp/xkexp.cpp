#include "pch.h"
#include "CppUnitTest.h"

extern "C" {
#include "MainLib.h"
}

using namespace Microsoft::VisualStudio::CppUnitTestFramework;

namespace UnitTestCpp
{
	TEST_CLASS(UnitTestCpp)
	{
	public:
		TEST_METHOD(TestMethod11)
		{
			Assert::AreEqual(foo(), 100);
		}

		TEST_METHOD(TestMethod12)
		{
			Assert::AreEqual(hello(), "hello CppUnitTestLib");
		}
	};


	TEST_CLASS(UnitTestCpp2)
	{
	public:
		TEST_METHOD(TestMethod11)
		{
			Assert::AreEqual(foo(), 100);
		}

		TEST_METHOD(TestMethod22)
		{
			Assert::AreEqual(hello(), "hello CppUnitTestLib");
		}
	};
}
