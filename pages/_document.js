import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta name="robots" content="index,follow" />
          <meta name="description" content="Desarrollador frontend y diseñador UI con más de 1 año de experiencia en el sector publicitario. Ha colaborado con empresas como: Leo Burnett y Pfizer. Busca participar en proyectos que impacten a la sociedad bajo la intersección de desarrollo y diseño." />
          <meta name="keywords" content="Desarrollador frontend, diseñador UI" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
          <link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192"  href="favicon/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
          <link rel="manifest" href="favicon/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          <title>Felipe Merchan</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument