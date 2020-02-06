// SetupTests.js - Imports globals into Jest tests
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import 'jest-prop-type-error';

enzyme.configure({adapter: new Adapter()});
