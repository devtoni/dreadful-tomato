import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

const WithRouter = ({ children }: Props) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

const routerRender = (ui: React.ReactElement, options = {}) => {
  return render(ui, { wrapper: WithRouter, ...options });
};

export * from '@testing-library/react';

export { routerRender as render };
