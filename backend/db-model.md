# open-forms data model

**Tech stack**
`typescript` `graphql` `apollo server` `node js`

**Common attributes across tables**

```js
common {
	id
	createdAt
	updatedAt
}
```

```js
user {
	id
	fullName
	email
	password // or do social login
}
```

```js
form {
	ownerId
	title
	description [optional]
	isPublished
}
```

```js
McqInput {
	question
	options []
	correctOption
	required
	point [optional]
}
```

```js
CheckboxInput {
	question
	options []
	correctOptions []
	required
	point [optional]
}
```

```js
DropdownInput {
	question
	options []
	correctOption
	required
	point [optional]
}
```

```js
FormInputJunction {
	formId
	inputId
	inputType
}
```

```js
Submission {
	formId
	fullName
	email
	payload {
		inputId
		inputType
		response // 'string' or ['d','d']
	}
}
```
