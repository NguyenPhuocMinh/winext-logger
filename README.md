## Plugin support for win

### Structure
```
.
├── README.md
├── config
│   ├── options.js
│   └── profiles.js
├── index.js
├── lib
│   └── logger.js
├── middleware
│   └── logger.js
├── package-lock.json
├── package.json
├── tree.text
└── utils
    ├── convert-util.js
    ├── log-util.js
    └── validate-util.js
```

### How to use

**Apply middleware**

```
const logger = require('winext-logger');

app.use(morgan(logger.loggerMiddleware))
```

**Custom log color**

```
const logger = require('winext-logger');

const loggerTracer = logger.getLogTracer(appName, name {
  error: '#f44336',
  warn: '#ffeb3b',
  info: '#4caf50',
  http: '#ff9800',
  verbose: '#00bcd4',
  debug: '#2962ff',
  silly: '#673ab7',
  data: '#e91e63',
  default: '#009688',
})
```

**For logUtils**

```
const logger = require('winext-logger');

const logUtils = logger.logUtils;
const loggerFactory = logUtils.createLogger(APP_NAME, STRUCT_NAME);
```

**Level**

```
loggerFactory.error(message, args = {})
loggerFactory.warn(message, args = {})
loggerFactory.info(message, args = {})
loggerFactory.http(message, args = {})
loggerFactory.verbose(message, args = {})
loggerFactory.debug(message, args = {})
loggerFactory.silly(message, args = {})
loggerFactory.data(message, args = {})
```

