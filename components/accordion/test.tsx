import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Accordion } from './Accordion';

const mockItems = [
  {
    id: 'section-1',
    heading: { text: 'Section 1' },
    content: <p>Content for section 1</p>,
    expanded: false,
  },
  {
    id: 'section-2',
    heading: { text: 'Section 2' },
    content: <p>Content for section 2</p>,
    expanded: false,
  },
];

describe('Accordion component', () => {
  test('renders all sections collapsed by default', () => {
    render(<Accordion items={mockItems} visibleToggleAll={false} />);

    expect(screen.getByText('Section 1')).toBeInTheDocument();
    expect(screen.getByText('Section 2')).toBeInTheDocument();

    expect(screen.queryByText('Content for section 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Content for section 2')).not.toBeInTheDocument();
  });

  test('toggles a single section open and closed on click', () => {
    render(<Accordion items={mockItems} visibleToggleAll={false} />);

    const section1Header = screen.getByText('Section 1');
    fireEvent.click(section1Header);

    expect(screen.getByText('Content for section 1')).toBeInTheDocument();

    fireEvent.click(section1Header);

    expect(screen.queryByText('Content for section 1')).not.toBeInTheDocument();
  });

  test('renders and toggles all sections using "Show all sections" button', () => {
    render(<Accordion items={mockItems} visibleToggleAll={true} />);

    const toggleAllBtn = screen.getByText('Show all sections');
    expect(toggleAllBtn).toBeInTheDocument();

    fireEvent.click(toggleAllBtn);

    expect(screen.getByText('Content for section 1')).toBeInTheDocument();
    expect(screen.getByText('Content for section 2')).toBeInTheDocument();

    expect(screen.getByText('Hide all sections')).toBeInTheDocument();

    fireEvent.click(toggleAllBtn);

    expect(screen.queryByText('Content for section 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Content for section 2')).not.toBeInTheDocument();
  });

  test('only toggles the correct section when clicking its header', () => {
    render(<Accordion items={mockItems} visibleToggleAll={false} />);

    fireEvent.click(screen.getByText('Section 2'));

    expect(screen.queryByText('Content for section 1')).not.toBeInTheDocument();
    expect(screen.getByText('Content for section 2')).toBeInTheDocument();
  });
});
