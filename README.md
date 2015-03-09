# shipit-silverstripe
A set of SilverStripe tasks for [Shipit](https://github.com/shipitjs/shipit) used for SilverStripe specific processes on deploy.


**Features:**

- Triggered on the `published` event from [shipit-deploy](https://github.com/shipitjs/shipit-deploy)
- Allows for running `composer` and `devbuild` tasks separately if needed
- Works via [shipit-cli](https://github.com/shipitjs/shipit) and [grunt-shipit](https://github.com/shipitjs/grunt-shipit)

## Install

```
npm install shipit-silverstripe
```

## Usage

Just simply run: (This triggers the `silverstripe` task on the deploy `published` event. No additional config necessary.)

```
shipit staging deploy

```

Or you can run the tasks separately :

```
shipit staging silverstripe
  shipit staging silverstripe:composer
  shipit staging silverstripe:devbuild
```

## License

MIT