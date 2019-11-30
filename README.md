# developer-lint
Central shareable eslint config for all developer hole projects

```bash
npm i --save-dev developer-hole/eslint-config-developer
```

## standard eslint rules
```json
{
	"extends": "developer"
}
```
requires:
* eslint

## eslint-typescript rules
```json
{
	"extends": "developer/eslint-ts"
}
```
requires:
* eslint
* @typescript-eslint/parser
* @typescript-eslint/eslint-plugin

## tslint rules
```json
{
	"extends": "eslint-config-developer/ts"
}
```
requires:
* tslint