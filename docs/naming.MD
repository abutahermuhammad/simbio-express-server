# Naming Convention & Practices
This document explain our style of naming. We expect to follow this guidelines throughout the entire application development. Of you find anything missing? Feel free to raise and GitHub issue or contact [SIMBIO](https://simbio.dot9.dev/bug/report).

## Database
- Table name:
    - the tables are the Subjects of the database, thus they are nouns and singular.
    -the relationships between the tables are the Actions that take place between the nouns, thus they are verbs (i.e they are not arbitrarily numbered or named)
    - that is the Predicate
    - Use lower case characters following snake_case pattern.
    - Only use a-z, 0-1 to define a name.
    - Names should be always staring with alphabet.
- Sequence:
- Primary key:
- Foreign key:
- Constraint:
- Index:
- SQL:
    - Use upper case for writing SQL keywords.
    - Use lower

## Prisma Schema
- Names should be in the singular form.
- Following `PascalCase` convention.
- 

## Code & Comment:
- Follow `camelCase` to write a function.
- Use `PascalCase` to define a class name.
- Always use "..." to write strings.

### Resources:
- [Relational table naming convention](https://stackoverflow.com/questions/4702728/relational-table-naming-convention/4703155#4703155)

```
Some of the wonderful things about Standards are:
    - they are all integrated with each other
    - they work together
    - they were written by minds greater than ours, so we do not have to debate them.
```