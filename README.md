# Pipe Inosoft coding test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## data folder
Contain python program to create Json version of csv saved from xlsx file

## aplication design
it will have 1 page it will need to load at first to load the pipe data from axios get it can be either API or json on /public. next this aplication will feature a pipe selection filter which require a dropdown component that contain availabe data. There may a page that give this pipe company FaQ or company or landing or item page. Pipe filter can have "grade","product type", "size", "connection" . for each filter it's required to have count of the available pipe. 

### router
* pipe search page
* landing Page(optional)
* company page(optional)
* item page(optional)

### component
* pipe search page
    * filters
        * dropDown
            * filterNode
    * items(description of the item)
    * loading(data filtering)(optional recomended)
    * loading(infinite)(optional recomended)
* navbar(optional)
* loading(start)
* landing page(optional)
    * .... idk what it wil looks like ....
* company page(optional)
    * .... idk what it wil looks like ....
* item page(optional)
    * .... well it will be the same with the fields on the data .....

