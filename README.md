# open-forms backend api

| Description      | URL |
| ----------- | ----------- |
| API base url      | [https://open-forms.herokuapp.com/api](https://open-forms.herokuapp.com/api)       |
| Swagger docs   | [https://open-forms.herokuapp.com/api/docs](https://open-forms.herokuapp.com/api/docs)        |


## Database schema

**Common attributes**
```js
createdAt: Date
updatedAt: Date
```

**User**
```js
id: Number
fullName: String
email: String
password: String
```

**Form**
```js
id: Number
title: String
description: String
ownerId: Number (ref 'User')
publishedAt: Date
```
**Input**
```js
id: Number
question: String
type: String enum(mcq, checkbox, dropdown)
formId: Number (ref 'Form')
```

**Option**
```js
id: Number
content: String
isCorrect: Boolean
inputId: Number (ref 'Input')
```














