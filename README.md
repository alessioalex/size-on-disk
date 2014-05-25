# size-on-disk

Wrapper over the [du](http://en.wikipedia.org/wiki/Du_(Unix)) command to get a file/folder's size on disk.

## Usage

```js
getSize(process.env.FOLDER || process.cwd(), function(err, bytes) {
  if (err) { throw err; }

  console.log(bytes + ' bytes');
  console.log((bytes / 1024 / 1024).toFixed(2) + ' Mb');
});
```

## License

MIT
