import { MDEditorProps } from '@uiw/react-md-editor';
import { FC } from 'react';
import MarkdownEditor from '@uiw/react-md-editor';
import styles from './AppMarkdownEditor.module.scss'
import clsx from 'clsx';

interface AppMarkdownEditorProps extends MDEditorProps {
  error?: boolean;
  helperText?: string;
}

const AppMarkdownEditor: FC<AppMarkdownEditorProps> = ({error, helperText, ...markdownProps }) => {
  return (
    <div>
       <MarkdownEditor{...markdownProps}  className={clsx(error && styles.error)}/>
       {helperText && <div className={styles.helperText}>{helperText}</div>}
    </div>
  );
};

export default AppMarkdownEditor;