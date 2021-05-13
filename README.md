# Autoilumittari

Web application to compare car speed and fuel consumption - made for code challenge.

## Solidabiksen koodihaaste

Live demo: https://autoilumittari.web.app/

- Mitä teknologioita olet käyttänyt ja millä käyttöjärjestelmällä
  - Angular (typescript + html + scss)
  - Angular Material komponenttikirjasto
  - Firebase Hosting
  - Kehitysympäristö: Windows 10
- Ohjeet miten ratkaisusi pystytetään ja käynnistetään
  1. `git clone https://github.com/akikesulahti/autoilumittari`
  2. `npm install`
  3. `ng serve -o` (avaa selaimen `http://localhost:4200/`)
- Muutaman lauseen kuvaus tekemästäsi ratkaisusta
  - PWA Angular sovellus
  - UI on yksi responsiivinen kortti, jonka sisällä 3 tabia - ei muita sivuja - ei reitityksiä
  - Laskuri laskee lennosta muokkaamalla haluttaja arvoja
  - Sovelluksessa ei ole testejä

## VSCode settings

Project uses [angular-eslint](https://github.com/angular-eslint/angular-eslint) and [Prettier](https://prettier.io/) with default configs.
Only thing manually changed is printWidth from 80 to 120 and singleQuote: true.

Recommended extensions:

- [Angular Language Service](https://angular.io/guide/language-service) (Angular)
- [Angular Snippets](https://github.com/johnpapa/vscode-angular-snippets) (John papa)
- [ESLint](https://github.com/Microsoft/vscode-eslint) (Dirk Baeumer)
- [Prettier](https://prettier.io/) (Prettier)

Recommended settings (ctrl+shift+P - 'Open Settings (JSON)'):

```
{
  // Format
  "editor.tabSize": 2,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  }
}
```

## TODO

- Add tests, especially to important calculations
- Refactor speed section to use generic code and add new settings selection 'number of different speeds'
- Add address/map selection where user can search start and end location with address
  - Use those addresses to calculate distance eg. with Google APIs

## Lighthouse score

- Performance: 100
- Accessability: 98
  - Background and foreground colors do not have a sufficient contrast ratio.
- Best Practices: 100
- SEO: 100
- PWA: Passed

## Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
