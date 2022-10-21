# Radar website
Basic info about the app structure and a few dev advices

## dev process
чтобы максимально обезопасить себя от ошибок и проблем, которые могут возникнуть в процессе разработки, нужно будет:
* для каждого изменения создать отдельную ветку, понятно ее назвать
* как только все изменения commited, нужно сделать pull request только что созданной ветки в ветку development
* только после этого можно будет делать merge веток development и только что созданной

Документация, максимально подробно описывающая процесс, доступна по [ссылке](https://docs.google.com/document/d/1YBmXMlBL0ZOQqmNCA3cPOUap58znVeGtEGyZVXRq_W4/edit?usp=sharing).

## tech
this app is going to be build with:

* typescript
* scss

## structure
pages consist of components, components consist of ui elements. 

### ui
the directory for the smallest parts of the app such as buttons, inputs, text elements and any other stuff that could be used to create components. 

must be reusable – if _ui_ element used only once – it is not _ui_ element and should be created right inside a component.

### component 
the directory for react components that will be used to create _pages_. stuff like forms, header, footer, menu, etc.

the point is in separating the app into the smallest possible components to have a better control over development, and to be able to separate work among developers. not necessarily reusable.

### pages
pages consist of _components_. stuff like login page, contact page, the main website page, etc. 

### styles
css and scss files to be applicable for the whole app. do not add anything here.

### images
every single image should be placed here

### data 
any data like languages should be placed here.

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.