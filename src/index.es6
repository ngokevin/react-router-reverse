import React from 'react';
import {Link} from 'react-router';

import {createReverseLink} from './components';
import {reverse} from './utils';


export const ReverseLink = createReverseLink(React, Link);
export {reverse};
