import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { act, fireEvent, render, screen } from '@testing-library/react';
import * as FileUpload from '.';

function Example({
  disabled,
  multiple,
  id = 'upload',
  describedBy = 'upload-hint',
  ...props
}: FileUpload.RootProps & { disabled?: boolean; multiple?: boolean; id?: string; describedBy?: string }) {
  return (
    <form>
      <label htmlFor={id}>Upload a file</label>
      <p id="upload-hint">This can be in either JPG or PNG format</p>
      <FileUpload.Root {...props}>
        <FileUpload.DropZone data-testid="zone">
          <FileUpload.Button>
            <FileUpload.Status data-testid="status" />
            <FileUpload.Separator />
            Choose file
          </FileUpload.Button>
          <FileUpload.Input
            id={id}
            name="upload"
            aria-describedby={describedBy}
            disabled={disabled}
            multiple={multiple}
          />
        </FileUpload.DropZone>
        <FileUpload.Announcements data-testid="announcements" />
      </FileUpload.Root>
    </form>
  );
}

// The element upgrades in connectedCallback, after React commits.
const upgraded = () => act(() => Promise.resolve());

const input = () => document.querySelector<HTMLInputElement>('input[type="file"]')!;

const choose = (...names: string[]) => {
  const files = names.map((name) => new File(['x'], name));
  Object.defineProperty(input(), 'files', { configurable: true, value: files });
  fireEvent.change(input());
};

const dataTransfer = (count: number) => ({
  files: Array.from({ length: count }, (_, index) => new File(['x'], `file-${index}.png`)),
  items: Array.from({ length: count }, () => ({ kind: 'file' })),
  types: ['Files'],
});

