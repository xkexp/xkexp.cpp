#include <stdio.h>

#ifdef __EMSCRIPTEN__
#include <emscripten.h>
#endif

int main(int argc, char** argv) {
    printf("Hello World!\n");
    printf("Hello Function!\n");
    return 0;
}

int xkFunc(int argc, char** argv) {
    printf("xkFunc be called! return 100\n");
    return 100;
}
