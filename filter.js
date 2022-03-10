//array of objects to be filtered
const toBeFiltered = [
    {
        id: 1,
        name: 'John',
        company: 'Apple',
        age: 28
    },
    {
        id: 2,
        name: 'Steve',
        company: 'Microsoft',
        age: 25
    },
    {
        id: 3,
        name: 'Steve',
        company: 'Apple',
        age: 35
    }
]

//filters
const filters = {
    id: '',
    name: '',
    company: '',
    age: ''
}

//filter algorithm
const filterArray = (filters, arr) => {
    const getValue = value => (typeof value === 'string' ? value.toUpperCase() : value.toString());
    const filterKeys = Object.keys(filters);
    const filterRes = arr.filter( res => {
        return filterKeys.every( key => {
            if(!filters[key]) return arr;
            return getValue(filters[key]).toString().includes(getValue(res[key]))
        })
    })
    return filterRes;
}

//set filters
const filterById = {...filters, id: 2};//filters by id
const filterByName = {...filters, name: 'Steve'};//filters by name
const filterByNameAndCompany = {...filters, name: 'Steve', company: 'Apple'};//filters by name and company
const filterEmpty = {...filters, age: ''};//empty filter -> returns given array

//use filters on array
const resArray1 = filterArray(filterById, toBeFiltered);
const resArray2 = filterArray(filterByName, toBeFiltered);
const resArray3 = filterArray(filterByNameAndCompany, toBeFiltered);
const resArray4 = filterArray(filterEmpty, toBeFiltered);

//log results
console.log(resArray1);
console.log(resArray2);
console.log(resArray3);
console.log(resArray4);