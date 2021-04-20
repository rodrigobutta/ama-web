
## Web
React

### Install and Build

1) In `ama-env` do `fig build web`
2) `npm install` (because we need VSCODE to have node_modules also, despite the working ones are in docker container )

### Run
In `ama-env` do `fig up web`

### Test Run
http://localhost:3000/

### Debug VSCODE
(when up running): Start debug from VSCODE: `Docker: Web  Chrome`


# Run Prettier Batch
(shouldnt be needed but if we paste code from somewhere else)

(web and node)

`npx prettier --write .`