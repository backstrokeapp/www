import * as React from 'react';

export default function ShutdownNotice() {
  return <div className="shutdown-notice">
    <h1>Backstroke has shut down.</h1>
    <p>
      This web site is here purely for historical reasons - see the notice in the <a href="https://github.com/backstrokeapp/server#i-dont-have-the-bandwidth-to-maintain-backstroke-anymore">README</a> for more information. Thanks for the fun ride all these years!
    </p>
    <p>
      - <a href="https://rgaus.net">Ryan Gaus</a>
    </p>
  </div>;
}
