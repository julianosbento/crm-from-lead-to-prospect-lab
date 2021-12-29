import React from 'react';

import ExternalCollapsible from 'react-collapsible';

import type { CollapsibleProps } from 'react-collapsible';

function Collapsible({ children, trigger, ...props }: CollapsibleProps) {
  return (
    <ExternalCollapsible trigger={trigger} {...props}>
      {children}
    </ExternalCollapsible>
  );
}

export default Collapsible;
