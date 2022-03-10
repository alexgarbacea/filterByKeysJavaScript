# Filter objects by keys
The function `filterArray()` filters the array of objects given as parameter `arr` by the filter object given as parameter `filters`.

## Structure of the filter object
The filter object contains keys named exactly the same as the ones contained in the "to-be-filtered" objects within the given array.
### `Example`
The objects within the array contain the following keys: `id` `age` `name`\
The filter object will contain the following keys: `age` `name`\
In this case it is possible to filter the objects within the given array by `age` and/or `name` but not `id`

## Reset the array
For the main array to be returned simply call the filter function `filterArray()` with the `filters` parameters as the filter object with empty values and the `arr` parameter as the initial array.

### [See code for practical example](https://github.com/alexgarbacea/filterByKeysJavaScript/blob/master/filter.js)
