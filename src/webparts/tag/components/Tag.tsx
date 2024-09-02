import * as React from 'react';
import { Tag, TagGroup } from '@fluentui/react-components'

import type { ITagProps } from './ITagProps';
import styles from './Tag.module.scss';

export default class CategoryTag extends React.Component<ITagProps, {}> {
  public render(): React.ReactElement<ITagProps> {
    return (
      <>
        <p>Temas relacionados</p>
        <TagGroup aria-label="Simple tag group with Tag" role="list" className={`${styles.flex} ${styles['gap-16']}`}>
          <Tag role="listitem" className={`${styles['tag-style']}`}>Vacaciones</Tag>
          <Tag role="listitem" className={`${styles['tag-style']}`}>Solicitudes</Tag>
          <Tag role="listitem" className={`${styles['tag-style']}`}>Procesos</Tag>
          <Tag role="listitem" className={`${styles['tag-style']}`}>Recursos Humanos</Tag>
        </TagGroup>
      </>
    );
  }
}
