#include <stdio.h>
int main() {   
    int x = 10;  
     x = 20 ;  
      printf("%d\n", x);
    // Implicit type mixing not allowed:
    printf("%d\n", "5" - 2);  // ❌ Compile-time error
    // Must cast manually:
    float y = (float)5 / 2;   // ✅ 2.5
    printf("%f\n", y);   return 0;
}
