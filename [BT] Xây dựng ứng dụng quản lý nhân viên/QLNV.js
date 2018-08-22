function list() {

    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.toString = toString;
    this.find = find;
    this.append = append;
    this.clear = clear;
    this.insert = insert;
    this.length = length;
    this.remove = remove;
    this.front = front;
    this.getElement = getElement;
    this.end = end;

}

function append(element) {

    this.dataStore[this.listSize++] = element;

}

function insert(element, after) {

    var insertPos = this.find(after);

    if(insertPos > -1){

        this.dataStore.splice(insertPos+1, 0 , element);

        ++this.listSize;

        return true;

    } else {

        return false;

    }

}

function find(element) {

    for(var i = 0; i < this.dataStore.length; ++i){

        if(this.dataStore[i] == element){

            return i;

        }

    }

    return -1;

}

function length() {

    return this.listSize;

}

function toString() {

    return this.dataStore;

}

function clear() {

    delete this.dataStore;

    this.dataStore = [];

    this.listSize = this.pos = 0;

}

function remove(element) {

    var foundAt = this.find(element);

    if(foundAt > -1){

        this.dataStore.splice(foundAt,1);

        --this.listSize;

        return true;

    }

    return false;

}

function front() {

    this.pos = 0;

}

function getElement() {

    return this.dataStore[this.pos];

}

function end() {

    this.pos = this.listSize - 1;

}



var listEmployee = new list();

 e1 = ("(huan1, 20 million $, h1@gmail.com)");
 e2 = ("(huan2, 20 million $, h2@gmail.com) ");
 e3 = ("(huan3, 20 million $, h3@gmail.com) ");
 e4 = ("(huan4, 20 million $, h4@gmail.com) ");
 e5 = ("(huan5, 20 million $, h5@gmail.com) ");

listEmployee.append(e1 );
listEmployee.append(e2 );
listEmployee.append(e3 );
listEmployee.append(e4);
listEmployee.append(e5 );

// document.write(listEmployee.toString() + "<br>");

listEmployee.remove(e3);
listEmployee.remove(e5);
// document.write(listEmployee.toString());

listEmployee.insert(e4);
// document.write(listEmployee.toString());

listEmployee.front();
// document.write(listEmployee.getElement());

listEmployee.end();
document.write(listEmployee.getElement());








