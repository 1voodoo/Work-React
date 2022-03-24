import { MDEditorProps } from '@uiw/react-md-editor';
import { forwardRef } from 'react';
import MarkdownEditor from '@uiw/react-md-editor';
import styles from './AppMarkdownEditor.module.scss'
import clsx from 'clsx';

interface AppMarkdownEditorProps extends MDEditorProps {
  error?: boolean;
  helperText?: string;
}

const AppMarkdownEditor = forwardRef<HTMLDivElement, AppMarkdownEditorProps>(({error, helperText, ...markdownProps }, ref) => {
  return (
    <div ref={ref}>
       <MarkdownEditor {...markdownProps}  className={clsx(error && styles.error)}/>
       {helperText && <div className={styles.helperText}>{helperText}</div>}
    </div>
  );
});

export default AppMarkdownEditor;