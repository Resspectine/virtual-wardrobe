import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import { QueryClientProvider } from 'react-query';
import { Router } from 'react-router-dom';

import { AuthenticationProvide } from 'lib/providers/Authentication';
import { ThemeProvider } from 'material-ui-theme/provider';
import Root from 'pages/Root';
import queryClient from 'queryClient';

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AuthenticationProvide>
          <Root />
        </AuthenticationProvide>
      </QueryClientProvider>
    </ThemeProvider>
  </Router>,
  document.getElementById('app')
);
