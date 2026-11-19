import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import * as FileUpload from '@govuk-react/primitives/file-upload';

const visuallyHidden = { position: 'absolute', left: '-9999px' } as const;

/** A file upload, with the files React heard about and a button that disables it. */
export default function FileUploadDemo({ id, multiple = false }: { id: string; multiple?: boolean }) {
  const [chosen, setChosen] = useState<string[]>();
  const [disabled, setDisabled] = useState(false);
  // Marks hydration on the DOM, so tests can wait for it.
  const hydrated = useRef<HTMLDivElement>(null);
  useEffect(() => {
    hydrated.current?.setAttribute('data-hydrated', 'true');
  }, []);
  return (
    <div ref={hydrated} data-testid={`file-upload-${id}`} data-hydrated="false" suppressHydrationWarning>
      <label id={`${id}-label`} htmlFor={id}>
        Upload a file
      </label>
      <p id={`${id}-hint`}>This can be in either JPG or PNG format</p>
      <FileUpload.Root emptyClass="empty" draggingClass="dragging" disabledClass="disabled">
        <FileUpload.DropZone data-testid={`zone-${id}`}>
          <FileUpload.Button>
            <FileUpload.Status data-testid={`status-${id}`} />
            <FileUpload.Separator style={visuallyHidden} />
            <span>Choose file</span> <span>or drop file</span>
          </FileUpload.Button>
          <FileUpload.Input
            id={id}
            name={id}
            multiple={multiple}
            disabled={disabled}
            aria-describedby={`${id}-hint`}
            onChange={(event) => setChosen(Array.from(event.target.files ?? [], (file) => file.name))}
          />
        </FileUpload.DropZone>
        <FileUpload.Announcements style={visuallyHidden} data-testid={`announcements-${id}`} />
      </FileUpload.Root>
      <p data-testid={`chosen-${id}`}>{chosen ? `React heard: ${chosen.join(', ') || 'none'}` : ''}</p>
      <button type="button" onClick={() => setDisabled((value) => !value)}>
        {disabled ? 'Enable' : 'Disable'}
      </button>
    </div>
  );
}
