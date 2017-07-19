// Load raven for error catching
if (location.origin.match(/https?:\/\/backstroke\.us/)) {
  Raven
    .config('https://9659cab6e0e14caa89c1899bbc9210e9@sentry.io/193304')
    .install();
}
