import ReactDOM from 'react-dom/server';
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import errorPageStyle from '../../routes/error/ErrorPage.css';

export default async (app) => {

  // Register Node.js middleware
  // app.use(express.static(path.resolve(__dirname, 'public')));
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());


  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    console.error(pe.render(err));

    const html = ReactDOM.renderToStaticMarkup(
      <Html
        title="Internal Server Error"
        description={err.message}
        styles={[{ id: 'css', cssText: errorPageStyle._getCss() }]} // eslint-disable-line no-underscore-dangle
      >
        {ReactDOM.renderToString(<ErrorPageWithoutStyle error={err} />)}
      </Html>,
    );

    res.status(err.status || 500);
    res.send(`<!doctype html>${html}`);
  });

}
