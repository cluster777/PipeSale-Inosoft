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

## router
* pipe search page
* landing Page(optional)
* company page(optional)
* item page(optional)

## component
* pipe search page
    * filters
        * dropDown
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

## state
application have two state in pipe page:
* application dont have the data 
    * state ready assigned false as init and data not yet loaded from server
        * in this state the application will call action to load and pre-process the data to get unique row value in filter collumn if `/` opened
    * data ready
        * in this state pipe page ready to answer any user query

## how to filter
application using $route.query to keep state of filter and all of the page use watcher to update it state.
* query update when user click menu in dropdown
* every child have monitor on this
* every time there is update pipe listing will update
* used as key on dropDown

## drop down counting
dropDown will re-count if the state of filter change.
* each dropDown will count every item separately
* algorithm is in dropDown Mounted
* each filter will create filtered data(without the respective filter) then it will count each occurence 
    * example grade will not apply grade filter on its data , size will not apply size filter on its data

### dropDown toggle 
actually its depend on requirement:
* v-show will not re-compute when opening or closing **but** if the data quite big it will give quite headache since it will recompute 4x for each filter(will make client work for something that user dont always use)
* v-if will re-compute when opening or closing **but** the data will only compute only if its opened(will make a bit waiting time)

since the data not too big it still usable to use v-show but for better future performance it will use v-if

### more filtering
since filter only apply to the next stage its required to keep state which has been updated which is dont so:
* store a state in store to keep on info about it named(filterState) this will contain filter name
* if the filter of said filter changed it should delete the filter then push the filter update
* if the filter update it check the filterState before doing updates