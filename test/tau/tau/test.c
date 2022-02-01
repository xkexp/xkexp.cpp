#include "tau/tau.h"
#include "taulib.h"

TAU_MAIN() 

TEST(TestSuiteName, TestName) {
    CHECK(1);

    REQUIRE_STREQ(hello(), "hello world");
}