import { Component } from '@stencil/core';
import { version } from '../../../lib/version';

@Component({
  tag: 'acc-version',
  styleUrl: 'acc-version.css',
  shadow: true
})
export class AccVersion {

  render() {
    return (
      <span class="version">
        {version}
      </span>
    );
  }

}
