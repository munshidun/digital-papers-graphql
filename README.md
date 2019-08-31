# digital-papers-graphql
 The Golden Encyclopedia of Islam

# Queries

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