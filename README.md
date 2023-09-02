# azle-guide

## DFX

```
The DFINITY command-line execution environment (dfx) is the primary tool for creating, deploying, and managing the dapps you develop for the IC.

Use the dfx parent command with flags and subcommands to specify the operations you want to perform with or without optional arguments.
```



### Reference

- `sh -ci "$(curl -fsSL https://smartcontracts.org/install.sh)"`
```
Installation of dfx cli
```

- `npx azle new <project-name>`
```
Generate new azle project
```

- `dfx start --background --clean`
```
Start replica (main cluster)
```

- `dfx stop`
```
Stop replica (main cluster)
```

- `dfx deploy <cluster-name>`
```
To deploy canisters to local (Deployment)

<cluster-name> refers to the name of cluster to run inside 'dfx.json'
```

- `dfx canister call <canister-name> <function-name> <args>`
```
To call functions of a canister

- <canister-name> refers to the name of cluster to run inside 'dfx.json'

- <function-name> refers to the name of the function inside of <canister-name> 

- <args> refers to required args of <function-name>

```


