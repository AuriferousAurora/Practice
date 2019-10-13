#include <stdio.h>
#include <stdlib.h>

/* For the sake of my potential return to this file, at the time of writing this attempt to replicate the functionality that is occuring
in the correspondent Python directory (located at the same level as this file's containing directory) I do not have sufficient knowledge
of the language C to do so. There are three errors as of my last attempt to compile. Best of luck, future me. */

int find_index(int element, int array[], int array_size) {
  for (int i = 0; i < array_size; i++)
  {
	  if (array[i] == element)
	  {
	    return(element);  /* found */
	  }
  }
  return(-1); /* not found */
}

int find_lowest_positive_int(array) {
  /* Get the size of the array and turn all values positive. */
  int array_size = sizeof(array);
  int positive_array[array_size];
  
  for (int i = 0; i < array_size; i++) 
  {
    positive_array[i] = abs(array[i]);
  }

  /* Declare lowest positive int 1 and increase it only if not in array. */
  int lowest_positive_int = 1;
  for (int i; i < array_size; i++) 
  {
    if (find_index(i, positive_array, array_size) == i)
    {
      lowest_positive_int += 1;
    }
  }
  return lowest_positive_int;
}

int main() {
  int input_1[4] = {3, 4, -1, 1};
  int input_2[3] = {1, 2, 0};
  print(find_lowest_positive_int(input_1)); /* Should return int 2 */
  print(find_lowest_positive_int(input_2)); /* Should return int 3 */
  return 0;
}
