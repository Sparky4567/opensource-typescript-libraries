# Open Source TypeScript Libraries

A small collection of reusable TypeScript utilities built for the [Bun](https://bun.sh) runtime. These libraries cover common tasks such as reading environment/settings files, performing HTTP requests, and fetching JSON data.

## Contents

- `envreader/getenv.ts` — Reads a settings/environment file (JSON format) from disk and returns the parsed object.
- `requests/requests.ts` — A thin wrapper around `fetch` for performing HTTP requests with custom options.
- `getenv.ts` — Example usage of `envreader` that prints the `NAME` and `VERSION` from `settings/settings.env`.
- `getjson.ts` — Example usage of `requests` that fetches and prints JSON from a remote endpoint.
- `settings/settings.env` — Sample settings file in JSON format.

## Usage

These modules are written for Bun. Run any example directly:

```bash
bun getenv.ts
bun getjson.ts
```

### Reading a settings file

```ts
import getenv from "./envreader/getenv.ts";

const settings = await getenv("./settings/settings.env");
console.log(settings.NAME, settings.VERSION);
```

### Making an HTTP request

```ts
import requests from "./requests/requests.ts";

const res = await requests("https://example.com/api", {
  type: "GET",
  headers: { "User-Agent": "my-bot" },
});

if (res.status === 200) {
  console.log(await res.json());
}
```

## Requirements

- [Bun](https://bun.sh) (latest)

## License

This project is licensed under the [MIT License](./LICENSE).
EOF