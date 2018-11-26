const filterData = [
    {
    "filterCategory" : "Filter By Price",
    "filterType" : "radio",
    "filters" : [
                {"type" : "price low to high" , "value" : "asc" ,"name" : "ByPrice"},
                {"type" : "price high to low" , "value" : "desc","name" : "ByPrice"}
                ]
    },
    {
    "filterCategory" : "Filter By Space",
    "filterType" : "checkbox",
    "filters" : [
                {"type" : "1BHK" , "value" : "1BHK","name" : "BySpace"},
                {"type" : "2BHK" , "value" : "2BHK","name" : "BySpace"},
                {"type" : "3BHK" , "value" : "3BHK","name" : "BySpace"}
                ]
    },
    {
    "filterCategory" : "Filter By City",
    "filterType" : "radio",
    "filters" : [
                {"type" : "Bangalore" , "value" : "Bangalore","name":"ByCity"},
                {"type" : "Mumbai" , "value" : "Mumbai","name":"ByCity"},
                {"type" : "Delhi" , "value" : "Delhi","name":"ByCity"}
                ]
    }
];

export default filterData;