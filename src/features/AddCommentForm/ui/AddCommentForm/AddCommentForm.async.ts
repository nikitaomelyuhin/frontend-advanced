import { FC, lazy } from 'react';

export const AddCommentFormAsync = lazy<FC>(() => new Promise((res) => {
  setTimeout(() => {
    // @ts-ignore
    res(import('./AddCommentForm'));
  }, 500);
}));
