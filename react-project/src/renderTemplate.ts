interface TemplateParams {
  cssPath: string;
  jsPath: string;
  content: string;
}

export function renderTemplate({ cssPath, jsPath, content = '' }: TemplateParams) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + React + TS</title>
        <script type="module" crossorigin src="/assets/${jsPath}"></script>
        <link rel="stylesheet" href="/assets/${cssPath}">
    </head>
    <body>
        <div id="root">${content}</div>
        
    </body>
    </html>`;
}
