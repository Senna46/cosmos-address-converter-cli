# Cosmos Address Converter CLI

A simple command-line tool to convert a Bech32 encoded address to a new address with a different prefix.

## Requirements

- [Node.js](https://nodejs.org/) (v14 or later is recommended)

## Setup

1.  Install the dependencies:
    ```bash
    npm install
    ```

2.  Compile the TypeScript source code:
    ```bash
    npm run build
    ```

## Usage

The primary way to use this tool is through the `convert-address.sh` shell script.

### Syntax

```bash
./convert-address.sh <address> <new_prefix>
```

-   `<address>`: The original Bech32 address you want to convert.
-   `<new_prefix>`: The new prefix for the converted address.

### Example

To convert a Cosmos address (`cosmos...`) to a Sunrise address (`sunrise...`):

```bash
./convert-address.sh cosmos1r5v5srda7xfth3hn2s26txvrcrntldjumt8mhl sunrise
```

#### Expected Output

```
sunrise1r5v5srda7xfth3hn2s26txvrcrntldjufxv2xv
```

## Development

The core logic is written in TypeScript (`src/main.ts`). If you make any changes to the source code, you will need to re-compile it by running the build command.

```bash
npm run build
```

This command compiles the files from the `src` directory and places the output JavaScript files into the `dist` directory, according to the settings in `tsconfig.json`.
