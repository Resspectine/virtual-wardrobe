import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { ThemeProvider } from 'material-ui-theme/provider';
import Root from 'pages/Root';

export const history = createBrowserHistory();

const queryClient = new QueryClient();

ReactDOM.render(
  <RecoilRoot>
    <Router history={history}>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Root />
        </QueryClientProvider>
      </ThemeProvider>
    </Router>
  </RecoilRoot>,
  document.getElementById('app')
);