describe('FileUpload', () => {
  test('without JavaScript, shows the file input and hides the button', () => {
    const container = document.createElement('div');
    container.innerHTML = renderToStaticMarkup(<Example />);
    expect(container.querySelector('button')).toHaveAttribute('hidden');
    expect(container.querySelector('input')).not.toHaveAttribute('hidden');
    expect(container.querySelector('input')).toHaveAttribute('id', 'upload');
  });

  test('on upgrade, the button takes the input’s id, label and description', async () => {
    render(<Example />);
    await upgraded();
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('id', 'upload');
    expect(button).toHaveAttribute('aria-labelledby', 'upload-label upload-comma upload');
    expect(button).toHaveAccessibleDescription('This can be in either JPG or PNG format');
    expect(button).toHaveAttribute('data-empty');
    expect(input()).toHaveAttribute('id', 'upload-input');
    expect(input()).not.toBeVisible();
    expect(screen.getByText('Upload a file')).toHaveAttribute('id', 'upload-label');
  });

  test('the button opens the file picker', async () => {
    render(<Example />);
    await upgraded();
    const click = vi.spyOn(input(), 'click');
    fireEvent.click(screen.getByRole('button'));
    expect(click).toHaveBeenCalled();
  });

  test('says which files are chosen, with the plural forms it is given', async () => {
    render(
      <Example emptyClass="empty" multipleFilesChosen={{ one: '%{count} ffeil', other: '%{count} o ffeiliau' }} />
    );
    await upgraded();
    choose('passport.jpg');
    expect(screen.getByTestId('status')).toHaveTextContent('passport.jpg');
    expect(screen.getByRole('button')).not.toHaveClass('empty');
    choose('passport.jpg', 'licence.png');
    expect(screen.getByTestId('status')).toHaveTextContent('2 o ffeiliau');
    choose();
    expect(screen.getByTestId('status')).toHaveTextContent('No file chosen');
    expect(screen.getByRole('button')).toHaveClass('empty');
  });

  test('takes a dropped file, shows dragging, and announces the drop zone', async () => {
    const onChange = vi.fn();
    render(
      <>
        <Example draggingClass="dragging" />
        <p>Elsewhere</p>
      </>
    );
    await upgraded();
    input().addEventListener('change', onChange);
    const button = screen.getByRole('button');
    fireEvent.dragEnter(button, { dataTransfer: dataTransfer(1) });
    expect(button).toHaveClass('dragging');
    expect(screen.getByTestId('announcements')).toHaveTextContent('Entered drop zone');
    fireEvent.dragEnter(screen.getByText('Elsewhere'), { dataTransfer: dataTransfer(1) });
    expect(button).not.toHaveClass('dragging');
    expect(screen.getByTestId('announcements')).toHaveTextContent('Left drop zone');

    const transfer = dataTransfer(1);
    Object.defineProperty(input(), 'files', { configurable: true, writable: true });
    fireEvent.drop(button, { dataTransfer: transfer });
    expect(input().files).toBe(transfer.files);
    expect(onChange).toHaveBeenCalled();
    expect(screen.getByTestId('status')).toHaveTextContent('file-0.png');
  });

  test('ignores more files than the input takes', async () => {
    render(<Example draggingClass="dragging" />);
    await upgraded();
    const button = screen.getByRole('button');
    fireEvent.dragEnter(button, { dataTransfer: dataTransfer(2) });
    expect(button).not.toHaveClass('dragging');
    fireEvent.drop(button, { dataTransfer: dataTransfer(2) });
    expect(screen.getByTestId('status')).toHaveTextContent('No file chosen');
  });

  test('takes several dropped files when the input is multiple', async () => {
    render(<Example multiple />);
    await upgraded();
    Object.defineProperty(input(), 'files', { configurable: true, writable: true });
    fireEvent.drop(screen.getByRole('button'), { dataTransfer: dataTransfer(3) });
    expect(screen.getByTestId('status')).toHaveTextContent('3 files chosen');
  });

  test('follows the input’s disabled state', async () => {
    const { rerender } = render(<Example disabledClass="disabled" />);
    await upgraded();
    expect(screen.getByRole('button')).toBeEnabled();
    rerender(<Example disabledClass="disabled" disabled />);
    await upgraded();
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByTestId('zone')).toHaveClass('disabled');
    rerender(<Example disabledClass="disabled" />);
    await upgraded();
    expect(screen.getByRole('button')).toBeEnabled();
    expect(screen.getByTestId('zone')).not.toHaveClass('disabled');
  });

  test('a form reset clears the status', async () => {
    render(<Example />);
    await upgraded();
    choose('passport.jpg');
    Object.defineProperty(input(), 'files', { configurable: true, value: [] });
    vi.useFakeTimers();
    fireEvent.reset(document.querySelector('form')!);
    act(() => vi.runAllTimers());
    vi.useRealTimers();
    expect(screen.getByTestId('status')).toHaveTextContent('No file chosen');
  });

  test('a re-render leaves the ids and status to the element', async () => {
    const { rerender } = render(<Example />);
    await upgraded();
    choose('passport.jpg');
    rerender(<Example leftDropZone="Wedi gadael" />);
    await upgraded();
    expect(screen.getByRole('button')).toHaveAttribute('id', 'upload');
    expect(input()).toHaveAttribute('id', 'upload-input');
    expect(screen.getByTestId('status')).toHaveTextContent('passport.jpg');
  });

  test('follows a new description or id from React', async () => {
    const { rerender } = render(<Example />);
    await upgraded();
    rerender(<Example describedBy="upload-hint upload-error" />);
    await upgraded();
    expect(screen.getByRole('button')).toHaveAttribute('aria-describedby', 'upload-hint upload-error');
    rerender(<Example id="photo" />);
    await upgraded();
    expect(screen.getByRole('button')).toHaveAttribute('id', 'photo');
    expect(screen.getByRole('button')).toHaveAttribute('aria-labelledby', 'upload-label photo-comma photo');
    expect(input()).toHaveAttribute('id', 'photo-input');
  });

  test('follows new plural forms', async () => {
    const { rerender } = render(<Example multipleFilesChosen={{ other: '%{count} chosen' }} />);
    await upgraded();
    choose('a.png', 'b.png');
    rerender(<Example multipleFilesChosen={{ other: '%{count} ffeil' }} />);
    await upgraded();
    expect(screen.getByTestId('status')).toHaveTextContent('2 ffeil');
  });

  test('announces entering the drop zone again after a drop', async () => {
    render(<Example />);
    await upgraded();
    const button = screen.getByRole('button');
    fireEvent.dragEnter(button, { dataTransfer: dataTransfer(1) });
    const first = screen.getByTestId('announcements').firstChild;
    Object.defineProperty(input(), 'files', { configurable: true, writable: true });
    fireEvent.drop(button, { dataTransfer: dataTransfer(1) });
    fireEvent.dragEnter(button, { dataTransfer: dataTransfer(1) });
    expect(screen.getByTestId('announcements')).toHaveTextContent('Entered drop zone');
    expect(screen.getByTestId('announcements').firstChild).not.toBe(first);
  });

  test('stops listening to the form once unmounted', async () => {
    const remove = vi.spyOn(HTMLFormElement.prototype, 'removeEventListener');
    const { unmount } = render(<Example />);
    await upgraded();
    unmount();
    expect(remove).toHaveBeenCalledWith('reset', expect.any(Function));
    remove.mockRestore();
  });
});
