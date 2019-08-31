# digital-papers-graphql
 The Golden Encyclopedia of Islam

# Queries

###### Fetch with filters

```
{
    subjects(typeName: "Person") {
		title
		definitions {
			definition
		}
	}
}
```

```
{
    subjects(typeId: 1) {
		title
		definitions {
			definition
		}
	}
}
```

###### Fetch all subjects with definitions

```
query Subjects {
	subjects {
		title
		definitions {
			definition
		}
	}
}
```

###### Get subjects with full information

```
{
    subjects {
		title
		type {
			name
		}
		definitions {
			definition
		}
	}
}
```