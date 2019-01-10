import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'jest-emotion';
import styled from '@emotion/styled'

expect.addSnapshotSerializer(createSerializer(styled));

configure({ adapter: new Adapter() });
