import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import { toMatchImageSnapshot } from "jest-image-snapshot";

configure({ adapter: new Adapter() });

expect.extend({ toMatchImageSnapshot });
