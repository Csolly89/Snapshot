import Github from './Github';
import renderer from 'react-test-renderer'


test('renders a snapshot', () => {
    const tree = renderer.create(<Github/>).toJSON()
    expect(tree).toMatchSnapshot()
})