# digital-papers-graphql
 The Golden Encyclopedia of Islam

# Queries

###### greeting

```
{
    greeting
}
```

###### greeting with argument

```
{
    greeting(name: "Muhammad")
}
```

###### Fetch all subject

```
{
    subjects {
        id
        title
    }
}
```

###### Fetch all defintions

```
{
    defintions {
        id
        definition
    }
}
```

###### Fetch all types

```
{
    types {
        id
        name
    }
}
```
